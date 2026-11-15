/* From Below — Moments, Threads, Pathways, People, Whose history, On this day, and the story-page tools.
   Uses the toolkit that app.js exposes as window.FB. Plain JavaScript, no build step. */
(function () {
  "use strict";
  const FB = window.FB; if (!FB) return;
  const { EVENTS, byId, THEMES, MEDIA, esc, yr, icon, badge, bg, fileUrl, credit, go } = FB;
  const SITE = window.SITE || {};
  const MOMENTS = window.MOMENTS || [], THREADS = window.THREADS || [], PATHWAYS = window.PATHWAYS || [];
  const momentById = Object.fromEntries(MOMENTS.map(m => [m.id, m]));
  const threadById = Object.fromEntries(THREADS.map(t => [t.id, t]));
  const pathById = Object.fromEntries(PATHWAYS.map(p => [p.id, p]));
  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem("fb-" + k)); } catch (_) { return null; } },
    set(k, v) { try { localStorage.setItem("fb-" + k, JSON.stringify(v)); } catch (_) { } }
  };
  const session = {
    get(k) { try { return JSON.parse(sessionStorage.getItem("fb-" + k)); } catch (_) { return null; } },
    set(k, v) { try { v == null ? sessionStorage.removeItem("fb-" + k) : sessionStorage.setItem("fb-" + k, JSON.stringify(v)); } catch (_) { } }
  };
  const heroOf = id => byId[id] ? byId[id].hero : null;
  const storyLink = (id, extra = "") => { const e = byId[id]; return e ? `<button type="button" class="st-link t-${e.theme}" data-go="${id}"${extra}>${badge(e.theme)}<span><b>${esc(e.title)}</b><small>${yr(e.year)} · ${esc(e.country)}</small></span></button>` : ""; };
  const fnLinks = (html, pre) => String(html || "").replace(/\[(\d+)\]/g, (_, n) => `<sup class="fn"><button data-src="${pre}-${n}" aria-label="Source ${n}">${n}</button></sup>`);
  const srcList = (sources, pre) => sources && sources.length ? `<div class="sources"><h3>Sources</h3><ol>${sources.map(([t, u], i) => `<li id="${pre}-${i + 1}">${t}${u ? ` <a href="${u}" target="_blank" rel="noopener">Link ↗</a>` : ""}</li>`).join("")}</ol></div>` : "";
  function wireSources(root) {
    root.querySelectorAll("button[data-src]").forEach(b => b.onclick = () => {
      const li = document.getElementById(b.dataset.src); if (!li) return;
      FB.scrollToEl(li, 160); li.classList.add("flash"); setTimeout(() => li.classList.remove("flash"), 1600);
    });
  }
  function shareUrl(path) {
    const base = SITE.url ? SITE.url.replace(/\/$/, "") : location.origin + location.pathname.replace(/\/[^/]*$/, "");
    return base + path;
  }
  async function share(url, title) {
    try { if (navigator.share && matchMedia("(pointer:coarse)").matches) { await navigator.share({ title, url }); return; } } catch (_) { return; }
    try { await navigator.clipboard.writeText(url); FB.toast(`Link copied: <span class="tl-url">${esc(url)}</span>`); }
    catch (_) { FB.toast(`Copy this link: <span class="tl-url">${esc(url)}</span>`); }
  }
  function contactUrl(kind, title, body) {
    if (SITE.repo) return `${SITE.repo.replace(/\/$/, "")}/issues/new?labels=${encodeURIComponent(kind)}&title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
    if (SITE.email) return `mailto:${SITE.email}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
    return "";
  }

  /* ---------- focus objects for the map ---------- */
  const momentSeq = m => m.stories.filter(s => byId[s.id]).slice().sort((a, b) => a.d.localeCompare(b.d));
  const focusFor = key => {
    const [kind, id] = String(key).split(":");
    if (kind === "moment" && momentById[id]) {
      const m = momentById[id], seq = momentSeq(m);
      return { key, kind: `Moment · ${m.years}`, title: m.title, seq: seq.map(s => s.id), dates: Object.fromEntries(seq.map(s => [s.id, s.when])), arcs: true, numbered: true, link: "moment/" + id };
    }
    if (kind === "thread" && threadById[id]) {
      const t = threadById[id];
      return { key, kind: "Thread", title: t.title, seq: t.steps.map(s => s.id).filter(i => byId[i]), dates: Object.fromEntries(t.steps.map(s => [s.id, byId[s.id] ? yr(byId[s.id].year) : ""])), arcs: true, numbered: true, link: "thread/" + id };
    }
    if (kind === "path" && pathById[id]) {
      const p = pathById[id];
      return { key, kind: "Pathway", title: p.title, seq: p.steps.map(s => s.id).filter(i => byId[i]), dates: Object.fromEntries(p.steps.map(s => [s.id, byId[s.id] ? yr(byId[s.id].year) : ""])), arcs: false, numbered: true, link: "path/" + id };
    }
    return null;
  };
  const showOnMap = (key, autoplay) => { const f = focusFor(key); if (f) FB.showOnMap({ ...f, autoplay }); };
  FB.hooks.applyShow = key => { const f = focusFor(key); if (f) FB.setFocus(f); };
  document.addEventListener("click", ev => {
    const b = ev.target.closest("[data-show]"); if (!b) return;
    ev.preventDefault(); showOnMap(b.dataset.show, b.dataset.autoplay === "1");
  });

  /* ---------- Explore section ---------- */
  const exM = document.getElementById("ex-moments"), exT = document.getElementById("ex-threads"), exP = document.getElementById("ex-paths"), exMore = document.getElementById("ex-more");
  if (exM) exM.innerHTML = MOMENTS.map(m => {
    const n = momentSeq(m).length, h = heroOf(m.heroStory);
    return `<article class="ex-card mo-card">
      <div class="ex-img" style="${h ? bg(h, 600) : ""}"><span class="mo-yrs notranslate">${esc(m.years)}</span></div>
      <div class="ex-body"><h3>${esc(m.title)}</h3><p>${esc(m.teaser)}</p>
        <div class="ex-btns"><button type="button" class="btn-play" data-show="moment:${m.id}" data-autoplay="1">▶ Play on the map</button><button type="button" class="btn-ghost" data-go="moment/${m.id}">Read · ${n} stories</button></div></div>
    </article>`;
  }).join("");
  if (exT) exT.innerHTML = THREADS.map(t => `<article class="ex-card th-card">
      <div class="ex-body"><div class="th-chain">${t.steps.filter(s => byId[s.id]).map(s => badge(byId[s.id].theme)).join('<i aria-hidden="true"></i>')}</div>
        <h3>${esc(t.title)}</h3><p>${esc(t.teaser)}</p>
        <div class="ex-btns"><button type="button" class="btn-play" data-show="thread:${t.id}" data-autoplay="1">▶ Follow on the map</button><button type="button" class="btn-ghost" data-go="thread/${t.id}">Read</button></div></div>
    </article>`).join("");
  if (exP) exP.innerHTML = PATHWAYS.map(p => `<article class="ex-card pw-card">
      <div class="ex-body"><small class="pw-level">${esc(p.level || "")} · ${p.steps.length} stories</small><h3>${esc(p.title)}</h3><p>${esc(p.teaser)}</p>
        <div class="ex-btns"><button type="button" class="btn-play" data-go="path/${p.id}">Start the pathway →</button></div></div>
    </article>`).join("");
  if (exMore) {
    const sugg = contactUrl("suggestion", "Story suggestion: ", "Event:\nPlace and date:\nWhy it matters:\nGood sources (with links):\n");
    exMore.innerHTML = `<button type="button" class="ex-link" data-go="people"><b>People A–Z</b><span>Everyone named in the stories</span></button>
      <button type="button" class="ex-link" data-go="coverage"><b>Whose history is here?</b><span>What the atlas covers — and what it is missing</span></button>
      ${sugg ? `<a class="ex-link" href="${sugg}" target="_blank" rel="noopener"><b>Suggest a story ↗</b><span>Tell us what is missing</span></a>` : ""}`;
  }
  FB.vc.addEventListener("click", ev => { const b = ev.target.closest("[data-go]"); if (b && !b.onclick) { ev.preventDefault(); go(b.dataset.go); } });
  document.querySelectorAll(".explore [data-go]").forEach(b => b.onclick = () => go(b.dataset.go));

  // moment chips in the timeline sidebar
  const eras = document.querySelector(".tl-eras");
  if (eras && MOMENTS.length) {
    const row = document.createElement("div"); row.className = "tl-moments";
    row.innerHTML = `<span>Moments</span>` + MOMENTS.map(m => `<button type="button" data-show="moment:${m.id}" title="${esc(m.title)}">${esc(m.id === "1780s" ? "1780s" : m.id)}</button>`).join("");
    eras.after(row);
  }

  /* ---------- On this day ---------- */
  const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  function startDay(e) {
    const m = String(e.date || "").match(/^\s*(\d{1,2})\s+([A-Za-z]+)/);
    if (!m) return null;
    const mo = MONTHS.indexOf(m[2].toLowerCase()); if (mo < 0) return null;
    return { d: +m[1], m: mo };
  }
  (function onThisDay() {
    const el = document.getElementById("otd"); if (!el) return;
    const now = new Date(), today = { d: now.getDate(), m: now.getMonth() };
    const dayNum = x => Math.floor((Date.UTC(2001, x.m, x.d) - Date.UTC(2001, 0, 1)) / 864e5);
    const t = dayNum(today);
    const dated = EVENTS.map(e => ({ e, s: startDay(e) })).filter(x => x.s);
    let hits = dated.filter(x => x.s.d === today.d && x.s.m === today.m), label = "On this day";
    if (!hits.length) {
      hits = dated.map(x => ({ ...x, gap: ((dayNum(x.s) - t) + 365) % 365 })).filter(x => x.gap <= 7).sort((a, b) => a.gap - b.gap);
      label = "Coming up this week";
    }
    if (!hits.length) return;
    const fmt = s => `${s.d} ${MONTHS[s.m][0].toUpperCase() + MONTHS[s.m].slice(1)}`;
    el.hidden = false;
    el.innerHTML = `<div class="otd-head"><span class="otd-lbl">${label}</span><span class="otd-date">${fmt(today)}</span></div>
      <div class="otd-row">${hits.slice(0, 3).map(({ e, s }) => `<button type="button" class="otd-card" data-go="${e.id}" style="${bg(e.hero, 500)}"><span><small>${fmt(s)} ${yr(e.year)}</small><b>${esc(e.title)}</b><em>${esc(e.country)}</em></span></button>`).join("")}</div>`;
    el.querySelectorAll("[data-go]").forEach(b => b.onclick = () => go(b.dataset.go));
  })();

  /* ---------- page helpers ---------- */
  const pageHero = (eyebrow, title, teaser, heroKey, btns = "") => `
    <header class="pg-hero" ${heroKey ? `style="--hero:url('${fileUrl(MEDIA[heroKey].f, 1400)}')"` : ""}><div class="wrap">
      <div class="eyebrow">${eyebrow}</div><h1 id="s-title">${esc(title)}</h1>${teaser ? `<p class="teaser">${esc(teaser)}</p>` : ""}${btns ? `<div class="pg-btns">${btns}</div>` : ""}
    </div></header>`;
  const otherCards = (list, kind, curId) => `<div class="pg-others">${list.filter(x => x.id !== curId).map(x => `<button type="button" class="pg-other" data-go="${kind}/${x.id}"><small>${esc(x.years || x.level || "")}</small><b>${esc(x.title)}</b></button>`).join("")}</div>`;

  /* ---------- Moment pages ---------- */
  FB.routes.moment = id => {
    const m = momentById[id]; if (!m) return false;
    const seq = momentSeq(m), h = heroOf(m.heroStory);
    FB.showPage(`${pageHero(`Moment · ${esc(m.years)}`, m.title, m.teaser, h, `<button type="button" class="btn-play big" data-show="moment:${m.id}" data-autoplay="1">▶ Watch it unfold on the map</button>`)}
      <div class="pg-body"><div class="wrap narrow">
        <section class="pg-sec"><h2>Why then?</h2><div class="prose">${fnLinks(m.intro, "ms")}</div></section>
        <section class="pg-sec"><h2>How it unfolded</h2>
          <ol class="mo-list">${seq.map((s, i) => `<li class="t-${byId[s.id].theme}"><span class="mo-n">${i + 1}</span><span class="mo-when notranslate">${esc(s.when)}</span>${storyLink(s.id)}<p>${esc(s.note || "")}</p></li>`).join("")}</ol></section>
        <section class="pg-sec"><h2>What do others say?</h2><div class="debate-note">Historians disagree about what this moment achieved, and why. These are some of the arguments.</div><div class="prose">${fnLinks(m.debates, "ms")}</div></section>
        ${srcList(m.sources, "ms")}
        <section class="pg-sec"><h2>Other moments</h2>${otherCards(MOMENTS, "moment", m.id)}</section>
      </div></div>`, m.title);
    wireSources(FB.vc);
    return true;
  };

  /* ---------- Thread pages ---------- */
  FB.routes.thread = id => {
    const t = threadById[id]; if (!t) return false;
    const steps = t.steps.filter(s => byId[s.id]), h = heroOf(steps[steps.length - 1].id);
    FB.showPage(`${pageHero("Thread", t.title, t.teaser, h, `<button type="button" class="btn-play big" data-show="thread:${t.id}" data-autoplay="1">▶ Follow it on the map</button>`)}
      <div class="pg-body"><div class="wrap narrow">
        <ol class="th-list">${steps.map((s, i) => `${s.link ? `<li class="th-link"><span aria-hidden="true">↓</span><p>${fnLinks(s.link, "ts")}</p></li>` : ""}<li class="th-step">${storyLink(s.id)}</li>`).join("")}</ol>
        <p class="pg-note">A thread links stories where there is evidence of influence or a direct connection. The links are summaries — follow the sources to read more.</p>
        ${srcList(t.sources, "ts")}
        <section class="pg-sec"><h2>Other threads</h2>${otherCards(THREADS, "thread", t.id)}</section>
      </div></div>`, t.title);
    wireSources(FB.vc);
    return true;
  };

  /* ---------- Pathway pages, and the banner shown on stories in a pathway ---------- */
  FB.routes.path = id => {
    const p = pathById[id]; if (!p) return false;
    const steps = p.steps.filter(s => byId[s.id]);
    FB.showPage(`${pageHero(`Pathway · ${esc(p.level || "")}`, p.title, p.teaser, heroOf(steps[0].id), `<button type="button" class="btn-play big" id="pw-start">Start the pathway →</button><button type="button" class="btn-ghost light" data-show="path:${p.id}">See it on the map</button>`)}
      <div class="pg-body"><div class="wrap narrow">
        <p class="pg-lede">${esc(p.intro || "")}</p>
        <ol class="pw-list">${steps.map((s, i) => `<li><span class="mo-n">${i + 1}</span><div>${storyLink(s.id, ` data-pw="${i}"`)}<p class="pw-look"><b>Look for:</b> ${esc(s.look || "")}</p></div></li>`).join("")}</ol>
        ${p.closing ? `<aside class="questions"><h3>The big question</h3><ol><li>${esc(p.closing)}</li></ol></aside>` : ""}
        <p class="pg-note">For teachers: every story has the same ten sections, numbered sources, a "What do others say?" section for debate, four questions to think about, and a "Look closely at a source" activity. Use <b>Quick read</b> for a shorter version, and <b>Print</b> for a clean copy.</p>
        <section class="pg-sec"><h2>Other pathways</h2>${otherCards(PATHWAYS, "path", p.id)}</section>
      </div></div>`, p.title);
    const start = i => { session.set("path", { id: p.id }); go(steps[i].id); };
    FB.vc.querySelector("#pw-start").onclick = () => start(0);
    FB.vc.querySelectorAll("[data-pw]").forEach(b => b.onclick = () => start(+b.dataset.pw));
    return true;
  };
  function pathBanner(e) {
    const st = session.get("path"); if (!st) return "";
    const p = pathById[st.id]; if (!p) return "";
    const steps = p.steps.filter(s => byId[s.id]), i = steps.findIndex(s => s.id === e.id);
    if (i < 0) return "";
    const prev = steps[i - 1], next = steps[i + 1];
    return `<div class="pw-banner"><div class="wrap">
      <div class="pw-b-txt"><small>Pathway · step ${i + 1} of ${steps.length}</small><b>${esc(p.title)}</b><p><span>Look for:</span> ${esc(steps[i].look || "")}</p></div>
      <div class="pw-b-btns">${prev ? `<button type="button" data-go="${prev.id}">← Previous</button>` : ""}${next ? `<button type="button" class="pri" data-go="${next.id}">Next: ${esc(byId[next.id].title)} →</button>` : `<button type="button" class="pri" data-go="path/${p.id}">Finish: the big question →</button>`}<button type="button" class="pw-leave" aria-label="Leave the pathway">✕</button></div>
    </div></div>`;
  }

  /* ---------- People A–Z ---------- */
  const GROUP = /^(the|a|an|some|many|thousands|millions|hundreds|young|local|ordinary|other|women|men|workers|students)\b|\b(and|people|workers|women|men|students|villagers|residents|members|activists|protesters|farmers|miners|citizens|families|crowds?|soldiers|sailors|strikers|rebels|insurgents|community|communities|youth|organisers|delegates|leaders|veterans|movement|groups?|union|council|committee|party|army|forces|government)\b/i;
  function peopleIndex() {
    const map = new Map();
    EVENTS.forEach(e => (e.people || []).forEach(p => {
      const name = String(p.n || "").replace(/<[^>]+>/g, "").replace(/\s*\(.*?\)\s*/g, " ").trim(); if (!name) return;
      const key = name.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
      if (!map.has(key)) map.set(key, { name, roles: [], stories: [], group: GROUP.test(name) || /\d/.test(name) || name.split(/\s+/).length > 5 });
      const x = map.get(key); x.roles.push(String(p.r || "").replace(/<[^>]+>/g, "")); if (!x.stories.includes(e)) x.stories.push(e);
    }));
    return [...map.values()];
  }
  FB.routes.people = () => {
    const sk = x => x.name.replace(/^[\s'"‘’“”«»(]+/, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const byName = (a, b) => sk(a).localeCompare(sk(b), "en", { sensitivity: "base" });
    const all = peopleIndex(), ind = all.filter(x => !x.group).sort(byName), grp = all.filter(x => x.group).sort(byName);
    const letterOf = x => (sk(x)[0] || "#").toUpperCase();
    const row = x => `<li data-l="${letterOf(x)}" data-k="${esc(x.name.toLowerCase())} ${esc(x.stories.map(e => e.title.toLowerCase()).join(" "))}"><div class="pp-name"><b>${esc(x.name)}</b>${x.stories.length > 1 ? `<span class="pp-multi">${x.stories.length} stories</span>` : ""}<small>${esc(x.roles[0])}</small></div><div class="pp-st">${x.stories.map(e => storyLink(e.id)).join("")}</div></li>`;
    const letters = [...new Set(ind.map(letterOf))].filter(l => /[A-Z]/.test(l));
    FB.showPage(`${pageHero("People", "People A–Z", `${ind.length} people and ${grp.length} groups and communities named in the stories — from enslaved rebels and match girls to poets, pastors and presidents.`, null)}
      <div class="pg-body"><div class="wrap">
        <div class="pp-tools"><input type="search" id="pp-q" placeholder="Find a person or story…" aria-label="Find a person"><nav class="pp-letters notranslate">${letters.map(l => `<a href="#" data-l="${esc(l)}">${esc(l)}</a>`).join("")}</nav></div>
        <h2 class="pp-h">People</h2><ul class="pp-list" id="pp-ind">${ind.map(row).join("")}</ul>
        <h2 class="pp-h">Groups and communities</h2><p class="pg-note">Many stories are about crowds, communities and movements rather than famous individuals. Here they are.</p>
        <ul class="pp-list" id="pp-grp">${grp.map(row).join("")}</ul>
        <p class="pp-empty" hidden>No one matches that search.</p>
      </div></div>`, "People A–Z");
    const q = FB.vc.querySelector("#pp-q");
    q.oninput = () => {
      const t = q.value.trim().toLowerCase(); let n = 0;
      FB.vc.querySelectorAll(".pp-list li").forEach(li => { const v = !t || li.dataset.k.includes(t); li.hidden = !v; if (v) n++; });
      FB.vc.querySelector(".pp-empty").hidden = n > 0;
    };
    FB.vc.querySelectorAll(".pp-letters [data-l]").forEach(a => a.onclick = ev => {
      ev.preventDefault(); const li = [...FB.vc.querySelectorAll("#pp-ind li")].find(li => !li.hidden && li.dataset.l === a.dataset.l); if (li) FB.scrollToEl(li, 90);
    });
    return true;
  };

  /* ---------- Whose history is here? ---------- */
  const REGION = {};
  const R = (region, names) => names.split("|").forEach(n => REGION[n] = region);
  R("Africa (south of the Sahara)", "Angola|Benin|Botswana|Burkina Faso|Burundi|Cameroon|Central African Republic|Chad|Congo|Côte d'Ivoire|DR Congo|Djibouti|Equatorial Guinea|Eritrea|Ethiopia|Gabon|Gambia|Ghana|Guinea|Guinea-Bissau|Kenya|Lesotho|Liberia|Madagascar|Malawi|Mali|Mauritania|Mozambique|Namibia|Niger|Nigeria|Rwanda|Senegal|Sierra Leone|Somalia|Somaliland|South Africa|South Sudan|Sudan|Tanzania|Togo|Uganda|Zambia|Zimbabwe|Eswatini|Mauritius|Cape Verde|Réunion");
  R("Middle East and North Africa", "Algeria|Bahrain|Egypt|Iran|Iraq|Israel|Jordan|Kuwait|Lebanon|Libya|Morocco|Oman|Palestine|Qatar|Saudi Arabia|Syria|Tunisia|Turkey|United Arab Emirates|Yemen|Western Sahara|Cyprus");
  R("Europe", "Albania|Austria|Belarus|Belgium|Bosnia and Herzegovina|Bulgaria|Croatia|Czechia|Denmark|Estonia|Finland|France|Germany|Greece|Hungary|Iceland|Ireland|Italy|Kosovo|Latvia|Lithuania|Luxembourg|Malta|Moldova|Montenegro|Netherlands|North Macedonia|Norway|Poland|Portugal|Romania|Russia|Serbia|Slovakia|Slovenia|Spain|Sweden|Switzerland|Ukraine|United Kingdom|Greenland");
  R("Asia", "Afghanistan|Armenia|Azerbaijan|Bangladesh|Bhutan|Brunei|Cambodia|China|Georgia|India|Indonesia|Japan|Kazakhstan|Kyrgyzstan|Laos|Malaysia|Maldives|Mongolia|Myanmar|Nepal|North Korea|Pakistan|Philippines|Singapore|South Korea|Sri Lanka|Taiwan|Tajikistan|Thailand|Timor-Leste|Turkmenistan|Uzbekistan|Vietnam");
  R("North America", "Canada|United States");
  R("Latin America and the Caribbean", "Argentina|Bahamas|Barbados|Belize|Bolivia|Brazil|Chile|Colombia|Costa Rica|Cuba|Dominican Republic|Ecuador|El Salvador|Guatemala|Guyana|Haiti|Honduras|Jamaica|Mexico|Nicaragua|Panama|Paraguay|Peru|Puerto Rico|Suriname|Trinidad and Tobago|Uruguay|Venezuela|Curaçao|Guadeloupe|Martinique|Falkland Islands");
  R("Pacific", "Australia|Fiji|New Caledonia|New Zealand|Papua New Guinea|Solomon Islands|Vanuatu|Tonga|Samoa|Kiribati|Marshall Islands|French Polynesia");
  const regionOf = c => REGION[c] || "Other";
  const bars = (rows, opts = {}) => {
    const max = Math.max(...rows.map(r => r.n), 1);
    return `<table class="cv-bars"><caption class="sr">${esc(opts.caption || "")}</caption><thead class="sr"><tr><th>${esc(opts.label || "Group")}</th><th>Stories</th></tr></thead><tbody>${rows.map(r => `<tr title="${esc(r.label)}: ${r.n} ${r.n === 1 ? "story" : "stories"}">
      <th scope="row">${r.badge ? badge(r.badge) : ""}${esc(r.label)}</th>
      <td><span class="cv-track"><span class="cv-bar ${r.badge ? "t-" + r.badge : ""}" style="width:${(r.n / max * 100).toFixed(1)}%"></span></span><span class="cv-n">${r.n}</span></td></tr>`).join("")}</tbody></table>`;
  };
  FB.routes.coverage = () => {
    const N = EVENTS.length;
    const byRegion = d3.rollups(EVENTS, v => v.length, e => regionOf(e.country)).map(([label, n]) => ({ label, n })).sort((a, b) => b.n - a.n);
    const byTheme = Object.keys(THEMES).map(t => ({ label: THEMES[t], n: EVENTS.filter(e => e.theme === t).length, badge: t })).sort((a, b) => b.n - a.n);
    const ERAS = [[-9999, 999, "Before 1000"], [1000, 1499, "1000–1499"], [1500, 1799, "1500–1799"], [1800, 1899, "1800s"], [1900, 1945, "1900–1945"], [1946, 1989, "1946–1989"], [1990, 9999, "Since 1990"]];
    const byEra = ERAS.map(([a, z, label]) => ({ label, n: EVENTS.filter(e => e.year >= a && e.year <= z).length }));
    const counts = d3.rollup(EVENTS, v => v.length, e => e.country);
    const mapNames = FB.countries.map(FB.cname).filter(n => !["Antarctica", "French Southern Lands", "Falkland Islands"].includes(n));
    const none = [...new Set(mapNames)].filter(n => !counts.has(n)).sort();
    const one = [...counts].filter(([, n]) => n === 1).map(([c]) => c).sort();
    const top = [...counts].sort((a, b) => b[1] - a[1]).slice(0, 8);
    const regionsWithNone = d3.rollups(none, v => v.length, regionOf);
    FB.showPage(`${pageHero("About the atlas", "Whose history is here?", "An honest look at what this atlas covers — and what it is still missing.", null)}
      <div class="pg-body"><div class="wrap narrow">
        <div class="cv-stats">
          <div><b>${N}</b><span>stories</span></div>
          <div><b>${counts.size}</b><span>countries and territories</span></div>
          <div><b>${none.length}</b><span>countries on the map with no story yet</span></div>
        </div>
        <section class="pg-sec"><h2>Where the stories are</h2>${bars(byRegion, { caption: "Stories by region", label: "Region" })}
          <p class="pg-note">The countries with the most stories are ${top.map(([c, n]) => `${esc(c)} (${n})`).join(", ")}. Stories are placed by where they happened, in present-day countries.</p></section>
        <section class="pg-sec"><h2>Which struggles</h2>${bars(byTheme, { caption: "Stories by theme", label: "Theme" })}</section>
        <section class="pg-sec"><h2>When</h2>${bars(byEra, { caption: "Stories by period", label: "Period" })}</section>
        <section class="pg-sec"><h2>Gaps we know about</h2>
          <div class="prose"><ul>
            <li><strong>Countries with no story yet (${none.length}):</strong> ${none.map(esc).join(", ") || "none"}.</li>
            <li><strong>Countries with only one story (${one.length}):</strong> ${one.map(esc).join(", ")}.</li>
            <li><strong>Sources:</strong> most stories rely on English-language sources, and many on Wikipedia, which itself has gaps. Histories written in other languages, and oral histories, are under-represented.</li>
            <li><strong>Whose voices:</strong> the people who left written records — leaders, officials, journalists — are easier to name than the crowds. Women, enslaved people, Indigenous peoples and disabled people are often missing from the record itself.</li>
            <li><strong>Small places:</strong> small islands and territories are hard to see on a world map; some are shown with nearby countries.</li>
          </ul></div>
          ${regionsWithNone.length ? `<p class="pg-note">Missing countries by region: ${regionsWithNone.sort((a, b) => b[1] - a[1]).map(([r, n]) => `${esc(r)} ${n}`).join(" · ")}.</p>` : ""}
        </section>
        ${(() => { const u = contactUrl("suggestion", "Story suggestion: ", "Event:\nPlace and date:\nWhy it matters:\nGood sources (with links):\n"); return u ? `<p><a class="btn-play" href="${u}" target="_blank" rel="noopener">Suggest a story to fill a gap ↗</a></p>` : ""; })()}
      </div></div>`, "Whose history is here?");
    return true;
  };

  /* ---------- story-page tools ---------- */
  const fmtDate = s => { const d = new Date(s); return isNaN(d) ? s : d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }); };
  FB.hooks.storyBanner = e => pathBanner(e);
  FB.hooks.storyTools = e => {
    const report = contactUrl("correction", `Correction: ${e.title}`, `Story: ${e.title} (${e.id})\n\nWhat is wrong:\n\nWhat it should say, with a source:\n`);
    return `<div class="s-tools"><div class="wrap">
      <div class="st-left">
        <div class="st-mode" role="group" aria-label="Reading level"><button type="button" data-mode="full">Full story</button><button type="button" data-mode="quick">Quick read</button></div>
        <button type="button" class="st-btn st-listen" aria-pressed="false">🔊 Listen</button>
        <button type="button" class="st-btn st-print">🖨 Print</button>
        <button type="button" class="st-btn st-share">🔗 Share</button>
      </div>
      <div class="st-right">${e.checked ? `<span class="st-checked">✓ Facts last checked ${esc(fmtDate(e.checked))}</span>` : ""}${report ? `<a class="st-report" href="${report}" target="_blank" rel="noopener">Report an error ↗</a>` : ""}</div>
    </div></div>`;
  };
  FB.hooks.sourceBox = e => {
    const key = e.hero && MEDIA[e.hero] ? e.hero : (e.gallery || []).find(k => MEDIA[k]);
    if (!key) return "";
    const m = MEDIA[key];
    return `<div class="lookclose"><h3>Look closely at a source</h3>
      <div class="lc-grid"><figure><img loading="lazy" src="${fileUrl(m.f, 700)}" alt="${esc(m.cap)}" onerror="this.closest('figure').classList.add('noimg')"><figcaption>${esc(m.cap)} <span class="credit">${credit(m)}</span></figcaption></figure>
      <ol>
        <li>Describe what you can see before deciding what it means.</li>
        <li>Who made it, and when? Was it made at the time, or later? Use the caption and credit.</li>
        <li>Why might it have been made — to record, to persuade, to celebrate or to remember?</li>
        <li>Whose point of view does it show? Who is missing from it?</li>
        <li>Does it support the account in "What happened?", or raise new questions?</li>
      </ol></div></div>`;
  };
  function setMode(mode) {
    FB.view.classList.toggle("quick", mode === "quick");
    FB.vc.querySelectorAll(".st-mode button").forEach(b => b.setAttribute("aria-pressed", b.dataset.mode === mode));
    store.set("mode", mode);
  }
  FB.hooks.afterStory = (e, vc) => {
    setMode(store.get("mode") || "full");
    vc.querySelectorAll(".st-mode button").forEach(b => b.onclick = () => { setMode(b.dataset.mode); stopSpeech(); });
    vc.querySelector(".st-print").onclick = () => window.print();
    vc.querySelector(".st-share").onclick = () => share(SITE.storyPages && SITE.url ? shareUrl(`/stories/${e.id}.html`) : shareUrl(`/#${e.id}`), e.title);
    const lb = vc.querySelector(".st-listen");
    if (!("speechSynthesis" in window)) lb.hidden = true;
    else lb.onclick = () => speaking ? stopSpeech() : speak(e, lb);
    vc.querySelectorAll(".pw-banner [data-go]").forEach(b => b.onclick = () => go(b.dataset.go));
    const leave = vc.querySelector(".pw-leave"); if (leave) leave.onclick = () => { session.set("path", null); vc.querySelector(".pw-banner").remove(); };
  };

  /* listen: read the visible text aloud, paragraph by paragraph */
  let speaking = false;
  function speak(e, btn) {
    const blocks = [e.title, e.teaser];
    FB.vc.querySelectorAll(".chapter, .questions").forEach(sec => {
      if (sec.offsetParent === null) return;               // hidden in Quick read
      sec.querySelectorAll("h2, h3, .prose p, .prose li, .person, .questions li").forEach(n => {
        const c = n.cloneNode(true); c.querySelectorAll("sup, .num").forEach(x => x.remove());
        const t = c.textContent.replace(/\s+/g, " ").trim(); if (t) blocks.push(t);
      });
    });
    const lang = ((document.cookie.match(/googtrans=\/[^/]*\/([^;]+)/) || [])[1]) || "en-GB";
    speechSynthesis.cancel(); speaking = true;
    btn.textContent = "■ Stop"; btn.setAttribute("aria-pressed", "true");
    blocks.forEach((t, i) => {
      const u = new SpeechSynthesisUtterance(t); u.lang = lang; u.rate = 0.98;
      if (i === blocks.length - 1) u.onend = stopSpeech;
      speechSynthesis.speak(u);
    });
  }
  function stopSpeech() {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    speaking = false;
    const b = FB.vc.querySelector(".st-listen"); if (b) { b.textContent = "🔊 Listen"; b.setAttribute("aria-pressed", "false"); }
  }
  FB.hooks.leaveView = () => { if (speaking) stopSpeech(); FB.view.classList.remove("quick"); };

  /* ---------- share the current map view ---------- */
  const sv = document.getElementById("shareview");
  if (sv) sv.onclick = () => share(location.href.split("#")[0], "From Below");
})();
