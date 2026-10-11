// AMH Polis API. Serves wallet login, game saves per wallet, and chain config.
// Chain actions (deposit/claim/convert) return 501 until AMH_MINT, AMH_PROGRAM_ID and AMH_TREASURY_ATA are set.
const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const nacl = require("tweetnacl");
const B = require("./budget.js");
const bs58 = require("bs58");

const PORT = process.env.PORT || 10000;
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, "data");
const RPC = process.env.SOLANA_RPC || "https://api.mainnet-beta.solana.com";
const ORIGIN = process.env.ALLOWED_ORIGIN || "*";
const MAX_BODY = 2 * 1024 * 1024;
fs.mkdirSync(path.join(DATA_DIR, "games"), { recursive: true });

const nonces = new Map();   // address -> { message, exp }
const tokens = new Map();   // token -> { address, exp }

function readJson(file, dflt) {
  try { return JSON.parse(fs.readFileSync(file, "utf8")); } catch (e) { return dflt; }
}
function send(res, code, obj) {
  res.writeHead(code, {
    "content-type": "application/json",
    "access-control-allow-origin": ORIGIN,
    "access-control-allow-headers": "content-type, authorization",
    "access-control-allow-methods": "GET, POST, OPTIONS",
  });
  res.end(JSON.stringify(obj));
}
function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", c => { data += c; if (data.length > MAX_BODY) { reject(new Error("too large")); req.destroy(); } });
    req.on("end", () => { try { resolve(data ? JSON.parse(data) : {}); } catch (e) { reject(new Error("bad json")); } });
  });
}
function authAddress(req) {
  const h = req.headers.authorization || "";
  const tok = h.startsWith("Bearer ") ? h.slice(7) : "";
  const t = tokens.get(tok);
  if (!t || t.exp < Date.now()) return null;
  return t.address;
}
function validAddress(a) {
  try { return bs58.decode(a).length === 32; } catch (e) { return false; }
}
function gameFile(address) {
  // one file per wallet; the address is validated before it reaches here
  return path.join(DATA_DIR, "games", address + ".json");
}
async function rpc(method, params) {
  const r = await fetch(RPC, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }) });
  const j = await r.json();
  if (j.error) throw new Error(j.error.message || "rpc error");
  return j.result;
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://x");
  if (req.method === "OPTIONS") return send(res, 204, {});
  try {
    if (req.method === "GET" && url.pathname === "/api/config") {
      return send(res, 200, {
        mint: process.env.AMH_MINT || null,
        programId: process.env.AMH_PROGRAM_ID || null,
        treasuryAta: process.env.AMH_TREASURY_ATA || null,
        decimals: Number(process.env.AMH_DECIMALS || 9),
      });
    }
    if (req.method === "GET" && url.pathname === "/api/nonce") {
      const address = url.searchParams.get("address") || "";
      if (!validAddress(address)) return send(res, 400, { error: "invalid address" });
      const message = "AMH Polis login\nAddress: " + address + "\nNonce: " + crypto.randomBytes(16).toString("hex");
      nonces.set(address, { message, exp: Date.now() + 5 * 60 * 1000 });
      return send(res, 200, { message });
    }
    if (req.method === "POST" && url.pathname === "/api/login") {
      const b = await readBody(req);
      const n = nonces.get(b.address);
      if (!n || n.exp < Date.now()) return send(res, 400, { error: "nonce expired, try again" });
      let ok = false;
      try {
        ok = nacl.sign.detached.verify(
          new TextEncoder().encode(n.message),
          bs58.decode(b.signature),
          bs58.decode(b.address));
      } catch (e) { ok = false; }
      if (!ok) return send(res, 401, { error: "bad signature" });
      nonces.delete(b.address);
      const token = crypto.randomBytes(24).toString("hex");
      tokens.set(token, { address: b.address, exp: Date.now() + 7 * 24 * 3600 * 1000 });
      return send(res, 200, { token, address: b.address });
    }
    if (req.method === "GET" && url.pathname === "/api/me") {
      const a = authAddress(req);
      if (!a) return send(res, 401, { error: "login first" });
      return send(res, 200, { address: a, balance: 0, claimedToday: 0, cap: 100 });
    }
    if (req.method === "GET" && url.pathname === "/api/wallet") {
      const a = authAddress(req);
      if (!a) return send(res, 401, { error: "login first" });
      return send(res, 200, { balance: 0 });
    }
    if (req.method === "GET" && url.pathname === "/api/blockhash") {
      const r = await rpc("getLatestBlockhash", [{ commitment: "finalized" }]);
      return send(res, 200, { blockhash: r.value.blockhash });
    }
    if (req.method === "GET" && url.pathname === "/api/game") {
      const a = authAddress(req);
      if (!a) return send(res, 401, { error: "login first" });
      try { return send(res, 200, { state: JSON.parse(fs.readFileSync(gameFile(a), "utf8")) }); }
      catch (e) { return send(res, 200, { state: null }); }
    }
    if (req.method === "POST" && url.pathname === "/api/game") {
      const a = authAddress(req);
      if (!a) return send(res, 401, { error: "login first" });
      const b = await readBody(req);
      if (!b.state || typeof b.state !== "object") return send(res, 400, { error: "no state" });
      fs.writeFileSync(gameFile(a), JSON.stringify(b.state));
      return send(res, 200, { ok: true, savedAt: Date.now() });
    }
    if (req.method === "GET" && url.pathname === "/api/budget") {
      const now = Date.now(), day = Math.floor(now / B.DAY);
      const y = B.yearIndex(now);
      const g = readJson(path.join(DATA_DIR, "budget.json"), { day: -1, spent: 0 });
      const spent = g.day === day ? g.spent : 0;
      return send(res, 200, { year: y + 1, yearBudget: y < 0 ? 0 : Math.round(B.YEARLY[y]),
        dailyBudget: Math.round(B.dailyBudget(now)), spentToday: Math.round(spent), totalPool: B.POOL, years: B.YEARS });
    }
    if (req.method === "POST" && url.pathname === "/api/reward") {
      const a = authAddress(req);
      if (!a) return send(res, 401, { error: "login first" });
      const b = await readBody(req);
      const want = Math.max(0, Number(b.amount) || 0);
      const now = Date.now(), day = Math.floor(now / B.DAY);
      const daily = B.dailyBudget(now);
      if (daily <= 0) return send(res, 200, { credited: 0, reason: "no budget this year" });
      // one player can take at most 5% of the day's budget
      const playerCap = daily * 0.05;
      const gf = path.join(DATA_DIR, "budget.json");
      const g = readJson(gf, { day: -1, spent: 0 });
      const gSpent = g.day === day ? g.spent : 0;
      const pf = path.join(DATA_DIR, "rewards", a + ".json");
      fs.mkdirSync(path.join(DATA_DIR, "rewards"), { recursive: true });
      const p = readJson(pf, { day: -1, earned: 0 });
      const pEarned = p.day === day ? p.earned : 0;
      const credited = Math.max(0, Math.min(want, playerCap - pEarned, daily - gSpent));
      fs.writeFileSync(gf, JSON.stringify({ day, spent: gSpent + credited }));
      fs.writeFileSync(pf, JSON.stringify({ day, earned: pEarned + credited }));
      return send(res, 200, { credited: Math.floor(credited * 1000) / 1000 });
    }
    if (["/api/deposit/verify", "/api/convert", "/api/claim"].includes(url.pathname)) {
      return send(res, 501, { error: "chain actions are not configured on this server yet" });
    }
    return send(res, 404, { error: "not found" });
  } catch (e) {
    return send(res, 500, { error: e.message || "server error" });
  }
});
server.listen(PORT, () => console.log("AMH Polis API on port " + PORT));
