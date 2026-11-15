/* From Below — data checker.
   Run from the site folder:   node tools/check.js
   Reports problems in the story, media, moment, thread and pathway files. Exits with code 1 if it finds errors. */
"use strict";
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, ".."), DATA = path.join(ROOT, "data");

function load() {
  global.window = { EVENTS: [], MEDIA: {}, EXTRAS: {}, MOMENTS: [], THREADS: [], PATHWAYS: [], SITE: {} };
  const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
  // load data files in the order index.html loads them
  const files = [...html.matchAll(/<script src="(data\/[^"]+)"/g)].map(m => m[1]);
  files.forEach(f => { (0, eval)(fs.readFileSync(path.join(ROOT, f), "utf8")); });
  const onDisk = fs.readdirSync(DATA).filter(f => f.endsWith(".js")).map(f => "data/" + f);
  const notLoaded = onDisk.filter(f => !files.includes(f));
  return { W: global.window, files, notLoaded };
}

const { W, notLoaded } = load();
const E = W.EVENTS, M = W.MEDIA;
// apply extra fields from extras-*.js, as the site does
E.forEach(e => { const x = (W.EXTRAS || {})[e.id]; if (x) Object.keys(x).forEach(k => { if (!e[k]) e[k] = x[k]; }); });
const errors = [], warnings = [];
const err = (id, msg) => errors.push(`${id}: ${msg}`), warn = (id, msg) => warnings.push(`${id}: ${msg}`);

if (notLoaded.length) notLoaded.forEach(f => err("index.html", `${f} is in data/ but not loaded by index.html`));

// ids and duplicates
const ids = new Map();
E.forEach(e => { if (ids.has(e.id)) err(e.id, "duplicate id"); ids.set(e.id, e); });
const words = s => String(s).toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(w => w.length > 3);
for (let i = 0; i < E.length; i++) for (let j = i + 1; j < E.length; j++) {
  const a = E[i], b = E[j];
  if (Math.abs(a.year - b.year) > 2) continue;
  if (a.title.toLowerCase() === b.title.toLowerCase()) err(a.id, `same title as ${b.id} — probably a duplicate story`);
  else {
    const wa = words(a.title), wb = new Set(words(b.title));
    const common = wa.filter(w => wb.has(w)).length;
    if (common >= 3 && Math.hypot(a.lat - b.lat, a.lon - b.lon) < 3) warn(a.id, `looks similar to ${b.id} ("${b.title}") — check it is not a duplicate`);
  }
}

// per-story checks
const usedMedia = new Set();
E.forEach(e => {
  ["id", "title", "place", "date", "year", "lat", "lon", "theme", "teaser"].forEach(k => { if (e[k] === undefined || e[k] === "") err(e.id, `missing ${k}`); });
  const keys = [e.hero, ...(e.gallery || []), ...(e.video || []), ...((e.people || []).filter(p => p.img).map(p => p.img))].filter(Boolean);
  keys.forEach(k => { usedMedia.add(k); if (!M[k]) err(e.id, `image key "${k}" is not in any media file`); });
  (e.similar || []).forEach(s => { if (s.id && !ids.has(s.id)) err(e.id, `similar story "${s.id}" does not exist`); });
  const text = JSON.stringify(e);
  const fns = [...text.matchAll(/\[(\d+)\]/g)].map(m => +m[1]);
  const nSrc = (e.sources || []).length;
  if (fns.length && Math.max(...fns) > nSrc) err(e.id, `footnote [${Math.max(...fns)}] but only ${nSrc} sources`);
  if (e.questions && e.questions.length !== 4) warn(e.id, `has ${e.questions.length} questions (usually 4)`);
  (e.sources || []).forEach(([t, u], i) => { if (u && !/^https?:\/\//.test(u)) err(e.id, `source ${i + 1} has a bad URL`); });
  if (e.checked && !/^\d{4}-\d{2}(-\d{2})?$/.test(e.checked)) warn(e.id, `checked date "${e.checked}" should look like 2026-11-15`);
  if (e.primary) {
    const p = e.primary;
    if (!M[p.media]) err(e.id, `primary source image "${p.media}" is not in any media file`); else usedMedia.add(p.media);
    ["kind", "made", "about"].forEach(k => { if (!p[k]) err(e.id, `primary source is missing "${k}"`); });
    if (!Array.isArray(p.questions) || !p.questions.length) err(e.id, "primary source has no questions");
  }
  (e.voices || []).forEach((v, i) => {
    if (!v.q || !v.who) err(e.id, `voice ${i + 1} needs both "q" (the words) and "who"`);
    if (!v.src || !v.src[0]) warn(e.id, `voice ${i + 1} has no source — say where the words come from`);
  });
});
Object.keys(M).forEach(k => { if (!usedMedia.has(k)) warn("media", `"${k}" is never used`); });

// moments, threads, pathways
const refCheck = (kind, list, getIds) => (list || []).forEach(x => getIds(x).forEach(id => { if (!ids.has(id)) err(`${kind} ${x.id}`, `story "${id}" does not exist`); }));
refCheck("moment", W.MOMENTS, m => m.stories.map(s => s.id));
refCheck("thread", W.THREADS, t => t.steps.map(s => s.id));
refCheck("pathway", W.PATHWAYS, p => p.steps.map(s => s.id));

const nP = E.filter(e => e.primary).length, nV = E.filter(e => (e.voices || []).length).length, nC = E.filter(e => e.checked).length;
console.log(`${E.length} stories (${nP} with a primary source, ${nV} with first-hand voices, ${nC} fact-checked), ${Object.keys(M).length} images, ${(W.MOMENTS || []).length} moments, ${(W.THREADS || []).length} threads, ${(W.PATHWAYS || []).length} pathways.`);
if (warnings.length) { console.log(`\n${warnings.length} warning(s):`); warnings.forEach(w => console.log("  · " + w)); }
if (errors.length) { console.log(`\n${errors.length} error(s):`); errors.forEach(w => console.log("  ✗ " + w)); process.exit(1); }
console.log("\nNo errors.");
