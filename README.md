<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>AMH Polis 3D</title>
<meta name="description" content="AMH Polis 3D: لعبة بناء مدن ثلاثية الأبعاد تعمل من المتصفح. AMH Polis 3D: a 3D city-building game that runs in your browser.">
<meta property="og:title" content="AMH Polis 3D">
<meta property="og:description" content="لعبة بناء مدن ثلاثية الأبعاد تعمل من المتصفح. A 3D city-building game that runs in your browser.">
<meta property="og:type" content="website">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap">
<style>
*{box-sizing:border-box}
body{margin:0;background:#0b1020;color:#e9edf7;font-family:Cairo,system-ui,sans-serif;line-height:1.75}
a{color:#2ee6c5}
a:hover{color:#f5b942}
a:focus-visible,button:focus-visible{outline:2px solid #f5b942;outline-offset:3px}

header.top{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px 32px;padding:18px 48px;border-bottom:1px solid #1d2740}
.brand{font-size:22px;font-weight:900;color:#f5b942}
nav.main{display:flex;flex-wrap:wrap;gap:8px 22px;font-size:16px}
nav.main a{color:#c9d3ea;text-decoration:none}
.langs{display:flex;gap:8px}
.lang-btn{font:inherit;font-size:15px;font-weight:700;padding:8px 16px;border-radius:999px;cursor:pointer;background:transparent;color:#e9edf7;border:1px solid #3a4a72}
.lang-btn.active{background:#f5b942;color:#0b1020;border-color:#f5b942}

.notice{background:#18223d;color:#c9d3ea;text-align:center;padding:10px 24px;font-size:15px}

.hero{max-width:1200px;margin:0 auto;padding:88px 48px 72px;display:flex;flex-wrap:wrap;align-items:center;gap:48px}
.hero-text{flex:1 1 420px;min-width:0}
.kicker{color:#2ee6c5;font-weight:600;font-size:18px}
h1{margin:12px 0 16px;font-size:64px;font-weight:900;line-height:1.15;color:#fff}
.hero-body{margin:0 0 32px;font-size:20px;color:#c9d3ea;max-width:560px}
.skyline{flex:1 1 360px;min-width:0;max-width:560px}
.skyline svg{width:100%;height:auto;display:block}

.btn-row{display:flex;flex-wrap:wrap;gap:14px}
.btn{display:inline-block;font-weight:700;font-size:18px;padding:14px 28px;border-radius:10px;text-decoration:none}
.btn-primary{background:#f5b942;color:#0b1020}
.btn-primary:hover{color:#0b1020;background:#ffc95c}
.btn-outline{border:1px solid #3a4a72;color:#e9edf7}
.btn-tg{border:1px solid #2ee6c5;color:#2ee6c5}

.wrap{max-width:1200px;margin:0 auto;padding:72px 48px;box-sizing:border-box}
.wrap h2{margin:0 0 14px;font-size:36px;font-weight:800}
.lead{margin:0 0 36px;font-size:19px;color:#c9d3ea;max-width:760px}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:18px}
.card{background:#141b2e;border:1px solid #22304f;border-radius:14px;padding:24px}
.card h3{margin:16px 0 8px;font-size:20px;font-weight:800}
.card p{margin:0;font-size:16px;color:#c9d3ea}
.num{width:40px;height:40px;border-radius:50%;background:#f5b942;color:#0b1020;font-weight:900;font-size:18px;display:flex;align-items:center;justify-content:center}
.feat-n{font-size:15px;font-weight:700;color:#2ee6c5}

.rules{margin-top:32px;background:#1c1a14;border:1px solid #5a4415;border-radius:14px;padding:24px 28px}
.rules h3{margin:0 0 12px;font-size:20px;font-weight:800;color:#f5b942}
.rules ul{margin:0;padding-inline-start:22px;font-size:17px}
.rules li{margin-bottom:8px}
.risk{margin:24px 0 0;font-size:16px;color:#f0d59a}

.facts .label{color:#9aa6c4;font-size:15px}
.facts .value{font-size:22px;font-weight:800;margin-top:4px}
.addr-label{color:#9aa6c4;font-size:15px;margin:28px 0 8px}
.addr{direction:ltr;text-align:start;background:#0f1528;border:1px solid #22304f;border-radius:10px;padding:16px 18px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:16px;color:#2ee6c5;word-break:break-all}
.sale{margin:24px 0 0;font-size:17px;color:#c9d3ea}

.links{display:flex;flex-wrap:wrap;gap:14px}
.link-card{display:flex;flex-direction:column;gap:2px;background:#141b2e;border:1px solid #22304f;border-radius:14px;padding:18px 24px;min-width:220px;text-decoration:none;color:#e9edf7}
.link-card .l1{color:#9aa6c4;font-size:15px}
.link-card .l2{direction:ltr;text-align:start;font-size:18px;font-weight:700}

.warn{margin-top:28px;background:#1c1a14;border:1px solid #5a4415;border-radius:14px;padding:20px 24px;color:#f0d59a;font-size:16px}

footer{border-top:1px solid #1d2740;padding:28px 48px;color:#9aa6c4;font-size:15px}
.foot{max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px}

@media (max-width:720px){
  header.top{padding:16px 20px}
  .hero{padding:48px 20px}
  h1{font-size:44px}
  .wrap{padding:56px 20px}
  .wrap h2{font-size:30px}
  footer{padding:24px 20px}
}
</style>
</head>
<body>

<header class="top">
  <div class="brand">AMH Polis 3D</div>
  <nav class="main">
    <a href="#about" data-ar="عن اللعبة" data-en="About">عن اللعبة</a>
    <a href="#earn" data-ar="طريقة الربح" data-en="How to earn">طريقة الربح</a>
    <a href="#token" data-ar="التوكن" data-en="Token">التوكن</a>
    <a href="#community" data-ar="المجتمع" data-en="Community">المجتمع</a>
    <a href="#support" data-ar="خدمة العملاء" data-en="Support">خدمة العملاء</a>
  </nav>
  <div class="langs">
    <button type="button" id="btn-ar" class="lang-btn active" aria-pressed="true">عربي</button>
    <button type="button" id="btn-en" class="lang-btn" aria-pressed="false">English</button>
  </div>
</header>

<div class="notice" data-ar="هذا هو الموقع الرسمي الحالي لـ AMH. إذا وصلت من الموقع القديم، فهذا هو الموقع المحدّث." data-en="This is the current official AMH website. If you came from the older site, this is the current one.">هذا هو الموقع الرسمي الحالي لـ AMH. إذا وصلت من الموقع القديم، فهذا هو الموقع المحدّث.</div>

<section class="hero">
  <div class="hero-text">
    <div class="kicker" data-ar="لعبة بناء مدن ثلاثية الأبعاد" data-en="A 3D city-building game">لعبة بناء مدن ثلاثية الأبعاد</div>
    <h1>AMH Polis 3D</h1>
    <p class="hero-body" data-ar="ابنِ مدينتك وطوّرها وأدِرها مباشرة من المتصفح. كل الأرقام والاقتصاد تُحسب على السيرفر." data-en="Build your city, grow it, and run it right in your browser. All game numbers and the economy are calculated on the server.">ابنِ مدينتك وطوّرها وأدِرها مباشرة من المتصفح. كل الأرقام والاقتصاد تُحسب على السيرفر.</p>
    <div class="btn-row">
      <a class="btn btn-primary" href="https://desktop-i49ma2u.tail507a27.ts.net/" target="_blank" rel="noopener noreferrer" data-ar="العب الآن" data-en="Play now">العب الآن</a>
      <a class="btn btn-outline" href="#earn" data-ar="طريقة الربح" data-en="How to earn">طريقة الربح</a>
      <a class="btn btn-tg" href="https://t.me/AMHtokn" target="_blank" rel="noopener noreferrer" data-ar="انضم لجروب التلجرام" data-en="Join the Telegram group">انضم لجروب التلجرام</a>
    </div>
  </div>
  <div class="skyline">
    <svg viewBox="0 0 520 360" aria-hidden="true">
      <rect x="0" y="0" width="520" height="360" rx="18" fill="#101831"/>
      <rect x="20" y="200" width="70" height="120" fill="#1c2846"/>
      <rect x="100" y="130" width="90" height="190" fill="#26365c"/>
      <rect x="200" y="60" width="60" height="260" fill="#2d4170"/>
      <rect x="227" y="30" width="6" height="30" fill="#2d4170"/>
      <rect x="270" y="160" width="80" height="160" fill="#1c2846"/>
      <rect x="360" y="100" width="70" height="220" fill="#26365c"/>
      <rect x="440" y="190" width="70" height="130" fill="#1c2846"/>
      <rect x="116" y="150" width="10" height="12" fill="#f5b942"/>
      <rect x="140" y="150" width="10" height="12" fill="#f5b942"/>
      <rect x="116" y="180" width="10" height="12" fill="#f5b942"/>
      <rect x="140" y="180" width="10" height="12" fill="#f5b942"/>
      <rect x="116" y="210" width="10" height="12" fill="#f5b942"/>
      <rect x="140" y="210" width="10" height="12" fill="#f5b942"/>
      <rect x="216" y="85" width="10" height="12" fill="#f5b942"/>
      <rect x="240" y="85" width="10" height="12" fill="#f5b942"/>
      <rect x="216" y="115" width="10" height="12" fill="#f5b942"/>
      <rect x="240" y="115" width="10" height="12" fill="#f5b942"/>
      <rect x="216" y="145" width="10" height="12" fill="#f5b942"/>
      <rect x="240" y="145" width="10" height="12" fill="#f5b942"/>
      <rect x="216" y="175" width="10" height="12" fill="#f5b942"/>
      <rect x="240" y="175" width="10" height="12" fill="#f5b942"/>
      <rect x="286" y="180" width="10" height="12" fill="#f5b942"/>
      <rect x="306" y="180" width="10" height="12" fill="#f5b942"/>
      <rect x="286" y="210" width="10" height="12" fill="#f5b942"/>
      <rect x="306" y="210" width="10" height="12" fill="#f5b942"/>
      <rect x="376" y="120" width="10" height="12" fill="#f5b942"/>
      <rect x="400" y="120" width="10" height="12" fill="#f5b942"/>
      <rect x="376" y="150" width="10" height="12" fill="#f5b942"/>
      <rect x="400" y="150" width="10" height="12" fill="#f5b942"/>
      <rect x="376" y="180" width="10" height="12" fill="#f5b942"/>
      <rect x="400" y="180" width="10" height="12" fill="#f5b942"/>
      <rect x="456" y="210" width="10" height="12" fill="#2ee6c5"/>
      <rect x="480" y="210" width="10" height="12" fill="#2ee6c5"/>
      <rect x="456" y="240" width="10" height="12" fill="#2ee6c5"/>
      <rect x="480" y="240" width="10" height="12" fill="#2ee6c5"/>
      <rect x="0" y="320" width="520" height="40" fill="#0f1528"/>
    </svg>
  </div>
</section>

<section class="wrap" id="about">
  <h2 data-ar="عن اللعبة" data-en="About the game">عن اللعبة</h2>
  <p class="lead" data-ar="AMH Polis 3D لعبة مدينة ثلاثية الأبعاد. تبني المباني المدنية، وتنتج الموارد، وتدير اقتصاد مدينتك خطوة بخطوة." data-en="AMH Polis 3D is a 3D city-building game. Place civil buildings, produce resources, and run your city step by step.">AMH Polis 3D لعبة مدينة ثلاثية الأبعاد. تبني المباني المدنية، وتنتج الموارد، وتدير اقتصاد مدينتك خطوة بخطوة.</p>
  <div class="cards">
    <div class="card">
      <div class="feat-n">1</div>
      <h3 data-ar="اقتصاد يحسبه السيرفر" data-en="Server-side economy">اقتصاد يحسبه السيرفر</h3>
      <p data-ar="المباني والإنتاج والأموال تُحسب على السيرفر، والمتصفح يعرض النتائج فقط." data-en="Buildings, production and money are calculated on the server. The browser only shows the results.">المباني والإنتاج والأموال تُحسب على السيرفر، والمتصفح يعرض النتائج فقط.</p>
    </div>
    <div class="card">
      <div class="feat-n">2</div>
      <h3 data-ar="عربي وإنجليزي" data-en="Arabic and English">عربي وإنجليزي</h3>
      <p data-ar="الواجهة والموقع متاحان بالعربية والإنجليزية." data-en="The game site is available in Arabic and English.">الواجهة والموقع متاحان بالعربية والإنجليزية.</p>
    </div>
  </div>
</section>

<section class="wrap" id="earn">
  <h2 data-ar="طريقة الربح" data-en="How to earn">طريقة الربح</h2>
  <p class="lead" data-ar="الأرباح داخل اللعبة تمر بخطوات واضحة، ولا توجد نسبة أرباح مضمونة." data-en="Earnings in the game follow clear steps. No profit is guaranteed.">الأرباح داخل اللعبة تمر بخطوات واضحة، ولا توجد نسبة أرباح مضمونة.</p>
  <div class="cards">
    <div class="card">
      <div class="num">1</div>
      <h3 data-ar="تنتج مدينتك الأموال" data-en="Your city produces money">تنتج مدينتك الأموال</h3>
      <p data-ar="المباني المنتجة تولّد أموالاً داخل اللعبة." data-en="Producing buildings generate money inside the game.">المباني المنتجة تولّد أموالاً داخل اللعبة.</p>
    </div>
    <div class="card">
      <div class="num">2</div>
      <h3 data-ar="تشتري ذهباً" data-en="Buy gold">تشتري ذهباً</h3>
      <p data-ar="تستخدم الأموال داخل اللعبة لشراء الذهب." data-en="Use in-game money to buy gold.">تستخدم الأموال داخل اللعبة لشراء الذهب.</p>
    </div>
    <div class="card">
      <div class="num">3</div>
      <h3 data-ar="تحوّل الذهب إلى AMH" data-en="Convert gold to AMH">تحوّل الذهب إلى AMH</h3>
      <p data-ar="يمكن تحويل الذهب إلى عملة AMH داخل اللعبة." data-en="Gold can be converted to AMH inside the game.">يمكن تحويل الذهب إلى عملة AMH داخل اللعبة.</p>
    </div>
    <div class="card">
      <div class="num">4</div>
      <h3 data-ar="تسحب إلى محفظتك" data-en="Withdraw to your wallet">تسحب إلى محفظتك</h3>
      <p data-ar="تُسحب عملات AMH إلى محفظتك الخاصة." data-en="AMH can be withdrawn to your own wallet.">تُسحب عملات AMH إلى محفظتك الخاصة.</p>
    </div>
  </div>
  <div class="rules">
    <h3 data-ar="قواعد مهمة" data-en="Important rules">قواعد مهمة</h3>
    <ul>
      <li data-ar="السحب مقفل طالما عليك أي قرض بنكي مفتوح، حتى يُسدَّد بالكامل. الهدايا مقفلة بنفس الشرط." data-en="Withdrawals are locked while you have any open bank loan, until it is fully repaid. Gifts are locked under the same condition.">السحب مقفل طالما عليك أي قرض بنكي مفتوح، حتى يُسدَّد بالكامل. الهدايا مقفلة بنفس الشرط.</li>
      <li data-ar="متاح في دول الولايات المتحدة والاتحاد الأوروبي فقط، ولا يشمل الدول الخاضعة للعقوبات." data-en="Available only in the United States and EU countries. Sanctioned countries are excluded.">متاح في دول الولايات المتحدة والاتحاد الأوروبي فقط، ولا يشمل الدول الخاضعة للعقوبات.</li>
    </ul>
  </div>
  <p class="risk" data-ar="العملات الرقمية قد تفقد جزءاً من قيمتها أو كلها. الأرباح داخل اللعبة تعتمد على طريقة لعبك ولا تُضمن. هذا الموقع لا يقدم نصيحة استثمارية." data-en="Crypto assets can lose part or all of their value. Earnings in the game depend on how you play and are not guaranteed. This site does not offer investment advice.">العملات الرقمية قد تفقد جزءاً من قيمتها أو كلها. الأرباح داخل اللعبة تعتمد على طريقة لعبك ولا تُضمن. هذا الموقع لا يقدم نصيحة استثمارية.</p>
</section>

<section class="wrap" id="token">
  <h2 data-ar="توكن AMH" data-en="AMH token">توكن AMH</h2>
  <p class="lead" data-ar="AMH عملة على شبكة Solana. إجمالي العرض 1,500,000 عملة ثابت، ولا يتم سك عملات جديدة. العرض المتبقي موجود في مجمع السيولة، وأرصدة المجمع مقفلة بشكل دائم." data-en="AMH is a token on the Solana network. Total supply is 1,500,000 coins, fixed, with no further minting. The remaining supply sits in the liquidity pool, and the pool balances are permanently locked.">AMH عملة على شبكة Solana. إجمالي العرض 1,500,000 عملة ثابت، ولا يتم سك عملات جديدة. العرض المتبقي موجود في مجمع السيولة، وأرصدة المجمع مقفلة بشكل دائم.</p>
  <div class="cards facts">
    <div class="card">
      <div class="label" data-ar="الشبكة" data-en="Network">الشبكة</div>
      <div class="value">Solana</div>
    </div>
    <div class="card">
      <div class="label" data-ar="إجمالي العرض" data-en="Total supply">إجمالي العرض</div>
      <div class="value">1,500,000 AMH</div>
    </div>
    <div class="card">
      <div class="label" data-ar="السك" data-en="Minting">السك</div>
      <div class="value" data-ar="ثابت، بدون سك إضافي" data-en="Fixed, no additional minting">ثابت، بدون سك إضافي</div>
    </div>
  </div>
  <div class="addr-label" data-ar="عنوان العقد (Contract Address)" data-en="Contract address">عنوان العقد (Contract Address)</div>
  <div class="addr">4UimrPoyavJpjYhC94yFw4Kkb3T7AKHvCrjLixBL8x1k</div>
  <p class="sale" data-ar="يُباع AMH فقط عبر منصات التداول الخارجية. هذا الموقع لا يبيع التوكن ولا يحتوي على روابط شراء." data-en="AMH is sold only through external exchanges. This site does not sell the token and has no buy links.">يُباع AMH فقط عبر منصات التداول الخارجية. هذا الموقع لا يبيع التوكن ولا يحتوي على روابط شراء.</p>
</section>

<section class="wrap" id="community">
  <h2 data-ar="المجتمع" data-en="Community">المجتمع</h2>
  <div class="links">
    <a class="link-card" href="https://t.me/AMHtokn" target="_blank" rel="noopener noreferrer">
      <span class="l1" data-ar="جروب التلجرام" data-en="Telegram group">جروب التلجرام</span>
      <span class="l2">t.me/AMHtokn</span>
    </a>
  </div>
</section>

<section class="wrap" id="support">
  <h2 data-ar="خدمة العملاء" data-en="Customer support">خدمة العملاء</h2>
  <p class="lead" data-ar="لأي سؤال عن الموقع أو اللعبة، أو مشكلة في حسابك داخل اللعبة، تواصل معنا على حساب الدعم الرسمي على X." data-en="For any question about the website or the game, or a problem with your in-game account, contact us on our official support account on X.">لأي سؤال عن الموقع أو اللعبة، أو مشكلة في حسابك داخل اللعبة، تواصل معنا على حساب الدعم الرسمي على X.</p>
  <a class="btn btn-primary" href="https://x.com/DABABBAH2002" target="_blank" rel="noopener noreferrer" data-ar="تواصل معنا على X" data-en="Contact us on X">تواصل معنا على X</a>
  <div class="warn" data-ar="فريق الدعم لن يطلب منك أبداً كلمة السر أو عبارة الاسترداد (Seed Phrase) أو أي أموال. أي رسالة تطلب ذلك فهي نصب، حتى لو كانت من حساب يشبه حسابنا." data-en="Our support team will never ask you for your password, recovery phrase (seed phrase), or any funds. Any message asking for these is a scam, even if it comes from an account that looks like ours.">فريق الدعم لن يطلب منك أبداً كلمة السر أو عبارة الاسترداد (Seed Phrase) أو أي أموال. أي رسالة تطلب ذلك فهي نصب، حتى لو كانت من حساب يشبه حسابنا.</div>
</section>

<footer>
  <div class="foot">
    <span data-ar="© 2026 AMH. جميع الحقوق محفوظة." data-en="© 2026 AMH. All rights reserved.">© 2026 AMH. جميع الحقوق محفوظة.</span>
    <span data-ar="المعلومات في هذا الموقع للتعريف فقط، ولا تُعد نصيحة مالية أو استثمارية." data-en="Information on this site is for identification only and is not financial or investment advice.">المعلومات في هذا الموقع للتعريف فقط، ولا تُعد نصيحة مالية أو استثمارية.</span>
  </div>
</footer>

<script>
(function () {
  var btnAr = document.getElementById('btn-ar');
  var btnEn = document.getElementById('btn-en');
  var items = document.querySelectorAll('[data-ar]');

  function setLang(lang) {
    var isAr = lang === 'ar';
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    for (var i = 0; i < items.length; i++) {
      items[i].textContent = isAr ? items[i].getAttribute('data-ar') : items[i].getAttribute('data-en');
    }
    btnAr.classList.toggle('active', isAr);
    btnEn.classList.toggle('active', !isAr);
    btnAr.setAttribute('aria-pressed', String(isAr));
    btnEn.setAttribute('aria-pressed', String(!isAr));
  }

  btnAr.addEventListener('click', function () { setLang('ar'); });
  btnEn.addEventListener('click', function () { setLang('en'); });
})();
</script>
</body>
</html>
