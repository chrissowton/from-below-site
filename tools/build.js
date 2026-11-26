/* From Below — build the separate story pages.
   Run from the site folder:   node tools/build.js
   Creates stories/<id>.html for every story (plain HTML, readable without JavaScript, with titles and
   social-preview tags so search engines and social media can show them), stories/index.html (a list of
   every story), and — if SITE.url is set in data/site.js — sitemap.xml and robots.txt.
   Run it again whenever you add or change stories. */
"use strict";
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");

// ---- load the data the same way index.html does
global.window = { EVENTS: [], MEDIA: {}, EXTRAS: {}, MOMENTS: [], THREADS: [], PATHWAYS: [], SITE: {} };
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
[...html.matchAll(/<script src="(data\/[^"]+)"/g)].forEach(m => (0, eval)(fs.readFileSync(path.join(ROOT, m[1]), "utf8")));
const W = global.window, MEDIA = W.MEDIA, SITE = W.SITE || {};
W.EVENTS.forEach(e => { const x = W.EXTRAS[e.id]; if (x) Object.keys(x).forEach(k => { if (!e[k]) e[k] = x[k]; }); });
const TR = W.STORY_TRIAL || {};
const addWhy = (why, add) => { const li = add.map(b => `<li>${b}</li>`).join("\n  "); const w = String(why || ""); const i = w.lastIndexOf("</ul>"); return i >= 0 ? w.slice(0, i) + "  " + li + "\n" + w.slice(i) : w + `\n<ul>\n  ${li}\n</ul>`; };
W.EVENTS.forEach(e => { const t = TR[e.id]; if (!t) return; if (t.why) e.why = t.why; if (t.whyAdd) e.why = addWhy(e.why, t.whyAdd); if (t.questions) e.questions = t.questions; if (t.read && e.primary) e.primary = { ...e.primary, read: t.read }; });
const EVENTS = W.EVENTS.slice().sort((a, b) => a.year - b.year);
const byId = Object.fromEntries(EVENTS.map(e => [e.id, e]));
const BASE = (SITE.url || "").replace(/\/$/, "");

const THEMES = { labour: "Workers & unions", vote: "The vote & democracy", freedom: "Anti-colonial & freedom", civil: "Civil rights & anti-racism", queer: "LGBTQ+ liberation", earth: "Land & environment", rights: "Human rights", language: "Language & culture", thought: "Thought & expression", disability: "Disability rights", housing: "Housing & community", peace: "Peace & anti-war" };
const SECTIONS = ["What is the background to this event?", "Who were the key people?", "What happened?", "What happened next?", "What do others say?", "The evidence", "How is it remembered?", "Why does it matter?", "What other events are like this?", "Where can I find out more?"];
const TYPES = { read: "Read", online: "Online", visit: "Visit", watch: "Watch", listen: "Listen" };
const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const yr = y => y < 0 ? `${-y} BCE` : (y < 500 ? `${y} CE` : `${y}`);
const fileUrl = (f, w) => "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(f.replace(/ /g, "_")) + (w ? "?width=" + w : "");
const pageUrl = f => "https://commons.wikimedia.org/wiki/File:" + encodeURIComponent(f.replace(/ /g, "_"));
const credit = m => `${esc(m.by)} · ${m.lu ? `<a href="${m.lu}">${esc(m.lic)}</a>` : esc(m.lic)} · <a href="${pageUrl(m.f)}">Wikimedia Commons</a>`;
const fn = h => String(h || "").replace(/\[(\d+)\]/g, "\u0001s$1\u0002");
let XR = []; const xref = (l, u) => { XR.push([l, u]); return `\u0001u${XR.length - 1}\u0002`; };
const fig = (k, w = 900) => { const m = MEDIA[k]; return m ? `<figure class="media"><div class="ph"><img loading="lazy" src="${fileUrl(m.f, w)}" alt="${esc(m.cap)}"></div><figcaption>${esc(m.cap)} <span class="credit">${credit(m)}</span></figcaption></figure>` : ""; };

