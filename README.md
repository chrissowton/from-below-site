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
- **Search** box: matches key content words (title, place, country, people, summary) and ignores filler words; if nothing matches, it searches the full text.
- **Filters** by theme, country and period, and a **Reset all** button.
- **Timeline**: a coloured overview you can drag across to choose a period, and a vertical list of every story grouped by period.
- **Language menu**: uses the Google Translate website widget. It works on an ordinary web host such as GitHub Pages; where a host blocks Google's script, the menu offers a link to Google Translate instead. Machine translation can be inaccurate.
- **Back to top** button.

## Running it

It is a static site with no build step. Open `index.html` in a browser, or publish with **GitHub Pages**:

1. Upload the **contents** of this folder (so that `index.html` is at the top level of the repository, not inside a subfolder).
2. Go to **Settings → Pages**, choose *Deploy from a branch*, select `main` and `/ (root)`.
3. Your site will appear at `https://<username>.github.io/<repo>/`.

Each story has its own link, e.g. `…/#peterloo`, `…/#selma`, `…/#credits`.

## Adding a new event

Add an object to one of the files in `data/` (or create a new `data/events-74.js` and add a `<script>` tag for it in `index.html`). New images go in `data/media-37.js` (or a new media file). Copy an existing event as a template. Fields:

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

## Images and video

All media are hotlinked from **Wikimedia Commons** via `Special:FilePath`, and each file's creator and licence are recorded in `data/media.js`. They are credited under every image and listed in full on the `#credits` page. To add an image, find it on Commons, check its licence, and add an entry with the exact file name, caption, creator and licence.

## Licences

* **Text** (event write-ups, page copy): [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Quotations remain the words of the people quoted, reproduced with attribution.
* **Code** (`index.html`, `assets/css`, `assets/js/app.js`): MIT.
* **Images/video**: individual licences as listed on the Credits page (public domain or Creative Commons).
* **Map data**: Natural Earth via [world-atlas](https://github.com/topojson/world-atlas) (public domain). **Libraries**: [D3](https://d3js.org) and [topojson-client](https://github.com/topojson/topojson-client) (ISC), loaded from the jsDelivr CDN.
