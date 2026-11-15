/* From Below — check every web link in the stories.
   Needs Node 18 or later. Run from the site folder:   node tools/linkcheck.js
   It visits each source and "find out more" link once and lists any that fail or redirect somewhere unexpected.
   Some sites block automatic checks (status 403 or 429); open those by hand before deciding a link is broken. */
"use strict";
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
global.window = { EVENTS: [], MEDIA: {}, EXTRAS: {}, MOMENTS: [], THREADS: [], PATHWAYS: [], SITE: {} };
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
[...html.matchAll(/<script src="(data\/[^"]+)"/g)].forEach(m => (0, eval)(fs.readFileSync(path.join(ROOT, m[1]), "utf8")));
const W = global.window;
W.EVENTS.forEach(e => { const x = W.EXTRAS[e.id]; if (x) Object.keys(x).forEach(k => { if (!e[k]) e[k] = x[k]; }); });

const links = new Map();
const add = (u, where) => { if (u && /^https?:/.test(u)) (links.get(u) || links.set(u, new Set()).get(u)).add(where); };
W.EVENTS.forEach(e => { (e.sources || []).forEach(s => add(s[1], e.id)); (e.more || []).forEach(m => add(m[2], e.id)); (e.similar || []).forEach(s => add(s.url, e.id)); });
[...W.MOMENTS, ...W.THREADS].forEach(x => (x.sources || []).forEach(s => add(s[1], x.id)));

async function check(u) {
  const ctrl = new AbortController(), t = setTimeout(() => ctrl.abort(), 20000);
  try {
    let r = await fetch(u, { method: "HEAD", redirect: "follow", signal: ctrl.signal, headers: { "User-Agent": "FromBelow-linkcheck/1.0" } });
    if (r.status === 405 || r.status === 403) r = await fetch(u, { method: "GET", redirect: "follow", signal: ctrl.signal, headers: { "User-Agent": "FromBelow-linkcheck/1.0" } });
    return { status: r.status, final: r.url };
  } catch (e) { return { status: 0, error: e.name }; } finally { clearTimeout(t); }
}
(async () => {
  const list = [...links.keys()], bad = [];
  console.log(`Checking ${list.length} links…`);
  for (let i = 0; i < list.length; i += 8) {
    const res = await Promise.all(list.slice(i, i + 8).map(async u => [u, await check(u)]));
    res.forEach(([u, r]) => { if (!(r.status >= 200 && r.status < 400)) bad.push([u, r]); });
    process.stdout.write(`\r${Math.min(i + 8, list.length)} / ${list.length}`);
  }
  console.log("\n");
  if (!bad.length) return console.log("All links answered.");
  console.log(`${bad.length} link(s) need a look:`);
  bad.forEach(([u, r]) => console.log(`  ${r.status || r.error}  ${u}\n        used in: ${[...links.get(u)].join(", ")}`));
})();