const voicesHtml = e => !(e.voices && e.voices.length) ? "" : `<aside class="voices"><h3>In their own words</h3>${e.voices.map(v => `<figure><blockquote>${esc(v.q)}</blockquote><figcaption><b>${esc(v.who)}</b>${v.when ? ` · ${esc(v.when)}` : ""}${v.src ? xref(v.src[0], v.src[1]) : ""}</figcaption></figure>`).join("")}</aside>`;
const primaryHtml = e => {
  const p = e.primary, m = p && MEDIA[p.media]; if (!m && !(p && p.text)) return "";
  const doc = p.text ? `<blockquote class="ps-doc"><p>${esc(p.text.t)}</p><cite>${esc(p.text.from || "")}${p.text.src ? xref(p.text.src[0], p.text.src[1]) : ""}</cite></blockquote>` : "";
  return `<div class="lookclose primary"><h3>Primary source: ${esc(p.kind)}</h3><div class="lc-grid">${m ? `<figure><img loading="lazy" src="${fileUrl(m.f, 800)}" alt="${esc(m.cap)}"><figcaption>${esc(m.cap)} <span class="credit">${credit(m)}</span></figcaption></figure>` : doc}
    <div><dl class="ps-facts"><div><dt>What is it?</dt><dd>${esc(p.kind)}</dd></div><div><dt>Made by, and when</dt><dd>${esc(p.made)}</dd></div></dl><p class="ps-about">${esc(p.about)}</p>
    ${p.read ? `<h4>Reading it</h4><p class="ps-read">${esc(p.read)}</p>` : `<h4>Things worth asking</h4><ul class="ps-q">${p.questions.map(q => `<li>${esc(q)}</li>`).join("")}</ul>`}</div></div></div>`;
};
function head(title, desc, img, canonical) {
  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${canonical ? `<link rel="canonical" href="${canonical}">\n<meta property="og:url" content="${canonical}">` : ""}
<meta property="og:type" content="article">
<meta property="og:site_name" content="From Below — an atlas of radical history">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
${img ? `<meta property="og:image" content="${img}">` : ""}
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=Inter:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400&display=swap" rel="stylesheet">
<link rel="icon" type="image/svg+xml" href="../assets/img/logo.svg">
<link rel="stylesheet" href="../assets/css/style.css">
<style>
  .static-top{background:var(--red);color:#fff}.static-top .wrap{display:flex;align-items:center;gap:14px;height:58px}
  .static-top a.logo{color:#fff;text-decoration:none}.static-top .open{margin-left:auto;background:#fff;color:var(--red-deep);border-radius:999px;padding:7px 15px;font-weight:700;font-size:14px;text-decoration:none}
  .s-body .wrap{grid-template-columns:minmax(0,760px)!important;justify-content:center}
  .s-index{list-style:none;padding:0;margin:0}.s-index li{display:grid;grid-template-columns:80px 1fr;gap:12px;padding:10px 0;border-bottom:1px solid var(--rule)}
  .s-index b{font-family:var(--display)}.s-index small{color:var(--ink-3)}
</style>
</head>
<body>
<header class="static-top"><div class="wrap"><a class="logo" href="../index.html"><img src="../assets/img/logo-white.svg" alt="" width="36" height="36">From Below<span class="logo-tip" aria-hidden="true"><b>Δ Delta</b> — the sign for change, rising from below.</span></a><a class="open" href="../index.html">Open the interactive atlas →</a></div></header>
`;
}
const foot = `<footer class="site"><div class="wrap"><div><strong>From Below</strong> · an atlas of radical history.<br>Text licensed <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>. Images from Wikimedia Commons, credited on each image.</div><div>Figures such as crowd sizes and casualty numbers are often disputed.<br>Where sources differ, we give a range and cite them.</div></div></footer>
</body></html>`;


// ---- glossary: underline the first use of each key word in a story (definition shown on hover)
const GLOSS = W.GLOSSARY || [];
const glForm = {}; GLOSS.forEach(g => (g.m || []).forEach(f => { glForm[f] = g; }));
const glRe = GLOSS.length ? new RegExp("(^|[^\\p{L}\\p{N}-])(" + Object.keys(glForm).sort((a, b) => b.length - a.length).map(f => f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")(?![\\p{L}\\p{N}])", "u") : null;
function glossify(h, used) {
  if (!glRe || !h) return h || "";
  let skip = 0;
  return String(h).split(/(<[^>]+>)/).map(tok => {
    if (tok.startsWith("<")) { if (/^<(a|sup|h[1-4]|blockquote)\b/i.test(tok)) skip++; else if (/^<\/(a|sup|h[1-4]|blockquote)>/i.test(tok)) skip = Math.max(0, skip - 1); return tok; }
    if (skip) return tok;
    let out = "", rest = tok;
    for (let k = 0; k < 20; k++) {
      let m = null, off = 0, sub = rest;
      while (sub.length) { const x = glRe.exec(sub); if (!x) break; if (!used.has(glForm[x[2]].id)) { m = x; break; } const cut = x.index + x[0].length; off += cut; sub = sub.slice(cut); }
      if (!m) break;
      const g = glForm[m[2]]; used.add(g.id);
      const at = off + m.index + m[1].length;
      out += rest.slice(0, at) + `<abbr class="gl" title="${esc(g.term + ": " + g.d)}">${m[2]}</abbr>`;
      rest = rest.slice(at + m[2].length);
    }
    return out + rest;
  }).join("");
}
function storyPage(e, i) { return numberRefs(storyPage0(e, i), e); }
function numberRefs(html, e) {
  const map = new Map(), ord = [], S = e.sources || [];
  let out = html.replace(/\u0001([su]\d+)\u0002/g, (m, k) => { if (k[0] === "s" && !S[+k.slice(1) - 1]) return ""; if (!map.has(k)) { map.set(k, ord.length + 1); ord.push(k); } const n = map.get(k); return `<sup class="fn"><a href="#s-${n}">${n}</a></sup>`; });
  S.forEach((_, j) => { const k = "s" + (j + 1); if (!map.has(k)) { map.set(k, ord.length + 1); ord.push(k); } });
  return out.replace("\u0003REFS\u0003", `<ol class="refs">${ord.map(k => k[0] === "s" ? S[+k.slice(1) - 1] : XR[+k.slice(1)]).map(([t, u], j) => `<li id="s-${j + 1}">${u ? `<a href="${u}">${t}</a>` : t}</li>`).join("")}</ol>`);
}
function storyPage0(e, i) {
  const prev = EVENTS[i - 1], next = EVENTS[i + 1];
  const hm = MEDIA[e.hero];
  const canonical = BASE ? `${BASE}/stories/${e.id}.html` : "";
  const used = new Set(), G = h => glossify(h, used);
  const chap = (n, inner, t) => inner ? `<section class="chapter" id="ch-${n}"><div class="num">${String(n).padStart(2, "0")}</div><h2>${t || SECTIONS[n - 1]}</h2>${inner}</section>` : "";
  const acc = (head, hint, inner) => inner ? `<details class="s-acc"><summary><span class="sa-t"><b>${head}</b>${hint ? `<small>${hint}</small>` : ""}</span><span class="sa-chev" aria-hidden="true"></span></summary><div class="sa-body">${inner}</div></details>` : "";
  const people = `<ul class="pp-open">${(e.people || []).map(p => `<li><span class="pp-face pp-dot" aria-hidden="true"></span><div><b>${p.n}</b><p>${p.r}</p></div></li>`).join("")}</ul>`;
  XR = [];
  const similar = `<ul class="more">${(e.similar || []).filter(s => s.id && byId[s.id]).map(s => `<li><span class="ty">${yr(byId[s.id].year)}</span><span><a href="${s.id}.html">${esc(byId[s.id].title)}</a> — ${esc(byId[s.id].teaser)}</span></li>`).join("")}</ul>`;
  const more = `<ul class="more">${(e.more || []).map(([t, l, u]) => `<li><span class="ty">${TYPES[t] || t}</span><span>${u ? `<a href="${u}">${l}</a>` : l}</span></li>`).join("")}</ul>`;
  const ld = { "@context": "https://schema.org", "@type": "Article", headline: e.title, description: e.teaser, about: { "@type": "Event", name: e.title, startDate: String(e.year), location: { "@type": "Place", name: e.place, geo: { "@type": "GeoCoordinates", latitude: e.lat, longitude: e.lon } } }, image: hm ? fileUrl(hm.f, 1200) : undefined, license: "https://creativecommons.org/licenses/by-sa/4.0/" };
  return head(`${e.title} — From Below`, e.teaser, hm ? fileUrl(hm.f, 1200) : "", canonical) + `
<main>
<header class="s-hero"><div class="wrap">
  <div><div class="tag">${esc(THEMES[e.theme] || "")}${e.ongoing ? ` <span class="recent-tag">Recent history</span>` : ""}</div><h1>${esc(e.title)}</h1><p class="teaser">${esc(e.teaser)}</p>
    <dl class="facts"><div><dt>When</dt><dd>${esc(e.date)}</dd></div><div><dt>Where</dt><dd>${esc(e.place)}</dd></div>${e.checked ? `<div><dt>Facts checked</dt><dd>${esc(e.checked)}</dd></div>` : ""}</dl>
    <p style="margin-top:22px"><a class="btn-play big" href="../index.html#${e.id}" style="text-decoration:none">See it on the map →</a></p></div>
  ${hm ? `<figure class="media"><div class="ph"><img src="${fileUrl(hm.f, 1200)}" alt="${esc(hm.cap)}"></div><figcaption>${esc(hm.cap)} ${credit(hm)}</figcaption></figure>` : ""}
</div></header>
${e.ongoing ? `<aside class="ongoing"><div class="wrap"><div class="og-in"><div class="og-head"><span class="og-dot"></span><b>Ongoing situation</b><span class="og-asof">Last reviewed ${esc(e.ongoing.asOf)}</span></div><div class="prose">${fn(e.ongoing.text)}</div>${(e.ongoing.watch || []).length ? `<p class="og-wl">Still unresolved:</p><ul>${e.ongoing.watch.map(w => `<li>${w}</li>`).join("")}</ul>` : ""}<p class="og-note">This is recent history. Accounts, casualty figures and outcomes may change as more evidence emerges.</p></div></div></aside>` : ""}
<div class="s-body"><div class="wrap"><article>
  ${chap(1, `<div class="prose">${fn(G(e.background))}</div>`)}
  ${chap(2, people + voicesHtml(e))}
  ${chap(3, `<div class="prose">${fn(G(e.happened))}</div>${(e.gallery || []).length ? `<div class="gallery">${e.gallery.map(k => fig(k, 800)).join("")}</div>` : ""}`)}
  ${chap(4, `<div class="prose">${fn(G(e.next))}</div>`)}
  <div class="why-box">${chap(5, `<div class="prose">${fn(G(e.why))}</div>`, "Why does it matter?")}</div>
  <div class="s-accs"><h2 class="sa-h">Go further</h2>
  ${acc("What do others say?", "How it was seen at the time, and where historians disagree", e.debates ? `<div class="prose">${fn(G(e.debates))}</div>` : "")}
  ${acc("How do we know?", "The evidence, and a source from the time", (e.evidence ? `<div class="prose">${fn(G(e.evidence))}</div>` : "") + primaryHtml(e))}
  ${acc("How is it remembered?", "Memorials, anniversaries and arguments over memory", e.memory ? `<div class="prose">${fn(G(e.memory))}</div>` : "")}
  ${acc("Open questions", "What this story leaves unresolved", e.questions ? `<ul class="q-open">${e.questions.map(q => `<li>${q}</li>`).join("")}</ul>` : "")}
  ${acc("Similar events", "Other struggles like this one", similar)}
  ${acc("Find out more", "Books, websites and places to visit", more)}
  ${acc("References", "", "\u0003REFS\u0003")}
  </div>
  <div class="pager">
    ${prev ? `<a class="pv" href="${prev.id}.html" style="text-decoration:none;border-radius:14px;background:var(--stone);padding:18px 20px"><small>← Earlier · ${yr(prev.year)}</small><br><b>${esc(prev.title)}</b></a>` : "<span></span>"}
    ${next ? `<a class="nx" href="${next.id}.html" style="text-decoration:none;border-radius:14px;background:var(--stone);padding:18px 20px;text-align:right"><small>Later · ${yr(next.year)} →</small><br><b>${esc(next.title)}</b></a>` : ""}
  </div>
  <p class="credit" style="margin-top:24px"><a href="index.html">All stories</a> · <a href="../index.html#${e.id}">Open this story in the interactive atlas</a> · <a href="../index.html#glossary">Glossary of key words</a></p>
</article></div></div>
</main>
<script type="application/ld+json">${JSON.stringify(ld)}</script>
` + foot;
}

function indexPage() {
  return head("All stories — From Below", `All ${EVENTS.length} stories in From Below, an atlas of radical history, from ${yr(EVENTS[0].year)} to ${yr(EVENTS[EVENTS.length - 1].year)}.`, "", BASE ? `${BASE}/stories/` : "") + `
<main><div class="wrap" style="padding-top:40px;padding-bottom:60px">
<h1 style="font-family:var(--display);font-weight:900;font-size:clamp(40px,6vw,72px);letter-spacing:-.04em;margin:0 0 20px">All stories</h1>
<ul class="s-index">${EVENTS.map(e => `<li><small>${yr(e.year)}</small><span><a href="${e.id}.html"><b>${esc(e.title)}</b></a><br><small>${esc(e.place)}</small></span></li>`).join("")}</ul>
</div></main>` + foot;
}

const out = path.join(ROOT, "stories");
fs.mkdirSync(out, { recursive: true });
fs.readdirSync(out).filter(f => f.endsWith(".html")).forEach(f => fs.unlinkSync(path.join(out, f)));   // remove pages of deleted stories
EVENTS.forEach((e, i) => fs.writeFileSync(path.join(out, `${e.id}.html`), storyPage(e, i)));
fs.writeFileSync(path.join(out, "index.html"), indexPage());
console.log(`Wrote ${EVENTS.length} story pages and stories/index.html.`);

if (BASE) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [`${BASE}/`, `${BASE}/stories/`, ...EVENTS.map(e => `${BASE}/stories/${e.id}.html`)];
  fs.writeFileSync(path.join(ROOT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join("\n")}\n</urlset>\n`);
  fs.writeFileSync(path.join(ROOT, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${BASE}/sitemap.xml\n`);
  console.log("Wrote sitemap.xml and robots.txt.");
} else {
  console.log("SITE.url is not set in data/site.js, so no sitemap was written. Set it and run this again.");
}
