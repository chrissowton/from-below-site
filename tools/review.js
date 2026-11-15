/* From Below — what to fact-check next.
   Run from the site folder:   node tools/review.js        (next 10 stories)
                               node tools/review.js 20     (next 20)
                               node tools/review.js peterloo   (one story)
   Writes REVIEW-NEXT.md: for each story, its sources and every sentence that contains a date or a number,
   as a checklist. Stories used in Pathways, Moments and Threads come first, because they are read most.
   When a story has been checked, add it to data/reviews.js with the date and a short note. */
"use strict";
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
global.window = { EVENTS: [], MEDIA: {}, EXTRAS: {}, MOMENTS: [], THREADS: [], PATHWAYS: [], SITE: {} };
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
[...html.matchAll(/<script src="(data\/[^"]+)"/g)].forEach(m => (0, eval)(fs.readFileSync(path.join(ROOT, m[1]), "utf8")));
const W = global.window;
W.EVENTS.forEach(e => { const x = W.EXTRAS[e.id]; if (x) Object.keys(x).forEach(k => { if (!e[k]) e[k] = x[k]; }); });

const arg = process.argv[2] || "10";
const featured = new Set();
(W.PATHWAYS || []).forEach(p => p.steps.forEach(s => featured.add(s.id)));
(W.MOMENTS || []).forEach(m => m.stories.forEach(s => featured.add(s.id)));
(W.THREADS || []).forEach(t => t.steps.forEach(s => featured.add(s.id)));

let list;
if (/^\d+$/.test(arg)) {
  const todo = W.EVENTS.filter(e => !e.checked);
  todo.sort((a, b) => (featured.has(b.id) - featured.has(a.id)) || a.year - b.year);
  list = todo.slice(0, +arg);
} else list = W.EVENTS.filter(e => e.id === arg);
if (!list.length) { console.log("Nothing to check."); process.exit(0); }

const strip = h => String(h || "").replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").replace(/\s+/g, " ").trim();
const claims = e => [e.teaser, strip(e.background), strip(e.happened), strip(e.next), strip(e.debates),
  (e.people || []).map(p => `${p.n}: ${strip(p.r)}`).join(". ")].join(" ")
  .split(/(?<=[.!?])\s+/).filter(s => /\d/.test(s)).map(s => s.trim());

const done = W.EVENTS.filter(e => e.checked).length;
let md = `# Fact-check list\n\n${done} of ${W.EVENTS.length} stories checked so far. This list has ${list.length}.\n\n` +
  `For each story: open the sources, tick each claim that the sources support, and correct or remove any that they don't.\n` +
  `Then add the story to \`data/reviews.js\`, e.g.\n\n    peterloo: { date: "${new Date().toISOString().slice(0, 10)}", note: "Dates and figures checked against the cited sources." },\n\n`;
list.forEach(e => {
  md += `---\n\n## ${e.title} (\`${e.id}\`, ${e.date})\n\n**Sources**\n\n`;
  (e.sources || []).forEach(([t, u], i) => { md += `${i + 1}. ${strip(t)}${u ? ` — ${u}` : ""}\n`; });
  md += `\n**Claims with dates or numbers**\n\n`;
  claims(e).forEach(c => { md += `- [ ] ${c}\n`; });
  md += `\n**Also check:** names and roles of the key people · who killed whom, and the range of estimates · that every quotation is exact\n\n`;
});
fs.writeFileSync(path.join(ROOT, "REVIEW-NEXT.md"), md);
console.log(`${done} of ${W.EVENTS.length} stories checked. Wrote REVIEW-NEXT.md with ${list.length}: ${list.map(e => e.id).join(", ")}`);
