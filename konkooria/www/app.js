"use strict";

/* ---------- ابزارها ---------- */
const ICONS = {
  brain: '<path d="M9.5 2A2.5 2.5 0 0 0 7 4.5 2.5 2.5 0 0 0 4.5 7 3 3 0 0 0 3 9.5c0 1 .5 1.8 1.2 2.3A3 3 0 0 0 5 17a3 3 0 0 0 4.5 2.6V4.5A2.5 2.5 0 0 0 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 1 17 4.5 2.5 2.5 0 0 1 19.5 7 3 3 0 0 1 21 9.5c0 1-.5 1.8-1.2 2.3A3 3 0 0 1 19 17a3 3 0 0 1-4.5 2.6V4.5A2.5 2.5 0 0 1 14.5 2z"/>',
  sprout: '<path d="M7 20h10M12 20V10"/><path d="M12 10c0-4-3-6-7-6 0 4 3 6 7 6zM12 12c0-3 2.5-5 6-5 0 3-2.5 5-6 5z"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/>',
  ruler: '<path d="M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0L2.7 16.7a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4z"/><path d="m7.5 10.5 2 2M10.5 7.5l2 2M13.5 4.5l2 2M4.5 13.5l2 2"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  clip: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  cards: '<rect x="2" y="6" width="14" height="14" rx="2"/><path d="M8 3h12a2 2 0 0 1 2 2v12"/>',
  video: '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  package: '<path d="M21 8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',
  bot: '<rect x="3" y="8" width="18" height="12" rx="2"/><circle cx="8.5" cy="14" r="1.2"/><circle cx="15.5" cy="14" r="1.2"/><path d="M12 8V4"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M7 5H4a2 2 0 0 0 2 4M17 5h3a2 2 0 0 1-2 4"/>',
  rss: '<path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>',
  gift: '<rect x="3" y="8" width="18" height="4"/><path d="M12 8v13M19 12v9H5v-9"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
  card: '<rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/>',
  home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  plan: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  more: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  cart: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  back: '<path d="M5 12h14M13 5l7 7-7 7"/>',
  go: '<path d="m15 18-6-6 6-6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  wind: '<path d="M9.5 4.5a2.5 2.5 0 1 1 2 4H2M12.5 19.5a2.5 2.5 0 1 0 2-4H2M17 7.5a3.5 3.5 0 1 1 3 5.5H2"/>',
  sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  store: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/>',
  star: '<polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3 12 2"/>',
};
const ic = (n, extra = "") => `<span class="ic ${extra}"><svg viewBox="0 0 24 24">${ICONS[n] || ""}</svg></span>`;
const FA = "۰۱۲۳۴۵۶۷۸۹";
const fa = n => String(n).replace(/\d/g, d => FA[d]);
const money = n => fa(Number(n).toLocaleString("en-US")) + " تومان";
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const $ = s => document.querySelector(s);
const subj = id => SUBJECTS.find(s => s.id === id);
const DAYS = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه"];
const pad = n => String(n).padStart(2, "0");
const dkey = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const todayIdx = () => (new Date().getDay() + 1) % 7;
const weekStart = () => { const d = new Date(); d.setHours(12, 0, 0, 0); d.setDate(d.getDate() - todayIdx()); return d; };
const dateOf = i => { const d = weekStart(); d.setDate(d.getDate() + i); return d; };
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const jday = d => d.toLocaleDateString("fa-IR", { day: "numeric" });
const jfull = iso => new Date(iso).toLocaleDateString("fa-IR", { year: "numeric", month: "long", day: "numeric" });

