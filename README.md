# From Below — an atlas of radical history

An interactive world map of radical history told from the bottom up. Each point on the map opens a story with the same ten-part structure:

1. What is the background to this event?
2. Who were the key people?
3. What happened? *(every claim footnoted to a numbered source)*
4. What happened next?
5. What do others say? *(views at the time, historians' debates, uncomfortable questions)*
6. The evidence *(what sources survive, and whose voices are missing)*
7. How is it remembered?
8. Why does it matter? *(followed by "Questions to think about")*
9. What other events are like this?
10. Where can I find out more?

## Features

- **Map** with one colour per theme (theme colours are set in `COLOURS` at the top of `assets/js/app.js`).
- **Search**: matches key content words (title, place, country, people, summary) and ignores filler words; if nothing matches, it searches the full text.
- **Filters** by theme, country and period, a **Reset all** button, and **Share this view**, which copies a link with the current filters (e.g. `?t=queer&from=1960&to=1999`).
- **Timeline**: a coloured overview you can drag across to choose a period (red flags mark the Moments), and a vertical list of every story grouped by period.
- **Moments** (`data/moments.js`): years when change spread from place to place — 1780–1816, 1848, 1917–21, 1968, 1989 and 2011. Each has a page (`#moment/1848`) and can be played on the map, story by story, with lines showing the order.
- **Threads** (`data/threads.js`): chains of stories linked by influence or direct connection, each link sourced (`#thread/nonviolence`).
- **Pathways** (`data/pathways.js`): guided routes of six or seven stories for learners, with a "Look for" question for each (`#path/vote`). While following a pathway, a bar on each story shows the step and the next story.
- **People A–Z** (`#people`): everyone named in the stories, searchable, plus groups and communities.
- **Whose history is here?** (`#coverage`): what the atlas covers by region, theme and period, and the countries still missing.
- **On this day**: on the front page, stories that began on today's date, or in the coming week.
- **On every story**: Quick read (key sections only, larger text), Listen (reads the story aloud using the browser's voice), Print (a clean printable copy), Share, "Look closely at a source" questions, a "Facts last checked" date where one has been recorded, and "Report an error" (once `repo` or `email` is set in `data/site.js`).
- **Story pages**: `node tools/build.js` writes a separate page for every story in `stories/`, which search engines and social media can read.
- **Language menu**: uses the Google Translate website widget. It works on an ordinary web host such as GitHub Pages; where a host blocks Google's script, the menu offers a link to Google Translate instead. Machine translation can be inaccurate.
- **Back to top** button.

## Settings

Open `data/site.js` and fill in:

- `url` — the address of the published site, e.g. `https://yourname.github.io/from-below`. Used for share links, social previews and the sitemap.
- `repo` — your GitHub repository, e.g. `https://github.com/yourname/from-below`. "Suggest a story" and "Report an error" then open a ready-filled GitHub issue.
- `email` — used instead, if you don't want to use GitHub issues.

## Tools (need Node.js)

Run these from the site folder:

- `node tools/check.js` — checks the data for mistakes: duplicate stories, missing images, broken "similar" links, footnotes without a source, and Moments, Threads or Pathways that point to stories that don't exist. **Run it after every change.**
- `node tools/build.js` — rebuilds the separate story pages in `stories/` (and `sitemap.xml` and `robots.txt` once `url` is set). **Run it after adding or changing stories.**
- `node tools/linkcheck.js` — visits every source link and lists any that fail (needs Node 18 or later and an internet connection).

## Running it

It is a static site with no build step needed to view it. Open `index.html` in a browser, or publish with **GitHub Pages**:

1. Upload the **contents** of this folder (so that `index.html` is at the top level of the repository, not inside a subfolder).
2. Go to **Settings → Pages**, choose *Deploy from a branch*, select `main` and `/ (root)`.
3. Your site will appear at `https://<username>.github.io/<repo>/`.
4. Put that address in `data/site.js`, run `node tools/build.js`, and upload again.

Each story has its own link, e.g. `…/#peterloo`, and its own page, e.g. `…/stories/peterloo.html`. Moments, Threads and Pathways have links such as `…/#moment/1848`.

## Adding a Moment, Thread or Pathway

Copy an existing entry in `data/moments.js`, `data/threads.js` or `data/pathways.js`. Each refers to stories by their `id`. In a Moment, `d` is the date used to order the map animation (`YYYY-MM-DD`). In a Thread, `link` explains — with a footnote to the thread's sources — how each story connects to the one before. Then run `node tools/check.js`.

## Adding a new event

Add an object to one of the files in `data/` (or create a new `data/events-76.js` and add a `<script>` tag for it in `index.html`). New images go in `data/media-38.js` (or a new media file). Copy an existing event as a template. Fields:

| Field | What it is |
|---|---|
| `id` | short unique id, used in the URL (`#id`) |
| `title`, `place`, `date`, `year`, `teaser` | basics; `year` sets the order |
| `lat`, `lon` | map position |
| `theme` | one of `labour`, `vote`, `freedom`, `civil`, `queer`, `earth`, `rights`, `language`, `thought`, `disability`, `housing`, `peace` |
| `hero` | key of an image in `data/media.js` |
| `background`, `happened`, `next`, `why` | HTML (paragraphs, `<ul>` lists, `<blockquote>…<cite>…</cite></blockquote>`) |
| `people` | list of `{ n: name, r: description, img: optional media key }` |
| `sources` | list of `[citation HTML, url or ""]`. In `happened`, write `[1]`, `[2]` … to link to them |
| `gallery`, `video` | lists of media keys shown under *What happened?* |
| `debates`, `evidence`, `memory` | HTML for sections 5–7 (may use `<h3>` subheadings) |
| `questions` | list of 3–4 discussion questions |
| `similar` | `{ id: "other-event-id" }` for events on this site, or `{ name, text, url }` for others |
| `more` | list of `[type, label, url]` where type is `read`, `online`, `visit`, `watch` or `listen` |
| `checked` | optional date the facts were last checked against the sources, e.g. `"2026-11-15"`; shown on the story |

## Images and video

All media are hotlinked from **Wikimedia Commons** via `Special:FilePath`, and each file's creator and licence are recorded in `data/media.js`. They are credited under every image and listed in full on the `#credits` page. To add an image, find it on Commons, check its licence, and add an entry with the exact file name, caption, creator and licence.

## Licences

* **Text** (event write-ups, page copy): [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Quotations remain the words of the people quoted, reproduced with attribution.
* **Code** (`index.html`, `assets/css`, `assets/js/`, `tools/`): MIT.
* **Images/video**: individual licences as listed on the Credits page (public domain or Creative Commons).
* **Map data**: Natural Earth via [world-atlas](https://github.com/topojson/world-atlas) (public domain). **Libraries**: [D3](https://d3js.org) and [topojson-client](https://github.com/topojson/topojson-client) (ISC), loaded from the jsDelivr CDN.