const DB = {
  get(k, d) { try { const v = localStorage.getItem("kk_" + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem("kk_" + k, JSON.stringify(v)); } catch (e) {} },
};
const S = { profile: DB.get("profile", null), results: DB.get("results", []), plan: DB.get("plan", null), cart: DB.get("cart", []) };
const save = () => { DB.set("profile", S.profile); DB.set("results", S.results); DB.set("plan", S.plan); DB.set("cart", S.cart); };

let R = null;          // آزمون در حال اجرا
let UI = { faq: "all", cat: "همه", review: false, planDay: null, tab: "notes" };
let cleanups = [];

/* ---------- پیام و پنجره ---------- */
function toast(t) { const e = document.createElement("div"); e.className = "toast"; e.textContent = t; document.body.appendChild(e); setTimeout(() => e.remove(), 2200); }
function modal(html) { closeModal(); const o = document.createElement("div"); o.className = "ov"; o.id = "ov"; o.innerHTML = `<div class="sheet">${html}</div>`; o.addEventListener("click", e => { if (e.target === o) closeModal(); }); document.body.appendChild(o); }
function closeModal() { const o = $("#ov"); if (o) o.remove(); }

/* ---------- ناوبری ---------- */
const go = h => { if (location.hash === h) render(); else location.hash = h; };
window.addEventListener("hashchange", render);

function render() {
  cleanups.forEach(f => f()); cleanups = []; closeModal();
  const root = $("#app");
  if (!S.profile) { root.innerHTML = `<div id="view">${onboarding()}</div>`; window.scrollTo(0, 0); return; }
  const parts = (location.hash.replace(/^#\/?/, "") || "home").split("/");
  const r = parts[0];
  let html = "";
  try {
    switch (r) {
      case "home": html = pHome(); break;
      case "exam": html = pExam(); break;
      case "run": html = pRun(parts[1]); break;
      case "result": html = pResult(parts[1]); break;
      case "plan": html = pPlan(); break;
      case "res": UI.tab = parts[1] || UI.tab; html = pRes(); break;
      case "note": html = pNote(parts[1]); break;
      case "cart": html = pCart(); break;
      case "more": html = pMore(); break;
      case "breath": html = pBreath(); break;
      case "settings": html = pSettings(); break;
      default: html = pHome();
    }
  } catch (e) { html = `<div class="card">خطا در نمایش صفحه: ${esc(e.message)}</div>`; }
  const tabOf = { home: "home", exam: "exam", run: "exam", result: "exam", plan: "plan", res: "res", note: "res", cart: "res", more: "more", breath: "more", settings: "more" }[r] || "home";
  const tabs = [["home", "خانه", "home"], ["exam", "آزمون", "clip"], ["plan", "برنامه", "plan"], ["res", "منابع", "book"], ["more", "بیشتر", "more"]];
  const showNav = r !== "run";
  root.innerHTML = `<div id="view" class="fade">${html}</div>` + (showNav ? `<nav class="nav"><div>${tabs.map(t => `<button data-a="nav" data-h="#/${t[0]}" class="${t[0] === tabOf ? "on" : ""}">${ic(t[2])}<span>${t[1]}</span></button>`).join("")}</div></nav>` : "");
  if (parts[0] !== "run") window.scrollTo(0, 0);
  if (r === "run") afterRun();
  if (r === "breath") afterBreath();
}

const hdr = (title, sub = "", back = "", extra = "") => `<div class="hdr">${back ? `<button class="back" data-a="nav" data-h="${back}">${ic("back")} بازگشت</button>` : ""}<div class="row"><div><h1>${title}</h1>${sub ? `<p>${sub}</p>` : ""}</div>${extra}</div></div>`;

/* ---------- شروع (ثبت‌نام اولیه) ---------- */
let ob = { days: [0, 1, 2, 3, 4, 5], months: 6, hours: 3 };
function onboarding() {
  return `<div class="hdr" style="text-align:center;padding-top:calc(40px + var(--safe-t))"><div style="font-size:46px">${ic("star")}</div><h1 style="font-size:24px">به کنکوریا خوش آمدی</h1><p>همراه هوشمند آمادگی کنکور ارشد</p></div>
  <div class="card"><label class="fld" style="margin-top:0">اسمت چیه؟</label><input id="ob-name" class="inp" placeholder="نام" maxlength="30">
  <label class="fld">گرایش موردنظر</label><select id="ob-track" class="inp">${TRACKS.map(t => `<option>${t}</option>`).join("")}</select>
  <label class="fld">چند ماه تا کنکور مانده؟ <b id="ob-mv">${fa(ob.months)}</b> ماه</label><input id="ob-m" type="range" min="1" max="12" value="${ob.months}" data-i="ob-m">
  <label class="fld">روزی چند ساعت می‌توانی مطالعه کنی؟ <b id="ob-hv">${fa(ob.hours)}</b> ساعت</label><input id="ob-h" type="range" min="1" max="10" value="${ob.hours}" data-i="ob-h">
  <label class="fld">روزهای مطالعه</label><div class="chips" style="flex-wrap:wrap">${DAYS.map((d, i) => `<button class="chip ${ob.days.includes(i) ? "on" : ""}" data-a="obday" data-d="${i}">${d}</button>`).join("")}</div>
  <button class="btn full" style="margin-top:8px" data-a="obstart">شروع کنیم ${ic("go")}</button></div>
  <p class="muted center">نسخه‌ی آزمایشی • محتوای برنامه نمونه است</p>`;
}

/* ---------- خانه ---------- */
function daysLeft() { return Math.max(0, Math.ceil((new Date(S.profile.exam) - Date.now()) / 864e5)); }
function lastSim() { return S.results.find(r => r.type === "sim"); }
function todayTasks() { if (!S.plan) return []; return (S.plan.tpl[todayIdx()] || []); }
function isDone(day, id) { return !!S.plan.done[dkey(dateOf(day)) + ":" + id]; }

function pHome() {
  const P = S.profile, dl = daysLeft();
  const total = Math.max(1, (new Date(P.exam) - new Date(P.start)) / 864e5);
  const prog = Math.min(1, Math.max(0, 1 - dl / total));
  const C = 2 * Math.PI * 40;
  const sim = lastSim(), tt = todayTasks(), di = tt.filter(t => isDone(todayIdx(), t.id)).length;
  let h = `<div class="hdr"><div class="row"><div><p>سلام ${esc(P.name || "دوست من")} 👋</p><h1>${fa(dl)} روز تا کنکور</h1><p>${esc(P.track)}</p></div>
  <div class="ring"><svg width="92" height="92" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,.2)" stroke-width="9"/><circle cx="50" cy="50" r="40" fill="none" stroke="#E0A254" stroke-width="9" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - prog)}"/></svg><b>${fa(Math.round(prog * 100))}٪<small>زمان گذشته</small></b></div></div></div>`;
  if (!sim) h += `<div class="card" style="background:linear-gradient(135deg,var(--accent-s),#fff);border-color:var(--accent)"><div class="row"><div style="font-size:34px;color:var(--accent-d)">${ic("target")}</div><div class="sp"><h3>اول یک آزمون شبیه‌سازی بده</h3><p class="muted">با نتیجه‌ی آن، برنامه‌ی مطالعاتی مخصوص خودت ساخته می‌شود.</p></div></div><button class="btn acc full" style="margin-top:12px" data-a="startexam" data-t="sim">شروع آزمون شبیه‌سازی</button></div>`;
  else {
    const weak = Object.entries(sim.by).filter(([, b]) => b.total).sort((a, b) => a[1].pct - b[1].pct).slice(0, 3);
    h += `<div class="card tap" data-a="nav" data-h="#/result/${sim.id}"><div class="row"><div class="sp"><h3>آخرین آزمون شبیه‌سازی</h3><p class="muted">${jfull(sim.date)}</p></div><div class="big" style="color:var(--primary)">${fa(sim.pct)}٪</div></div>
    <div class="muted" style="margin:6px 0">نقاط ضعف شما:</div><div>${weak.map(([id, b]) => `<span class="badge r" style="margin-left:6px">${subj(id).short} ${fa(b.pct)}٪</span>`).join("")}</div></div>`;
  }
  if (S.plan) h += `<div class="card"><div class="row"><h3 class="sp">برنامه‌ی امروز</h3><span class="badge g">${fa(di)} از ${fa(tt.length)}</span></div><div class="bar" style="margin:8px 0 12px"><i style="width:${tt.length ? di / tt.length * 100 : 0}%;background:var(--ok)"></i></div>
    ${tt.length ? tt.map(t => taskRow(t, todayIdx())).join("") : `<p class="muted">امروز کاری در برنامه نیست؛ استراحت کن! 🌿</p>`}<button class="btn ghost full sm" data-a="nav" data-h="#/plan">مشاهده‌ی برنامه‌ی هفته</button></div>`;
  else if (sim) h += `<div class="card"><h3>برنامه‌ی مطالعاتی</h3><p class="muted">هنوز برنامه نساخته‌ای.</p><button class="btn full" style="margin-top:10px" data-a="mkplan" data-r="${sim.id}">ساخت برنامه از روی آزمون</button></div>`;
  h += `<div class="grid2"><button class="tile" data-a="nav" data-h="#/res/notes"><span class="ico" style="background:var(--primary)">${ic("book")}</span><b>جزوه‌ها</b><span class="muted">خلاصه‌ی ۷ درس اصلی</span></button>
  <button class="tile" data-a="nav" data-h="#/res/faq"><span class="ico" style="background:var(--accent-d)">${ic("cards")}</span><b>پرتکرارها</b><span class="muted">کارت‌های مرور</span></button>
  <button class="tile" data-a="nav" data-h="#/exam"><span class="ico" style="background:#6B5B95">${ic("clip")}</span><b>آزمون‌ها</b><span class="muted">شبیه‌سازی و موضوعی</span></button>
  <button class="tile" data-a="nav" data-h="#/res/store"><span class="ico" style="background:#A6453C">${ic("store")}</span><b>فروشگاه منابع</b><span class="muted">جزوه، تست، کلاس</span></button></div>`;
  return h;
}

function taskRow(t, day) {
  const d = isDone(day, t.id), c = t.s ? subj(t.s).color : "var(--accent-d)";
  return `<div class="task ${d ? "done" : ""}"><span class="dot" style="background:${c}"></span><div class="sp" data-a="task" data-id="${t.id}" data-day="${day}" style="cursor:pointer"><div class="tt" style="font-weight:800;font-size:13px">${esc(t.title)}</div><div class="muted" style="font-size:11.5px">${fa(t.mins)} دقیقه</div></div>
  <button class="chk ${d ? "on" : ""}" data-a="done" data-id="${t.id}" data-day="${day}">${d ? ic("check") : ""}</button></div>`;
}

/* ---------- آزمون ---------- */
function pExam() {
  const sim = lastSim();
  let h = hdr("آزمون‌ها", "شبیه‌سازی کنکور و تمرین موضوعی");
  h += `<div class="card" style="border-color:var(--primary)"><div class="row"><span class="badge">شبیه‌سازی</span><span class="sp"></span>${sim ? `<span class="muted">آخرین: ${fa(sim.pct)}٪</span>` : ""}</div>
  <h3 style="margin-top:8px">آزمون شبیه‌سازی کنکور</h3><p class="muted">${fa(QUESTIONS.length)} سوال از ۷ درس • ${fa(40)} دقیقه • نمره‌ی منفی (هر غلط، یک‌سوم نمره‌ی درست را کم می‌کند)</p>
  <button class="btn full" style="margin-top:12px" data-a="startexam" data-t="sim">${ic("play")} شروع آزمون</button></div>`;
  h += `<h3 style="margin:16px 0 10px">آزمون موضوعی</h3><div class="grid2">${SUBJECTS.map(s => {
    const n = QUESTIONS.filter(q => q.s === s.id).length, last = S.results.find(r => r.type === s.id);
    return `<button class="tile" data-a="startexam" data-t="${s.id}"><span class="ico" style="background:${s.color}">${ic(s.icon)}</span><b>${s.name}</b><span class="muted">${fa(n)} سوال${last ? " • آخرین " + fa(last.pct) + "٪" : ""}</span></button>`;
  }).join("")}</div>`;
  if (S.results.length) h += `<h3 style="margin:18px 0 10px">سابقه</h3>${S.results.slice(0, 8).map(r => `<div class="card tap" data-a="nav" data-h="#/result/${r.id}" style="padding:12px"><div class="row"><div class="sp"><b style="font-size:13px">${r.type === "sim" ? "شبیه‌سازی کنکور" : subj(r.type).name}</b><div class="muted" style="font-size:11.5px">${jfull(r.date)}</div></div><b style="color:${r.pct >= 50 ? "var(--ok)" : "var(--alert)"}">${fa(r.pct)}٪</b>${ic("go")}</div></div>`).join("")}`;
  return h;
}

function startExam(t) {
  const pool = t === "sim" ? QUESTIONS : QUESTIONS.filter(q => q.s === t);
  const qs = shuffle(pool.slice()).map(q => { const idx = shuffle(q.o.map((_, i) => i)); return { s: q.s, q: q.q, o: idx.map(i => q.o[i]), c: idx.indexOf(0), e: q.e }; });
  R = { type: t, qs, ans: qs.map(() => null), i: 0, end: t === "sim" ? Date.now() + 40 * 60 * 1000 : null };
  go("#/run/" + t);
}

function pRun(t) {
  if (!R || R.type !== t) { setTimeout(() => go("#/exam"), 0); return ""; }
  const q = R.qs[R.i], n = R.qs.length, answered = R.ans.filter(a => a !== null).length;
  return `<div class="hdr" style="padding-bottom:16px"><div class="row"><div><h1 style="font-size:16px">${t === "sim" ? "آزمون شبیه‌سازی" : subj(t).name}</h1><p>سوال ${fa(R.i + 1)} از ${fa(n)} • پاسخ داده‌شده: ${fa(answered)}</p></div>
  ${R.end ? `<span class="timer" id="tm">--:--</span>` : ""}</div><div class="bar" style="margin-top:12px;background:rgba(255,255,255,.2)"><i style="width:${(R.i + 1) / n * 100}%;background:var(--accent)"></i></div></div>
  <div class="card"><span class="badge g">${subj(q.s).short}</span><p style="font-weight:800;margin:10px 0 14px;font-size:14.5px">${esc(q.q)}</p>
  ${q.o.map((o, i) => `<button class="opt ${R.ans[R.i] === i ? "sel" : ""}" data-a="pick" data-i="${i}"><span class="n">${fa(i + 1)}</span><span>${esc(o)}</span></button>`).join("")}
  <p class="muted" style="font-size:11.5px">برای برداشتن پاسخ، دوباره روی همان گزینه بزنید.</p></div>
  <div class="row" style="margin-bottom:14px"><button class="btn ghost sp" data-a="qnav" data-d="-1" ${R.i === 0 ? "disabled" : ""}>قبلی</button><button class="btn ghost sp" data-a="qnav" data-d="1" ${R.i === n - 1 ? "disabled" : ""}>بعدی</button></div>
  <div class="card"><div class="pal">${R.qs.map((_, i) => `<button class="${R.ans[i] !== null ? "a" : ""} ${i === R.i ? "cur" : ""}" data-a="qgo" data-i="${i}">${fa(i + 1)}</button>`).join("")}</div></div>
  <button class="btn acc full" data-a="finish">پایان آزمون و مشاهده‌ی نتیجه</button><div style="height:30px"></div>`;
}
function afterRun() {
  if (!R || !R.end) return;
  const tick = () => { const e = $("#tm"); if (!e) return; const ms = R.end - Date.now(); if (ms <= 0) { toast("زمان آزمون تمام شد"); finishExam(); return; } const s = Math.floor(ms / 1000); e.textContent = fa(pad(Math.floor(s / 60))) + ":" + fa(pad(s % 60)); };
  tick(); const id = setInterval(tick, 1000); cleanups.push(() => clearInterval(id));
}
function finishExam() {
  if (!R) return;
  const by = {}; SUBJECTS.forEach(s => by[s.id] = { total: 0, correct: 0, wrong: 0, pct: 0 });
  let correct = 0, wrong = 0;
  R.qs.forEach((q, i) => { const b = by[q.s]; b.total++; const a = R.ans[i]; if (a === null) return; if (a === q.c) { b.correct++; correct++; } else { b.wrong++; wrong++; } });
  const pc = (c, w, t) => t ? Math.max(0, Math.round((c - w / 3) / t * 100)) : 0;
  Object.values(by).forEach(b => b.pct = pc(b.correct, b.wrong, b.total));
  const res = { id: Date.now().toString(36), type: R.type, date: new Date().toISOString(), total: R.qs.length, correct, wrong, blank: R.qs.length - correct - wrong, pct: pc(correct, wrong, R.qs.length), by,
    qs: R.qs.map((q, i) => ({ s: q.s, q: q.q, o: q.o, c: q.c, e: q.e, a: R.ans[i] })) };
  S.results.unshift(res); S.results = S.results.slice(0, 15); save(); R = null; UI.review = false; go("#/result/" + res.id);
}

function verdict(p) { return p >= 75 ? "عالی! ادامه بده 🚀" : p >= 50 ? "خوب است؛ روی نقاط ضعف کار کن" : p >= 25 ? "شروع قابل‌قبول؛ برنامه‌ی منظم لازم داری" : "نگران نباش؛ از همین‌جا شروع می‌کنیم 💪"; }
function pResult(id) {
  const r = S.results.find(x => x.id === id); if (!r) return pExam();
  const rows = Object.entries(r.by).filter(([, b]) => b.total).sort((a, b) => a[1].pct - b[1].pct);
  let h = hdr("نتیجه‌ی آزمون", r.type === "sim" ? "شبیه‌سازی کنکور" : subj(r.type).name, "#/exam");
  h += `<div class="card center"><div class="big" style="color:${r.pct >= 50 ? "var(--ok)" : "var(--alert)"};font-size:44px">${fa(r.pct)}٪</div><p class="muted">${verdict(r.pct)}</p>
  <div class="grid2" style="margin-top:12px"><div class="tile center"><b style="color:var(--ok)">${fa(r.correct)}</b><span class="muted">درست</span></div><div class="tile center"><b style="color:var(--alert)">${fa(r.wrong)}</b><span class="muted">غلط</span></div></div>
  <p class="muted" style="margin-top:8px">نزده: ${fa(r.blank)} • درصد با احتساب نمره‌ی منفی</p></div>`;
  h += `<div class="card"><h3>عملکرد به تفکیک درس</h3>${rows.map(([id, b]) => `<div style="margin-top:12px"><div class="row"><span class="sp" style="font-weight:700;font-size:13px">${subj(id).name}</span><b>${fa(b.pct)}٪</b></div><div class="bar" style="margin-top:4px"><i style="width:${b.pct}%;background:${subj(id).color}"></i></div></div>`).join("")}</div>`;
  if (r.type === "sim") h += `<button class="btn acc full" style="margin-bottom:12px" data-a="mkplan" data-r="${r.id}">${ic("plan")} ساخت برنامه‌ی مطالعاتی از روی این نتیجه</button>`;
  else h += `<button class="btn full" style="margin-bottom:12px" data-a="startexam" data-t="${r.type}">${ic("refresh")} تکرار آزمون</button>`;
  h += `<button class="btn ghost full" style="margin-bottom:12px" data-a="review">${UI.review ? "بستن" : "مرور"} پاسخ‌نامه‌ی تشریحی</button>`;
  if (UI.review) h += r.qs.map((q, i) => `<div class="card"><b style="font-size:13px">${fa(i + 1)}. ${esc(q.q)}</b><div style="margin-top:8px">${q.o.map((o, k) => `<div class="opt ${k === q.c ? "ok" : k === q.a ? "bad" : ""}" style="padding:8px 10px;margin-bottom:6px"><span>${esc(o)}</span></div>`).join("")}</div><p class="muted">💡 ${esc(q.e)}</p>${q.a === null ? '<span class="badge">بدون پاسخ</span>' : ""}</div>`).join("");
  return h;
}

/* ---------- ساخت برنامه‌ی مطالعاتی بر اساس نتیجه ---------- */
function buildPlan(res) {
  const P = S.profile, dl = Math.max(1, daysLeft());
  const phase = dl > 75 ? "learn" : dl > 25 ? "test" : "final";
  const blockMin = P.hours >= 4 ? 60 : 45;
  const bpd = Math.max(1, Math.round(P.hours * 60 / blockMin));
  const days = P.days.slice().sort((a, b) => a - b); if (!days.length) days.push(0, 1, 2, 3, 4);
  const total = bpd * days.length;
  const items = SUBJECTS.map(s => { const b = res && res.by[s.id]; const pct = b && b.total ? b.pct : 50; return { s, pct, w: (100 - pct) + 18 }; });
  const sw = items.reduce((a, i) => a + i.w, 0);
  items.forEach(i => { const q = total * i.w / sw; i.n = Math.floor(q); i.r = q - i.n; });
  let left = total - items.reduce((a, i) => a + i.n, 0);
  items.slice().sort((a, b) => b.r - a.r).forEach(i => { if (left > 0) { i.n++; left--; } });
  if (total >= items.length) items.forEach(i => { if (i.n === 0) { const d = items.reduce((m, x) => x.n > m.n ? x : m, items[0]); d.n--; i.n = 1; } });
  const cnt = {}; items.forEach(i => cnt[i.s.id] = i.n);
  const seq = []; let prev = null;
  while (seq.length < total) {
    const cand = items.filter(i => cnt[i.s.id] > 0).sort((a, b) => cnt[b.s.id] - cnt[a.s.id]);
    if (!cand.length) break;
    const pick = cand.find(i => i.s.id !== prev) || cand[0];
    seq.push(pick); cnt[pick.s.id]--; prev = pick.s.id;
  }
  const kinds = { learn: [["study", "مطالعه جزوه"], ["quiz", "تست‌زنی موضوعی"], ["review", "مرور پرتکرارها"]], test: [["quiz", "تست‌زنی موضوعی"], ["review", "مرور پرتکرارها"], ["study", "مطالعه نقاط ضعف"]], final: [["review", "مرور پرتکرارها"], ["quiz", "تست زمان‌دار"], ["study", "مرور سریع جزوه"]] }[phase];
  const seen = {}, tpl = {}; for (let d = 0; d < 7; d++) tpl[d] = [];
  seq.forEach((it, n) => {
    const day = days[Math.floor(n / bpd)], k = seen[it.s.id] = (seen[it.s.id] === undefined ? 0 : seen[it.s.id] + 1);
    const [t, label] = kinds[Math.min(k, 2)];
    tpl[day].push({ id: "t" + n + Math.random().toString(36).slice(2, 5), s: it.s.id, t, title: label + " — " + it.s.short, mins: blockMin });
  });
  tpl[days[days.length - 1]].push({ id: "sim" + Math.random().toString(36).slice(2, 5), s: null, t: "sim", title: "آزمون شبیه‌سازی (بازسنجی هفته)", mins: 40 });
  S.plan = { created: new Date().toISOString(), phase, dl, basis: res ? res.id : null, pct: res ? res.pct : null, weak: items.slice().sort((a, b) => a.pct - b.pct).slice(0, 3).map(i => i.s.id), tpl, done: {} };
  save();
}

/* ---------- برنامه ---------- */
function pPlan() {
  let h = hdr("برنامه‌ی مطالعاتی", S.plan ? "ساخته‌شده بر اساس نتیجه‌ی آزمون شما" : "");
  if (!S.plan) return h + `<div class="card empty">${ic("plan")}<h3 style="margin:8px 0">هنوز برنامه‌ای نداری</h3><p class="muted">بهترین کار این است که اول آزمون شبیه‌سازی بدهی تا برنامه بر اساس نقاط ضعفت ساخته شود.</p><button class="btn acc full" style="margin-top:14px" data-a="startexam" data-t="sim">شروع آزمون شبیه‌سازی</button><button class="btn ghost full" style="margin-top:8px" data-a="mkplan" data-r="">ساخت سریع برنامه (بدون آزمون)</button></div>`;
  const P = S.plan, sel = UI.planDay === null ? todayIdx() : UI.planDay, tt = P.tpl[sel] || [];
  const phaseTxt = { learn: "فاز یادگیری: تمرکز روی مطالعه‌ی جزوه و شروع تست", test: "فاز تست‌زنی: تمرکز روی تست و رفع ضعف", final: "فاز جمع‌بندی: مرور پرتکرارها و تست زمان‌دار" }[P.phase];
  let all = 0, dn = 0; for (let d = 0; d < 7; d++) (P.tpl[d] || []).forEach(t => { all++; if (isDone(d, t.id)) dn++; });
  h += `<div class="card"><div class="row"><b class="sp">${phaseTxt}</b></div><p class="muted" style="margin:4px 0 8px">${fa(P.dl)} روز تا کنکور • ${P.basis ? "بر پایه‌ی آزمون: " + fa(P.pct) + "٪" : "بدون آزمون ورودی"}</p>
  <div class="row"><span class="muted">پیشرفت این هفته</span><span class="sp"></span><b>${fa(all ? Math.round(dn / all * 100) : 0)}٪</b></div><div class="bar" style="margin-top:4px"><i style="width:${all ? dn / all * 100 : 0}%;background:var(--ok)"></i></div>
  ${P.weak.length ? `<p class="muted" style="margin-top:8px">تمرکز ویژه: ${P.weak.map(id => `<span class="badge r">${subj(id).short}</span>`).join(" ")}</p>` : ""}</div>`;
  h += `<div class="days">${DAYS.map((d, i) => `<button class="day ${i === sel ? "on" : ""} ${i === todayIdx() ? "today" : ""} ${(P.tpl[i] || []).length ? "" : "off"}" data-a="pday" data-d="${i}">${d.slice(0, 2)}<b>${jday(dateOf(i))}</b></button>`).join("")}</div>`;
  h += `<div class="row" style="margin-bottom:8px"><h3 class="sp">${DAYS[sel]}</h3><button class="btn sm ghost" data-a="addtask" data-d="${sel}">${ic("plus")} کار دلخواه</button></div>`;
  h += tt.length ? tt.map(t => taskRow(t, sel) + (t.custom ? "" : "")).join("") : `<div class="card muted center">برای این روز کاری برنامه‌ریزی نشده — استراحت 🌿</div>`;
  const dist = {}; Object.values(P.tpl).flat().forEach(t => { if (t.s) dist[t.s] = (dist[t.s] || 0) + 1; });
  const mx = Math.max(1, ...Object.values(dist));
  h += `<div class="card" style="margin-top:12px"><h3>سهم هر درس در هفته</h3>${SUBJECTS.map(s => `<div class="row" style="margin-top:8px"><span style="width:92px;font-size:12px">${s.short}</span><div class="bar sp"><i style="width:${(dist[s.id] || 0) / mx * 100}%;background:${s.color}"></i></div><b style="width:24px;text-align:left">${fa(dist[s.id] || 0)}</b></div>`).join("")}</div>`;
  h += `<button class="btn ghost full" style="margin-top:8px" data-a="startexam" data-t="sim">${ic("refresh")} آزمون جدید و بازسازی برنامه</button>`;
  return h;
}

/* ---------- منابع ---------- */
function pRes() {
  const tabs = [["notes", "جزوه‌ها"], ["faq", "پرتکرارها"], ["store", "فروشگاه"]];
  const cartN = S.cart.reduce((a, c) => a + c.q, 0);
  let h = hdr("منابع آموزشی", "جزوه، مباحث پرتکرار و فروشگاه", "", `<button class="cartbtn" data-a="nav" data-h="#/cart">${ic("cart")}${cartN ? `<i>${fa(cartN)}</i>` : ""}</button>`);
  h += `<div class="seg">${tabs.map(t => `<button class="${UI.tab === t[0] ? "on" : ""}" data-a="nav" data-h="#/res/${t[0]}">${t[1]}</button>`).join("")}</div>`;
  if (UI.tab === "notes") h += `<div class="grid2">${SUBJECTS.map(s => `<button class="tile" data-a="nav" data-h="#/note/${s.id}"><span class="ico" style="background:${s.color}">${ic(s.icon)}</span><b>${s.name}</b><span class="muted">${fa(NOTES[s.id].points.length)} نکته‌ی کلیدی</span></button>`).join("")}</div>`;
  if (UI.tab === "faq") {
    h += `<div class="chips"><button class="chip ${UI.faq === "all" ? "on" : ""}" data-a="faqf" data-s="all">همه</button>${SUBJECTS.map(s => `<button class="chip ${UI.faq === s.id ? "on" : ""}" data-a="faqf" data-s="${s.id}">${s.short}</button>`).join("")}</div>`;
    h += `<p class="muted" style="margin-bottom:10px">مباحثی که در آزمون‌ها بیشتر مورد پرسش قرار می‌گیرند. روی هر کارت بزنید.</p>`;
    h += FAQ.filter(f => UI.faq === "all" || f.s === UI.faq).map(f => `<div class="card fq" data-a="fq"><div class="q"><span class="badge g">${subj(f.s).short}</span><span class="sp">${esc(f.q)}</span><span class="pl">${ic("plus")}</span></div><div class="a">${esc(f.a)}</div></div>`).join("");
  }
  if (UI.tab === "store") {
    const cats = ["همه", ...new Set(PRODUCTS.map(p => p.cat))];
    h += `<div class="card" style="background:var(--accent-s);border-color:var(--accent)"><b style="font-size:12.5px">فروشگاه در حالت آزمایشی است؛ قیمت‌ها نمونه‌اند و پرداخت آنلاین به‌زودی فعال می‌شود.</b></div>`;
    h += `<div class="chips">${cats.map(c => `<button class="chip ${UI.cat === c ? "on" : ""}" data-a="catf" data-c="${c}">${c}</button>`).join("")}</div><div class="grid2">${PRODUCTS.filter(p => UI.cat === "همه" || p.cat === UI.cat).map(p => `<div class="pc"><div class="im">${ic(p.icon)}</div><span class="badge">${p.cat}</span><b style="font-size:12.5px;line-height:1.5">${p.title}</b><span class="muted" style="font-size:11.5px">${p.desc}</span><div><span class="price">${money(p.price)}</span>${p.old ? `<span class="old">${money(p.old)}</span>` : ""}</div><button class="btn sm full" data-a="add" data-id="${p.id}">${ic("plus")} افزودن به سبد</button></div>`).join("")}</div>`;
  }
  return h;
}

function pNote(id) {
  const n = NOTES[id], s = subj(id); if (!n) return pRes();
  return hdr(n.title, n.intro, "#/res/notes") + `<div class="card">${n.points.map((p, i) => `<div class="row" style="align-items:flex-start;margin-bottom:12px"><span class="badge g" style="margin-top:2px">${fa(i + 1)}</span><span class="sp">${esc(p)}</span></div>`).join("")}</div>
  <button class="btn full" style="margin-bottom:10px;background:${s.color}" data-a="startexam" data-t="${id}">${ic("clip")} آزمون همین درس</button>
  <button class="btn ghost full" data-a="faqgo" data-s="${id}">${ic("cards")} پرتکرارهای این درس</button>`;
}

function pCart() {
  const lines = S.cart.map(c => ({ ...c, p: PRODUCTS.find(p => p.id === c.id) })).filter(l => l.p);
  const total = lines.reduce((a, l) => a + l.p.price * l.q, 0);
  let h = hdr("سبد خرید", "", "#/res/store");
  if (!lines.length) return h + `<div class="card empty">${ic("cart")}<h3 style="margin:8px 0">سبد خرید خالی است</h3><button class="btn full" data-a="nav" data-h="#/res/store">رفتن به فروشگاه</button></div>`;
  h += lines.map(l => `<div class="card"><div class="row"><div class="sp"><b style="font-size:13px">${l.p.title}</b><div class="price">${money(l.p.price)}</div></div><button data-a="del" data-id="${l.id}" style="color:var(--alert);font-size:18px">${ic("trash")}</button></div>
  <div class="row" style="margin-top:8px"><button class="chk" data-a="qty" data-id="${l.id}" data-d="-1" style="color:var(--ink)">${ic("minus")}</button><b style="min-width:24px;text-align:center">${fa(l.q)}</b><button class="chk" data-a="qty" data-id="${l.id}" data-d="1" style="color:var(--ink)">${ic("plus")}</button></div></div>`).join("");
  h += `<div class="card"><div class="row"><span class="sp">جمع کل</span><b class="big" style="font-size:19px">${money(total)}</b></div><button class="btn acc full" style="margin-top:12px" data-a="soon" data-k="pay">${ic("card")} پرداخت</button></div>`;
  return h;
}

/* ---------- بیشتر ---------- */
function pMore() {
  const keys = ["ai", "chat", "rank", "blog", "invite"];
  return hdr("بیشتر", "امکانات و تنظیمات") +
    `<h3 style="margin-bottom:10px">امکانات متصل به سرور</h3><div class="grid2">${keys.map(k => `<button class="tile soon" data-a="soon" data-k="${k}"><span class="badge pulse">در حال بروزرسانی</span><span class="ico" style="background:#7b8a84;margin-top:14px">${ic(SOON[k].icon)}</span><b>${SOON[k].title}</b></button>`).join("")}</div>
    <h3 style="margin:18px 0 10px">ابزارها</h3><div class="grid2"><button class="tile" data-a="nav" data-h="#/breath"><span class="ico" style="background:var(--primary)">${ic("wind")}</span><b>آرام‌سازی ذهن</b><span class="muted">تمرین تنفس ۴-۷-۸</span></button>
    <button class="tile" data-a="nav" data-h="#/settings"><span class="ico" style="background:var(--accent-d)">${ic("sliders")}</span><b>تنظیمات</b><span class="muted">پروفایل و برنامه</span></button></div>
    <div class="card" style="margin-top:16px"><b>کنکوریا — نسخه‌ی آزمایشی ۰٫۱</b><p class="muted">محتوای جزوه‌ها و سوال‌ها نمونه است و به‌زودی با محتوای کامل جایگزین می‌شود. بخش‌های متصل به سرور پس از راه‌اندازی سرور فعال می‌شوند.</p></div>`;
}

let br = { on: false };
function pBreath() {
  return hdr("آرام‌سازی ذهن", "تنفس ۴-۷-۸", "#/more") + `<div class="card center"><div class="bc" id="bc"><span class="big" id="bn">۴</span><span id="bl">آماده</span></div><button class="btn full" id="bb" data-a="breath">شروع</button><p class="muted" style="margin-top:12px">۴ ثانیه دم، ۷ ثانیه نگه‌داشتن، ۸ ثانیه بازدم. چند دور تکرار کن.</p></div>`;
}
function afterBreath() { br.on = false; cleanups.push(() => { br.on = false; clearInterval(br.t); }); }
function toggleBreath() {
  if (br.on) { br.on = false; clearInterval(br.t); $("#bb").textContent = "شروع"; $("#bc").style.transform = "scale(1)"; return; }
  br.on = true; $("#bb").textContent = "توقف";
  const ph = [["دم", 4, 1.25], ["نگه‌دار", 7, 1.25], ["بازدم", 8, 1]]; let p = 0, s = ph[0][1];
  const set = () => { $("#bl").textContent = ph[p][0]; $("#bn").textContent = fa(s); $("#bc").style.transition = `transform ${ph[p][0] === "نگه‌دار" ? 0 : ph[p][1]}s ease-in-out`; $("#bc").style.transform = `scale(${ph[p][2]})`; };
  set();
  br.t = setInterval(() => { s--; if (s <= 0) { p = (p + 1) % 3; s = ph[p][1]; set(); } else $("#bn").textContent = fa(s); }, 1000);
}

function pSettings() {
  const P = S.profile, mo = Math.max(1, Math.round(daysLeft() / 30));
  return hdr("تنظیمات", "", "#/more") + `<div class="card"><label class="fld" style="margin-top:0">نام</label><input id="st-name" class="inp" value="${esc(P.name || "")}" maxlength="30">
  <label class="fld">گرایش</label><select id="st-track" class="inp">${TRACKS.map(t => `<option ${t === P.track ? "selected" : ""}>${t}</option>`).join("")}</select>
  <label class="fld">ماه‌های باقی‌مانده تا کنکور: <b id="st-mv">${fa(mo)}</b></label><input id="st-m" type="range" min="1" max="12" value="${mo}" data-i="st-m">
  <label class="fld">ساعت مطالعه‌ی روزانه: <b id="st-hv">${fa(P.hours)}</b></label><input id="st-h" type="range" min="1" max="10" value="${P.hours}" data-i="st-h">
  <label class="fld">روزهای مطالعه</label><div class="chips" style="flex-wrap:wrap">${DAYS.map((d, i) => `<button class="chip ${P.days.includes(i) ? "on" : ""}" data-a="stday" data-d="${i}">${d}</button>`).join("")}</div>
  <button class="btn full" style="margin-top:8px" data-a="stsave">ذخیره</button></div>
  <button class="btn ghost full" style="margin-bottom:10px" data-a="rebuild">${ic("refresh")} بازسازی برنامه با تنظیمات جدید</button>
  <button class="btn ghost full" style="color:var(--alert);border-color:var(--alert)" data-a="reset">${ic("trash")} پاک‌کردن همه‌ی اطلاعات برنامه</button>`;
}

/* ---------- رویدادها ---------- */
const A = {
  nav: (d) => go(d.h),
  obday: (d, el) => { const i = +d.d; ob.days = ob.days.includes(i) ? ob.days.filter(x => x !== i) : [...ob.days, i]; el.classList.toggle("on"); },
  obstart: () => {
    if (!ob.days.length) return toast("حداقل یک روز را انتخاب کن");
    const now = new Date(), ex = new Date(now.getTime() + ob.months * 30 * 864e5);
    S.profile = { name: ($("#ob-name").value || "").trim(), track: $("#ob-track").value, exam: ex.toISOString(), start: now.toISOString(), hours: ob.hours, days: ob.days.slice() };
    save(); go("#/home"); render();
  },
  startexam: (d) => startExam(d.t),
  pick: (d) => { R.ans[R.i] = R.ans[R.i] === +d.i ? null : +d.i; render(); },
  qnav: (d) => { R.i = Math.min(R.qs.length - 1, Math.max(0, R.i + +d.d)); render(); },
  qgo: (d) => { R.i = +d.i; render(); },
  finish: () => { const un = R.ans.filter(a => a === null).length; modal(`<h3 style="margin-bottom:6px">پایان آزمون؟</h3><p class="muted">${un ? fa(un) + " سوال بدون پاسخ مانده است." : "همه‌ی سوال‌ها پاسخ داده شده‌اند."}</p><div class="row" style="margin-top:16px"><button class="btn ghost sp" data-a="close">ادامه می‌دهم</button><button class="btn sp" data-a="finishyes">پایان</button></div>`); },
  finishyes: () => { closeModal(); finishExam(); },
  close: () => closeModal(),
  review: () => { UI.review = !UI.review; render(); },
  mkplan: (d) => { const r = d.r ? S.results.find(x => x.id === d.r) : null; buildPlan(r); UI.planDay = null; toast("برنامه‌ی شما ساخته شد ✅"); go("#/plan"); },
  pday: (d) => { UI.planDay = +d.d; render(); },
  done: (d) => { const k = dkey(dateOf(+d.day)) + ":" + d.id; if (S.plan.done[k]) delete S.plan.done[k]; else S.plan.done[k] = 1; save(); render(); },
  task: (d) => {
    const t = (S.plan.tpl[+d.day] || []).find(x => x.id === d.id); if (!t) return;
    if (t.t === "study") go("#/note/" + t.s); else if (t.t === "quiz") startExam(t.s);
    else if (t.t === "review") { UI.faq = t.s; UI.tab = "faq"; go("#/res/faq"); } else if (t.t === "sim") go("#/exam");
  },
  addtask: (d) => modal(`<h3 style="margin-bottom:8px">کار دلخواه</h3><label class="fld" style="margin-top:0">عنوان</label><input id="at-t" class="inp" maxlength="40" placeholder="مثلاً مرور فصل ۳ آمار"><label class="fld">روز</label><select id="at-d" class="inp">${DAYS.map((x, i) => `<option value="${i}" ${i === +d.d ? "selected" : ""}>${x}</option>`).join("")}</select><label class="fld">مدت (دقیقه)</label><input id="at-m" class="inp" type="number" value="45" min="5" max="240"><button class="btn full" style="margin-top:14px" data-a="addtaskok">افزودن</button>`),
  addtaskok: () => { const t = ($("#at-t").value || "").trim(); if (!t) return toast("عنوان را بنویس"); S.plan.tpl[+$("#at-d").value].push({ id: "c" + Date.now().toString(36), s: null, t: "custom", custom: 1, title: t, mins: +$("#at-m").value || 45 }); save(); closeModal(); render(); },
  faqf: (d) => { UI.faq = d.s; render(); },
  faqgo: (d) => { UI.faq = d.s; UI.tab = "faq"; go("#/res/faq"); },
  fq: (d, el) => el.classList.toggle("open"),
  catf: (d) => { UI.cat = d.c; render(); },
  add: (d) => { const l = S.cart.find(c => c.id === d.id); if (l) l.q++; else S.cart.push({ id: d.id, q: 1 }); save(); toast("به سبد خرید اضافه شد"); render(); },
  qty: (d) => { const l = S.cart.find(c => c.id === d.id); if (!l) return; l.q += +d.d; if (l.q <= 0) S.cart = S.cart.filter(c => c.id !== d.id); save(); render(); },
  del: (d) => { S.cart = S.cart.filter(c => c.id !== d.id); save(); render(); },
  soon: (d) => { const s = SOON[d.k]; modal(`<div class="center"><div style="font-size:44px;color:var(--accent-d)">${ic(s.icon)}</div><h3 style="margin:8px 0">${s.title}</h3><span class="badge pulse">در حال بروزرسانی</span><p class="muted" style="margin:12px 0 18px">${s.text}</p><div class="bar"><i style="width:62%;background:linear-gradient(90deg,var(--accent),var(--accent-d))"></i></div><button class="btn full" style="margin-top:18px" data-a="close">باشه، منتظر می‌مانم</button></div>`); },
  breath: () => toggleBreath(),
  stday: (d, el) => { const i = +d.d, P = S.profile; P.days = P.days.includes(i) ? P.days.filter(x => x !== i) : [...P.days, i]; el.classList.toggle("on"); },
  stsave: () => {
    const P = S.profile; P.name = ($("#st-name").value || "").trim(); P.track = $("#st-track").value; P.hours = +$("#st-h").value;
    if (!P.days.length) P.days = [0, 1, 2, 3, 4]; const m = +$("#st-m").value; P.exam = new Date(Date.now() + m * 30 * 864e5).toISOString(); save(); toast("ذخیره شد ✅");
  },
  rebuild: () => { const s = lastSim(); buildPlan(s || null); UI.planDay = null; toast("برنامه بازسازی شد ✅"); go("#/plan"); },
  reset: () => modal(`<h3 style="margin-bottom:6px">پاک‌کردن همه‌ی اطلاعات؟</h3><p class="muted">پروفایل، نتایج، برنامه و سبد خرید حذف می‌شوند.</p><div class="row" style="margin-top:16px"><button class="btn ghost sp" data-a="close">انصراف</button><button class="btn sp" style="background:var(--alert)" data-a="resetyes">پاک شود</button></div>`),
  resetyes: () => { S.profile = null; S.results = []; S.plan = null; S.cart = []; save(); closeModal(); location.hash = ""; render(); },
};
document.addEventListener("click", e => { const t = e.target.closest("[data-a]"); if (!t) return; const f = A[t.dataset.a]; if (f) f(t.dataset, t, e); });
document.addEventListener("input", e => {
  const i = e.target.dataset && e.target.dataset.i; if (!i) return; const v = +e.target.value;
  if (i === "ob-m") { ob.months = v; $("#ob-mv").textContent = fa(v); } if (i === "ob-h") { ob.hours = v; $("#ob-hv").textContent = fa(v); }
  if (i === "st-m") $("#st-mv").textContent = fa(v); if (i === "st-h") $("#st-hv").textContent = fa(v);
});
window.addEventListener("error", e => { const t = document.createElement("div"); t.className = "toast"; t.textContent = "خطا: " + e.message; document.body.appendChild(t); setTimeout(() => t.remove(), 4000); });
render();
