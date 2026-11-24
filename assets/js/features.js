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
    if (kind === "guide") {
      const g = (window.GUIDES || []).find(x => x.id === id); if (!g) return null;
      const ids = [...new Set(g.sections.flatMap(sec => (sec.stories || []).map(it => it.id)))].filter(i => byId[i]).sort((x, y) => (byId[x].year || 0) - (byId[y].year || 0));
      return { key, kind: "Issue guide", title: g.title, seq: ids, dates: Object.fromEntries(ids.map(i => [i, yr(byId[i].year)])), arcs: false, numbered: true, link: "guide/" + id };
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
  const exMk = document.getElementById("ex-making");
  if (exMk && window.BEHIND) exMk.innerHTML = window.BEHIND.cards.map(c => `<article class="ex-card mk-card"><div class="ex-img" style="${MEDIA[c.hero] ? bg(c.hero, 600) : ""}"></div><div class="ex-body"><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p><div class="ex-btns"><button type="button" class="btn-play" data-go="${c.route}">Open →</button></div></div></article>`).join("");
  const exG = document.getElementById("ex-guides");
  if (exG) exG.innerHTML = (window.GUIDES || []).map(g => { const h = heroOf(g.heroStory); return `<article class="ex-card gd-card"><div class="ex-img" style="${h ? bg(h, 600) : ""}"></div><div class="ex-body"><small class="pw-level">Issue guide${g.sections ? ` · ${g.sections.length} chapters` : ""}</small><h3>${esc(g.title)}</h3><p>${esc(g.teaser)}</p><div class="ex-btns"><button type="button" class="btn-play" data-go="guide/${g.id}">Read the guide →</button></div></div></article>`; }).join("");
  if (exP) exP.innerHTML = PATHWAYS.map(p => `<article class="ex-card pw-card">
      <div class="ex-body"><small class="pw-level">Pathway · ${p.steps.length} stories</small><h3>${esc(p.title)}</h3><p>${esc(p.teaser)}</p>
        <div class="ex-btns"><button type="button" class="btn-play" data-go="path/${p.id}">Start the pathway →</button></div></div>
    </article>`).join("");
  const ogList = document.getElementById("og-list");
  if (ogList) {
    const og = (window.EVENTS || []).filter(e => e.ongoing).sort((a, b) => (b.year || 0) - (a.year || 0));
    if (og.length) {
      document.getElementById("exb-og").hidden = false;
      const where = e => esc(e.country || String(e.place || "").split(",").pop().trim());
      ogList.innerHTML = og.map((e, i) => `<button type="button" class="og-note" data-go="${e.id}" style="--tilt:${[-1.6, 1.1, -0.6, 1.7, -1.2, 0.7][i % 6]}deg">
        <span class="og-pin" aria-hidden="true"></span>
        <small>${where(e)} · since ${yr(e.year)}</small>
        <b>${esc(e.title)}</b>
        <em>Reviewed ${esc(e.ongoing.asOf)}</em></button>`).join("");
    }
  }
  const srcStats = document.getElementById("src-stats");
  if (srcStats) {
    const E = window.EVENTS || [], X = window.EXTRAS || {};
    const nSrc = E.reduce((a, e) => a + ((e.sources || []).length), 0);
    const nChecked = E.filter(e => e.checked || (window.REVIEWS && window.REVIEWS[e.id]) || (X[e.id] && X[e.id].checked)).length;
    const nPrim = E.filter(e => X[e.id] && X[e.id].primary).length;
    const nVoice = E.filter(e => X[e.id] && (X[e.id].voices || []).length).length;
    const stat = (n, t) => `<div class="src-stat"><b>${n.toLocaleString("en-GB")}</b><span>${t}</span></div>`;
    srcStats.innerHTML = stat(E.length, "stories, each with numbered footnotes") + stat(nSrc, "cited sources, each with a link") + stat(nChecked, "stories fact-checked, with the date shown") + stat(nPrim, "stories with a primary source from the time") + stat(nVoice, "stories with first-hand quotations");
  }
  if (exMore) {
    const sugg = contactUrl("suggestion", "Story suggestion: ", "Event:\nPlace and date:\nWhy it matters:\nGood sources (with links):\n");
    exMore.innerHTML = `<button type="button" class="ex-link" data-go="glossary"><b>Glossary</b><span>Key words explained in plain English</span></button>
      <button type="button" class="ex-link" data-go="people"><b>People A–Z</b><span>Everyone named in the stories</span></button>
      ${sugg ? `<a class="ex-link" href="${sugg}" target="_blank" rel="noopener"><b>Suggest a story ↗</b><span>Tell us what is missing</span></a>` : ""}`;
  }
  if (SITE.support && SITE.support.url) {
    const lbl = SITE.support.label || "Support From Below";
    const ns = document.getElementById("nav-support"); if (ns) { ns.href = SITE.support.url; ns.hidden = false; }
    const sf = document.getElementById("support-foot");
    if (sf) { sf.hidden = false; sf.innerHTML = `${esc(SITE.support.text || "From Below is free, has no adverts and is openly licensed. If you find it useful, you can help keep it going.")}<br><a class="btn-support" href="${SITE.support.url}" target="_blank" rel="noopener">♥ ${esc(lbl)}</a>`; }
    if (exMore) exMore.insertAdjacentHTML("beforeend", `<a class="ex-link ex-support" href="${SITE.support.url}" target="_blank" rel="noopener"><b>♥ ${esc(lbl)} ↗</b><span>Free, no adverts, openly licensed — help keep it going</span></a>`);
  }
  // Support links always open in a new tab (some embedded viewers ignore target="_blank").
  document.addEventListener("click", ev => {
    const a = ev.target.closest && ev.target.closest("a.nav-support, a.btn-support, a.ex-support"); if (!a) return;
    let w = null; try { w = window.open(a.href, "_blank"); } catch (_) { }
    if (w) { try { w.opener = null; } catch (_) { } ev.preventDefault(); }
  });
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
  (function comingUpSoon() {
    const el = document.getElementById("soon"), blk = document.getElementById("exb-soon"); if (!el) return;
    const now = new Date(), today = { d: now.getDate(), m: now.getMonth() };
    const dayNum = x => Math.floor((Date.UTC(2001, x.m, x.d) - Date.UTC(2001, 0, 1)) / 864e5);
    const t = dayNum(today);
    const list = EVENTS.map(e => ({ e, s: startDay(e) })).filter(x => x.s && MEDIA[x.e.hero])
      .map(x => ({ ...x, gap: ((dayNum(x.s) - t) + 365) % 365 })).sort((a, b) => a.gap - b.gap || a.e.year - b.e.year);
    if (!list.length) return;
    const fmt = s => `${s.d} ${MONTHS[s.m][0].toUpperCase() + MONTHS[s.m].slice(1)}`;
    const when = g => g === 0 ? "Today" : g === 1 ? "Tomorrow" : g < 7 ? `In ${g} days` : g < 14 ? "Next week" : `In ${Math.round(g / 7)} weeks`;
    blk.hidden = false;
    document.getElementById("soon-date").textContent = `Anniversaries from today, ${fmt(today)}. Use the arrows to go forward or back through the year.`;
    let start = 0;
    const per = () => innerWidth < 640 ? 1 : innerWidth < 960 ? 2 : 3;
    el.innerHTML = `<button type="button" class="ex-arrow prev" aria-label="Earlier anniversaries">‹</button><div class="soon-row" aria-live="polite"></div><button type="button" class="ex-arrow next" aria-label="Later anniversaries">›</button>`;
    const row = el.querySelector(".soon-row");
    function draw(dir) {
      const n = per(), L = list.length;
      row.innerHTML = Array.from({ length: n }, (_, k) => list[((start + k) % L + L) % L]).map(({ e, s, gap }) => `<button type="button" class="otd-card" data-go="${e.id}" style="${bg(e.hero, 500)}"><span><small><i>${when(gap)}</i> ${fmt(s)} ${yr(e.year)}</small><b>${esc(e.title)}</b><em>${esc(e.country || "")}</em></span></button>`).join("");
      row.style.setProperty("--n", n);
      row.classList.remove("in-l", "in-r"); void row.offsetWidth; if (dir) row.classList.add(dir > 0 ? "in-r" : "in-l");
      row.querySelectorAll("[data-go]").forEach(b => b.onclick = () => go(b.dataset.go));
    }
    el.querySelector(".prev").onclick = () => { start -= per(); draw(-1); };
    el.querySelector(".next").onclick = () => { start += per(); draw(1); };
    let lastN = per(); addEventListener("resize", () => { if (per() !== lastN) { lastN = per(); draw(0); } });
    draw(0);
  })();

  /* ---------- Explore: icons, jump chips and row arrows ---------- */
  const ICO = {
    soon: '<path d="M4 7h16v13H4z"/><path d="M4 11h16M8 4v5M16 4v5"/>',
    og: '<circle cx="12" cy="12" r="3"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/>',
    moments: '<circle cx="12" cy="12" r="2.2"/><circle cx="12" cy="12" r="5.6"/><circle cx="12" cy="12" r="9"/>',
    threads: '<circle cx="5" cy="17" r="2.2"/><circle cx="12" cy="7" r="2.2"/><circle cx="19" cy="15" r="2.2"/><path d="M6.4 15.3 10.7 8.8M13.6 8.3l4.1 5"/>',
    guides: '<path d="M3 5.5c3-1 6-1 9 1 3-2 6-2 9-1V19c-3-1-6-1-9 1-3-2-6-2-9-1z"/><path d="M12 6.5V20"/>',
    deep: '<path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>',
    paths: '<path d="M5 20c0-4 4-4 4-8s-4-4-4-8"/><path d="M15 20c0-4 4-4 4-8s-4-4-4-8" opacity=".55"/><circle cx="5" cy="20" r="1.3"/><circle cx="19" cy="4" r="1.3"/>',
    behind: '<path d="M3 7h18v4H3z"/><path d="M5 11v9h14v-9M10 15h4"/>'
  };
  const ico = k => `<svg class="ex-ico" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${ICO[k] || ""}</svg>`;
  FB.exIcon = ico;
  function setupExplore() {
    const blocks = [...document.querySelectorAll(".explore .ex-block[data-ico]")];
    blocks.forEach(b => { const h = b.querySelector(".ex-head h2"); if (h && !h.querySelector(".ex-ico")) h.insertAdjacentHTML("afterbegin", ico(b.dataset.ico)); });
    const nav = document.getElementById("ex-nav");
    if (nav) {
      nav.innerHTML = `<div class="ex-nav-in">${blocks.filter(b => !b.hidden).map(b => `<a href="#" class="ex-chip" data-to="${b.id}">${ico(b.dataset.ico)}<span>${esc(b.dataset.nav)}</span></a>`).join("")}</div>`;
      nav.querySelectorAll("[data-to]").forEach(a => a.onclick = ev => { ev.preventDefault(); const t = document.getElementById(a.dataset.to); const y = t.getBoundingClientRect().top + scrollY - (nav.offsetHeight + 70); scrollTo({ top: y, behavior: "smooth" }); });
      let raf = 0;
      const spy = () => { raf = 0; const lim = nav.getBoundingClientRect().bottom + 140; let cur = null; blocks.forEach(b => { if (!b.hidden && b.getBoundingClientRect().top < lim) cur = b; }); nav.querySelectorAll(".ex-chip").forEach(c => c.classList.toggle("on", !!cur && c.dataset.to === cur.id)); const on = nav.querySelector(".ex-chip.on"); if (on) { const r = nav.firstElementChild; const x = on.offsetLeft - r.clientWidth / 2 + on.offsetWidth / 2; r.scrollTo({ left: x, behavior: "smooth" }); } };
      addEventListener("scroll", () => { if (!raf) raf = requestAnimationFrame(spy); }, { passive: true }); spy();
    }
    document.querySelectorAll(".explore .ex-row").forEach(row => {
      if (row.parentElement.classList.contains("ex-rowwrap")) return;
      const w = document.createElement("div"); w.className = "ex-rowwrap"; row.before(w); w.appendChild(row);
      w.insertAdjacentHTML("afterbegin", '<button type="button" class="ex-arrow prev" aria-label="Scroll back">‹</button>');
      w.insertAdjacentHTML("beforeend", '<button type="button" class="ex-arrow next" aria-label="Scroll forward">›</button>');
      const [pv, nx] = [w.querySelector(".prev"), w.querySelector(".next")];
      const sync = () => { const max = row.scrollWidth - row.clientWidth - 2; w.classList.toggle("scrolls", max > 0); pv.disabled = row.scrollLeft <= 2; nx.disabled = row.scrollLeft >= max; };
      pv.onclick = () => row.scrollBy({ left: -row.clientWidth * 0.85, behavior: "smooth" });
      nx.onclick = () => row.scrollBy({ left: row.clientWidth * 0.85, behavior: "smooth" });
      row.addEventListener("scroll", sync, { passive: true }); addEventListener("resize", sync); sync(); setTimeout(sync, 400);
    });
  }
  FB.setupExplore = setupExplore;
  if (document.readyState === "complete") setTimeout(setupExplore, 0); else addEventListener("load", setupExplore);

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
        ${(() => { const gs = (window.GUIDES || []).filter(g => g.sections.some(sec => (sec.stories || []).some(it => steps.some(st => st.id === it.id)))); return gs.length ? `<aside class="th-guides"><h3>The bigger picture</h3><p>These stories also appear in ${gs.length > 1 ? "these issue guides, which follow the wider struggle" : "an issue guide, which follows the wider struggle"}:</p>${gs.map(g => `<button type="button" class="pg-other" data-go="guide/${g.id}"><small>Issue guide</small><b>${esc(g.title)}</b></button>`).join("")}</aside>` : ""; })()}
        ${srcList(t.sources, "ts")}
        <section class="pg-sec"><h2>Other threads</h2>${otherCards(THREADS, "thread", t.id)}</section>
      </div></div>`, t.title);
    wireSources(FB.vc);
    return true;
  };

  /* ---------- Making history (a page about evidence, memory and silence) ---------- */
  FB.routes.making = () => {
    const M = window.MAKING; if (!M) return false;
    const DEEP = window.DEEP || {};
    const item = it => {
      if (it.deep && DEEP[it.deep]) return `<li class="mk-item"><button type="button" class="st-link mk-deep" data-go="deep/${it.deep}"><span class="mk-dd">Map</span><span><b>${esc(DEEP[it.deep].title)}</b><small>Deep dive · ${esc(DEEP[it.deep].years)}</small></span></button><p>${esc(it.note)}</p></li>`;
      if (it.id && byId[it.id]) return `<li class="mk-item">${storyLink(it.id)}<p>${esc(it.note)}</p></li>`;
      return "";
    };
    FB.showPage(`${pageHero(`<a href="#behind" class="bh-crumb">Behind the history</a> · Making history`, M.title, M.teaser, M.hero && MEDIA[M.hero] ? M.hero : null)}
      <div class="pg-body"><div class="wrap narrow">
        <p class="pg-lede">${esc(M.intro)}</p>
        <nav class="mk-toc" aria-label="Sections">${M.sections.map(sec => `<a href="#making" data-mk="${sec.id}">${esc(sec.title)}</a>`).join("")}</nav>
        ${M.sections.map(sec => `<section class="pg-sec mk-sec" id="mk-${sec.id}"><h2>${esc(sec.title)}</h2><p>${esc(sec.text)}</p><ul class="mk-list">${sec.items.map(item).join("")}</ul></section>`).join("")}
        ${M.questions ? `<aside class="questions"><h3>Questions to ask of any history</h3><ol>${M.questions.map(q => `<li>${esc(q)}</li>`).join("")}</ol></aside>` : ""}
        <p class="pg-note">Every story on this site has a section on the evidence, usually with a source from the time. These questions are worth asking of each of them.</p>
        ${bhOthers("making")}
      </div></div>`, M.title);
    FB.vc.querySelectorAll("[data-mk]").forEach(a => a.onclick = ev => { ev.preventDefault(); const t = document.getElementById("mk-" + a.dataset.mk); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); });
    return true;
  };

  /* ---------- Issue guides ---------- */
  const GUIDES = window.GUIDES || [];
  FB.routes.guide = id => {
    const G = GUIDES.find(g => g.id === id); if (!G) return false;
    const h = heroOf(G.heroStory);
    // stories open in a new tab, so the reader keeps their place in the guide
    const sItem = it => { const e = byId[it.id]; return e ? `<li class="mk-item"><a class="st-link t-${e.theme}" href="#${it.id}" target="_blank" rel="noopener">${badge(e.theme)}<span><b>${esc(e.title)}</b><small>${yr(e.year)} · ${esc(e.country)} ↗</small></span></a><p>${esc(it.note)}</p></li>` : ""; };
    const S = G.sources || [];
    const fnG = html => String(html || "").replace(/\[(\d+)\]/g, (m, k) => { const x = S[k - 1]; return x && x[1] ? `<sup class="fn"><a href="${x[1]}" target="_blank" rel="noopener" title="${esc(x[0])}">${k}</a></sup>` : ""; });
    const n = G.sections.length, shownT = new Set();
    FB.showPage(`${pageHero("Issue guide", G.title, G.teaser, h, `<button type="button" class="btn-ghost light" data-show="guide:${G.id}">See the stories on the map</button><button type="button" class="btn-ghost light" id="gd-print">Print</button>`)}
      <div class="pg-body"><div class="wrap narrow gd">
        <p class="pg-lede">${esc(G.intro)}</p>
        <p class="pg-note gd-what">An issue guide follows one injustice across time and place. Its stories are linked by the issue, not necessarily by influence — where one movement directly inspired another, the guide points you to the thread that traces it.</p>
        <div class="gd-bar"><span>${n} chapters</span><button type="button" class="btn-ghost" id="gd-all">Open all</button></div>
        <div class="gd-acc">${G.sections.map((sec, k) => { const im = (sec.img && MEDIA[sec.img]) ? sec.img : (sec.hero && heroOf(sec.hero)); return `
          <details class="gd-ch" id="mk-${sec.id}"${k === 0 ? " open" : ""}>
            <summary>
              <span class="gd-no">${k + 1}</span>
              <span class="gd-sum"><small>${esc(sec.when || "")}</small><b>${esc(sec.title)}</b><em>${esc(sec.kicker || "")}</em></span>
              ${im && MEDIA[im] ? `<span class="gd-thumb" style="${bg(im, 300)}" aria-hidden="true"></span>` : ""}
              <span class="gd-chev" aria-hidden="true"></span>
            </summary>
            <div class="gd-body">
              <div class="prose">${fnG(sec.html)}</div>
              ${(() => { const ts = THREADS.filter(t => !shownT.has(t.id) && (sec.stories || []).some(it => t.steps.some(st => st.id === it.id))); ts.forEach(t => shownT.add(t.id)); return ts.length ? `<p class="gd-thread">${ts.map(t => `<a href="#thread/${t.id}" target="_blank" rel="noopener"><small>Follow the thread</small><b>${esc(t.title)}</b> ↗</a>`).join("")}</p>` : ""; })()}
              ${sec.stories ? `<h3 class="gd-more">${sec.stories.length > 1 ? "Read the stories" : "Read the story"}</h3><ul class="mk-list">${sec.stories.map(sItem).join("")}</ul>` : ""}
              ${im && MEDIA[im] ? `<p class="gd-credit">Picture: ${esc(MEDIA[im].cap)} ${credit(MEDIA[im])}</p>` : ""}
              ${k < n - 1 ? `<button type="button" class="gd-next" data-next="${k + 1}">Next: ${esc(G.sections[k + 1].title)} →</button>` : ""}
            </div>
          </details>`; }).join("")}</div>
        ${S.length ? `<div class="gd-srcs"><span>Sources</span>${S.map(([t, u], i) => u ? `<a href="${u}" target="_blank" rel="noopener" title="${esc(t)}">${i + 1}</a>` : "").join("")}</div>` : ""}
        ${GUIDES.length > 1 ? `<section class="pg-sec"><h2>Other issue guides</h2>${otherCards(GUIDES, "guide", G.id)}</section>` : ""}
      </div></div>`, G.title);
    const chs = [...FB.vc.querySelectorAll(".gd-ch")], allBtn = FB.vc.querySelector("#gd-all");
    const sync = () => { allBtn.textContent = chs.every(c => c.open) ? "Close all" : "Open all"; };
    chs.forEach(c => c.addEventListener("toggle", sync));
    allBtn.onclick = () => { const open = !chs.every(c => c.open); chs.forEach(c => c.open = open); sync(); };
    FB.vc.querySelectorAll("[data-next]").forEach(b => b.onclick = () => { const c = chs[+b.dataset.next]; b.closest(".gd-ch").open = false; c.open = true; c.scrollIntoView({ behavior: "smooth", block: "start" }); });
    // footnote links may point into a closed chapter: open everything before printing
    FB.vc.querySelector("#gd-print").onclick = () => { chs.forEach(c => c.open = true); sync(); setTimeout(() => window.print(), 50); };
    return true;
  };

  /* ---------- Behind the history: hub, the official story, our method ---------- */
  const BH = window.BEHIND;
  const bhTarget = it => it.deep && (window.DEEP || {})[it.deep] ? `<button type="button" class="st-link mk-deep" data-go="deep/${it.deep}"><span class="mk-dd">Map</span><span><b>${esc(window.DEEP[it.deep].title)}</b><small>Deep dive · ${esc(window.DEEP[it.deep].years)}</small></span></button>` : (it.id && byId[it.id] ? storyLink(it.id) : "");
  const bhOthers = cur => `<section class="pg-sec"><h2>Behind the history</h2><div class="pg-others">${BH.cards.filter(c => c.route !== cur).map(c => `<button type="button" class="pg-other" data-go="${c.route}"><small>Behind the history</small><b>${esc(c.title)}</b></button>`).join("")}</div></section>`;
  FB.routes.behind = () => {
    if (!BH) return false;
    FB.showPage(`${pageHero("Behind the history", BH.title, BH.teaser, MEDIA[BH.hero] ? BH.hero : null)}
      <div class="pg-body"><div class="wrap">
        <p class="pg-lede bh-lede">${esc(BH.intro)}</p>
        <div class="bh-grid">${BH.cards.map((c, i) => `<button type="button" class="bh-card" data-go="${c.route}"><span class="bh-img" style="${MEDIA[c.hero] ? bg(c.hero, 600) : ""}"></span><span class="bh-txt"><small>${i + 1} of ${BH.cards.length}</small><b>${esc(c.title)}</b><span>${esc(c.text)}</span><em>Open →</em></span></button>`).join("")}</div>
      </div></div>`, BH.title);
    return true;
  };
  FB.routes.official = () => {
    if (!BH) return false; const O = BH.official;
    FB.showPage(`${pageHero(`<a href="#behind" class="bh-crumb">Behind the history</a> · The official story`, O.title, O.teaser, "reiterdenkmal")}
      <div class="pg-body"><div class="wrap narrow">
        <p class="pg-lede">${esc(O.intro)}</p>
        <nav class="mk-toc" aria-label="Sections"><a href="#official" data-mk="figures">Counting the dead</a><a href="#official" data-mk="words">The language of power</a><a href="#official" data-mk="erase">Erasing and rewriting</a></nav>
        <section class="pg-sec mk-sec" id="mk-figures"><h2>Counting the dead</h2>
          <p>Governments have often published low figures for the number of people their forces killed, and later research has often found far more. Opponents can exaggerate too. Here are official figures set beside other estimates, from stories on this site.</p>
          <div class="of-table" role="table" aria-label="Official figures and other estimates">
            <div class="of-row of-head" role="row"><span role="columnheader">Event</span><span role="columnheader">The official figure</span><span role="columnheader">Other estimates</span></div>
            ${O.figures.map(f => { const t = f.deep ? `deep/${f.deep}` : f.id; return `<div class="of-row" role="row"><span role="cell"><button type="button" class="of-ev" data-go="${t}">${esc(f.event)} →</button></span><span role="cell" class="of-off">${esc(f.official)}</span><span role="cell" class="of-oth">${esc(f.other)}</span></div>`; }).join("")}
          </div>
          <p class="pg-note">Each figure comes from the linked story, which names its sources.</p>
        </section>
        <section class="pg-sec mk-sec" id="mk-words"><h2>The language of power</h2>
          <p>Before anyone counts the dead, someone decides what to call the people who rose up. The same people can be rebels or patriots, agitators or workers, terrorists or citizens.</p>
          ${O.language.map(g => `<h3 class="of-h3">${esc(g.title)}</h3><p class="of-lead">${esc(g.text)}</p><ul class="mk-list">${g.items.filter(it => byId[it.id]).map(it => `<li class="mk-item">${storyLink(it.id)}<p>${esc(it.said)}</p></li>`).join("")}</ul>`).join("")}
        </section>
        <section class="pg-sec mk-sec" id="mk-erase"><h2>Erasing and rewriting</h2>
          <p>Records can be destroyed, deaths explained away, places renamed and monuments built to tell one side of the story.</p>
          <ul class="mk-list">${O.erasing.map(it => `<li class="mk-item">${bhTarget(it)}<p>${esc(it.note)}</p></li>`).join("")}</ul>
        </section>
        <aside class="questions"><h3>Questions to think about</h3><ol>${O.questions.map(q => `<li>${esc(q)}</li>`).join("")}</ol></aside>
        ${bhOthers("official")}
      </div></div>`, O.title);
    FB.vc.querySelectorAll("[data-mk]").forEach(a => a.onclick = ev => { ev.preventDefault(); const t = document.getElementById("mk-" + a.dataset.mk); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); });
    return true;
  };
  FB.routes.method = () => {
    if (!BH) return false; const M = BH.method;
    const N = EVENTS.length, nP = EVENTS.filter(e => e.primary).length, nV = EVENTS.filter(e => e.voices && e.voices.length).length, nOg = EVENTS.filter(e => e.ongoing).length;
    FB.showPage(`${pageHero(`<a href="#behind" class="bh-crumb">Behind the history</a> · Our method`, M.title, M.teaser, null)}
      <div class="pg-body"><div class="wrap narrow">
        <div class="bh-stats"><div><b>${N}</b><span>stories, each with numbered sources</span></div><div><b>${nP}</b><span>with a primary source to look at closely</span></div><div><b>${nV}</b><span>with quotations from people who were there</span></div><div><b>${nOg}</b><span>recent stories with an 'ongoing situation' box</span></div></div>
        ${M.sections.map(s => `<section class="pg-sec"><h2>${esc(s.title)}</h2><div class="prose">${s.html}</div></section>`).join("")}
        <p class="pg-btns"><button type="button" class="btn-play" data-go="coverage">See our coverage, and the gaps →</button></p>
        ${bhOthers("method")}
      </div></div>`, M.title);
    return true;
  };

  /* ---------- Pathway pages, and the banner shown on stories in a pathway ---------- */
  FB.routes.path = id => {
    const p = pathById[id]; if (!p) return false;
    const steps = p.steps.filter(s => byId[s.id]);
    FB.showPage(`${pageHero("Pathway", p.title, p.teaser, heroOf(steps[0].id), `<button type="button" class="btn-play big" id="pw-start">Start the pathway →</button><button type="button" class="btn-ghost light" data-show="path:${p.id}">See it on the map</button>`)}
      <div class="pg-body"><div class="wrap narrow">
        <p class="pg-lede">${esc(p.intro || "")}</p>
        <ol class="pw-list">${steps.map((s, i) => `<li><span class="mo-n">${i + 1}</span><div>${storyLink(s.id, ` data-pw="${i}"`)}<p class="pw-look"><b>Look for:</b> ${esc(s.look || "")}</p></div></li>`).join("")}</ol>
        ${p.closing ? `<aside class="questions"><h3>The big question</h3><ol><li>${esc(p.closing)}</li></ol></aside>` : ""}
        <p class="pg-note">Every story has the same sections, numbered references, a "What do others say?" section, and a source from the time. Use <b>Quick read</b> for a shorter version, and <b>Print</b> for a clean copy.</p>
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

  /* ---------- glossary: page, and hover definitions in story text ---------- */
  const GLOSS = window.GLOSSARY || [];
  const glById = Object.fromEntries(GLOSS.map(g => [g.id, g]));
  const glForm = {}; GLOSS.forEach(g => (g.m || []).forEach(f => { glForm[f] = g.id; }));
  const glRe = GLOSS.length ? new RegExp("(^|[^\\p{L}\\p{N}-])(" + Object.keys(glForm).sort((a, b) => b.length - a.length).map(f => f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")(?![\\p{L}\\p{N}])", "u") : null;
  function markGlossary(root) {
    if (!glRe || !root) return;
    const used = new Set();
    const SKIP = "a,sup,button,h1,h2,h3,h4,blockquote,figcaption,.sources,.gl,.voices,.similar,.more,.questions,summary,.ongoing";
    root.querySelectorAll(".chapter .prose").forEach(block => {
      const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT, { acceptNode: n => n.parentElement.closest(SKIP) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
      const nodes = []; let n; while ((n = walker.nextNode())) nodes.push(n);
      nodes.forEach(node => {
        let rest = node, guard = 0;
        while (rest && guard++ < 20) {
          const t = rest.nodeValue; let m = null, off = 0, sub = t;
          // find the first match whose term has not been used yet in this story
          while (sub.length) { const x = glRe.exec(sub); if (!x) break; const id = glForm[x[2]]; if (!used.has(id)) { m = x; break; } const cut = x.index + x[0].length; off += cut; sub = sub.slice(cut); }
          if (!m) break;
          const id = glForm[m[2]]; used.add(id);
          const start = off + m.index + m[1].length, word = m[2];
          const after = rest.splitText(start); rest = after.splitText(word.length);
          const span = document.createElement("span"); span.className = "gl"; span.tabIndex = 0; span.dataset.gl = id; span.textContent = word;
          span.setAttribute("aria-describedby", "gl-tip");
          after.replaceWith(span);
        }
      });
    });
  }
  // one floating definition box, shared by every underlined word
  const tip = document.createElement("div"); tip.id = "gl-tip"; tip.className = "gl-tip"; tip.setAttribute("role", "tooltip"); tip.hidden = true; document.body.appendChild(tip);
  let tipFor = null, tipT = null;
  function showTip(el) {
    const g = glById[el.dataset.gl]; if (!g) return;
    clearTimeout(tipT); tipFor = el;
    tip.innerHTML = `<b>${esc(g.term)}</b><span>${esc(g.d)}</span><a href="#glossary/${g.id}">See the glossary →</a>`;
    tip.hidden = false;
    const r = el.getBoundingClientRect(), tw = Math.min(320, window.innerWidth - 24);
    tip.style.width = tw + "px";
    let x = r.left + r.width / 2 - tw / 2; x = Math.max(12, Math.min(x, window.innerWidth - tw - 12));
    const below = r.bottom + 10 + tip.offsetHeight < window.innerHeight;
    tip.style.left = x + "px"; tip.style.top = (below ? r.bottom + 8 : r.top - tip.offsetHeight - 8) + "px";
  }
  function hideTip(now) { clearTimeout(tipT); tipT = setTimeout(() => { tip.hidden = true; tipFor = null; }, now ? 0 : 180); }
  document.addEventListener("mouseover", ev => { const el = ev.target.closest && ev.target.closest(".gl"); if (el) showTip(el); else if (!ev.target.closest || !ev.target.closest("#gl-tip")) { if (tipFor) hideTip(); } else clearTimeout(tipT); });
  document.addEventListener("focusin", ev => { const el = ev.target.closest && ev.target.closest(".gl"); if (el) showTip(el); });
  document.addEventListener("focusout", ev => { if (ev.target.closest && ev.target.closest(".gl")) hideTip(); });
  document.addEventListener("click", ev => { const el = ev.target.closest && ev.target.closest(".gl"); if (el) { ev.preventDefault(); if (tipFor === el && !tip.hidden) hideTip(true); else showTip(el); } else if (!ev.target.closest("#gl-tip")) hideTip(true); });
  document.addEventListener("keydown", ev => { if (ev.key === "Escape" && !tip.hidden) hideTip(true); });
  FB.view.addEventListener("scroll", () => { if (!tip.hidden) hideTip(true); }, { passive: true });
  tip.addEventListener("click", ev => { if (ev.target.closest("a")) hideTip(true); });

  FB.routes.glossary = arg => {
    const list = GLOSS.slice().sort((a, b) => a.term.localeCompare(b.term, "en", { sensitivity: "base" }));
    const letters = [...new Set(list.map(g => g.term[0].toUpperCase()))];
    FB.showPage(`${pageHero("Glossary", "Key words", `Short, plain-English explanations of ${list.length} words that come up again and again in the stories. In the stories, words from this list are gently underlined: hover over or tap one to see what it means.`, null)}
      <div class="pg-body"><div class="wrap">
        <div class="pp-tools"><input type="search" id="gl-q" placeholder="Find a word…" aria-label="Find a word"><nav class="pp-letters notranslate">${letters.map(l => `<a href="#" data-l="${esc(l)}">${esc(l)}</a>`).join("")}</nav></div>
        <dl class="gl-list">${list.map(g => `<div class="gl-item" id="gl-${g.id}" data-l="${esc(g.term[0].toUpperCase())}" data-k="${esc((g.term + " " + (g.m || []).join(" ") + " " + g.d).toLowerCase())}"><dt>${esc(g.term)}</dt><dd>${esc(g.d)}</dd></div>`).join("")}</dl>
        <p class="pp-empty" hidden>No word matches that search.</p>
        <p class="pg-note">These definitions are simplified for a general audience. Many of these words have long and contested histories; the stories show how they were used in different times and places.</p>
      </div></div>`, "Glossary");
    const q = FB.vc.querySelector("#gl-q");
    q.oninput = () => { const t = q.value.trim().toLowerCase(); let k = 0; FB.vc.querySelectorAll(".gl-item").forEach(d => { const v = !t || d.dataset.k.includes(t); d.hidden = !v; if (v) k++; }); FB.vc.querySelector(".pp-empty").hidden = k > 0; };
    FB.vc.querySelectorAll(".pp-letters [data-l]").forEach(a => a.onclick = ev => { ev.preventDefault(); const d = [...FB.vc.querySelectorAll(".gl-item")].find(d => !d.hidden && d.dataset.l === a.dataset.l); if (d) FB.scrollToEl(d, 90); });
    if (arg && glById[arg]) setTimeout(() => { const d = FB.vc.querySelector("#gl-" + arg); if (d) { FB.scrollToEl(d, 120); d.classList.add("flash"); setTimeout(() => d.classList.remove("flash"), 1800); } }, 80);
    return true;
  };
  FB.routes.sources = () => {
    const withP = EVENTS.filter(e => e.primary && (MEDIA[e.primary.media] || e.primary.text)).sort((a, b) => (a.year || 0) - (b.year || 0));
    const withV = EVENTS.filter(e => e.voices && e.voices.length).sort((a, b) => (a.year || 0) - (b.year || 0));
    const group = k => /photo|daguerreotype/i.test(k) ? "photo" : /poster|notice|leaflet|flyer|pamphlet|newspaper|newsletter|petition|declaration|proclamation|manuscript|poem|ballad|cover|letter|document|charter|banner|placard|broadside|card|ticket|stamp|map|record|report|book$/i.test(k) ? "doc" : /engrav|print|cartoon|lithograph|painting|drawing|illustration|sketch|woodcut|mural|watercolour|etching/i.test(k) ? "pic" : "obj";
    const GROUPS = [["all", "All"], ["doc", "Documents and printed words"], ["photo", "Photographs"], ["pic", "Pictures and cartoons"], ["obj", "Objects and other"]];
    const pageUrlC = f => "https://commons.wikimedia.org/wiki/File:" + encodeURIComponent(String(f).replace(/ /g, "_"));
    const card = e => {
      const p = e.primary, m = MEDIA[p.media] || { cap: p.text ? p.text.from : p.kind, by: p.text && p.text.src ? p.text.src[0] : "" };
      return `<article class="ps-item${MEDIA[p.media] ? "" : " ps-item-text"}" data-g="${MEDIA[p.media] ? group(p.kind || "") : "doc"}" data-k="${esc(((m.cap || "") + " " + p.kind + " " + p.made + " " + e.title + " " + (e.country || "") + " " + (p.text ? p.text.t : "")).toLowerCase())}">
        ${MEDIA[p.media] ? `<a class="ps-pic" href="${pageUrlC(m.f)}" target="_blank" rel="noopener" title="View full size on Wikimedia Commons" style="${bg(p.media, 600)}"><span class="ps-zoom">View full size ↗</span></a>` : `<div class="ps-quote" aria-hidden="true">“</div>`}
        <div class="ps-txt">
          <small class="ps-kind">${esc(p.kind)} · ${esc(p.made)}</small>
          <h3>${esc(m.cap || p.kind)}</h3>
          ${p.text && !MEDIA[p.media] ? `<blockquote class="ps-doc ps-doc-sm"><p>${esc(p.text.t)}</p></blockquote>` : ""}
          <p>${esc(p.about || "")}</p>
          ${(p.questions || []).length ? `<details class="ps-q"><summary>Questions to ask</summary><ul>${p.questions.map(q => `<li>${esc(q)}</li>`).join("")}</ul></details>` : ""}
          <p class="ps-credit">${esc(m.by || "")}${m.lic ? ` · ${esc(m.lic)}` : ""}</p>
          <button type="button" class="ps-story" data-go="${e.id}"><span>The story</span><b>${esc(e.title)}</b><em>${esc(e.country || "")}${e.year ? " · " + yr(e.year) : ""} →</em></button>
        </div></article>`;
    };
    FB.showPage(`${pageHero(`<a href="#behind" class="bh-crumb">Behind the history</a> · Primary sources`, "Sources and voices", `Evidence made at the time — posters, petitions, photographs, pamphlets and prints — and the words of people who were there. ${withP.length} sources and ${withV.reduce((a, e) => a + e.voices.length, 0)} quotations so far.`, null)}
      <div class="pg-body"><div class="wrap">
        <p class="pg-note">A primary source was made at the time, by people involved or watching. It is evidence — but every source was made by someone, for a reason. Ask who made it, why, and who is missing. Each source below links to the full story it comes from.</p>
        <div class="ps-tools"><div class="ps-chips" role="group" aria-label="Type of source">${GROUPS.map(([g, l], i) => `<button type="button" class="chip${i ? "" : " on"}" data-g="${g}">${esc(l)}</button>`).join("")}</div>
          <input type="search" id="ps-q" placeholder="Search sources…" aria-label="Search sources"></div>
        <div class="ps-list" id="ps-list">${withP.map(card).join("")}</div>
        <p class="pp-empty ps-empty" hidden>No sources match.</p>
        <section class="pg-sec"><h2>In their own words</h2>
          <div class="voices">${withV.map(e => e.voices.map(v => `<figure><blockquote>${esc(v.q)}</blockquote><figcaption><b>${esc(v.who)}</b>${v.when ? ` · ${esc(v.when)}` : ""}<button type="button" class="ps-story ps-story-sm" data-go="${e.id}"><span>The story</span><b>${esc(e.title)}</b><em>${esc(e.country || "")}${e.year ? " · " + yr(e.year) : ""} →</em></button></figcaption></figure>`).join("")).join("")}</div></section>
      </div></div>`, "Sources and voices");
    let g = "all";
    const q = FB.vc.querySelector("#ps-q");
    const apply = () => {
      const t = q.value.trim().toLowerCase(); let n = 0;
      FB.vc.querySelectorAll(".ps-item").forEach(a => { const v = (g === "all" || a.dataset.g === g) && (!t || a.dataset.k.includes(t)); a.hidden = !v; if (v) n++; });
      FB.vc.querySelector(".ps-empty").hidden = n > 0;
    };
    q.oninput = apply;
    FB.vc.querySelectorAll(".ps-chips .chip").forEach(c => c.onclick = () => { g = c.dataset.g; FB.vc.querySelectorAll(".ps-chips .chip").forEach(x => x.classList.toggle("on", x === c)); apply(); });
    return true;
  };
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
      <div class="st-right">${e.checked ? `<span class="st-checked" title="${esc(e.checkNote || "")}">✓ Facts last checked ${esc(fmtDate(e.checked))}</span>` : ""}${report ? `<a class="st-report" href="${report}" target="_blank" rel="noopener">Report an error ↗</a>` : ""}</div>
    </div></div>`;
  };
  FB.hooks.voicesBox = e => !(e.voices && e.voices.length) ? "" : `<aside class="voices" aria-label="In their own words"><h3>In their own words</h3>${e.voices.map(v => `<figure><blockquote>${esc(v.q)}</blockquote><figcaption><b>${esc(v.who)}</b>${v.when ? ` · ${esc(v.when)}` : ""}${v.src ? FB.ref(v.src[0], v.src[1]) : ""}</figcaption></figure>`).join("")}</aside>`;
const docQuote = p => `<blockquote class="ps-doc"><p>${esc(p.text.t)}</p><cite>${esc(p.text.from || "")}${p.text.src ? FB.ref(p.text.src[0], p.text.src[1]) : ""}</cite></blockquote>`;
    FB.hooks.sourceBox = e => {
    const p = e.primary;
    if (p && p.text && !MEDIA[p.media]) {
      return `<div class="lookclose primary ps-textsrc"><h3>Primary source: ${esc(p.kind)}</h3>
      <div class="lc-grid">${docQuote(p)}
      <div><dl class="ps-facts"><div><dt>What is it?</dt><dd>${esc(p.kind)}</dd></div><div><dt>Made by, and when</dt><dd>${esc(p.made)}</dd></div></dl>
        <p class="ps-about">${esc(p.about)}</p>
        ${p.read ? `<h4>Reading it</h4><p class="ps-read">${esc(p.read)}</p>` : `<h4>Things worth asking</h4><ul class="ps-q">${p.questions.map(q => `<li>${esc(q)}</li>`).join("")}</ul>`}</div></div></div>`;
    }
    if (p && MEDIA[p.media]) {
      const m = MEDIA[p.media];
      return `<div class="lookclose primary"><h3>Primary source: ${esc(p.kind)}</h3>
      <div class="lc-grid"><figure><a href="${fileUrl(m.f)}" target="_blank" rel="noopener"><img loading="lazy" src="${fileUrl(m.f, 800)}" alt="${esc(m.cap)}" onerror="this.closest('figure').classList.add('noimg')"></a><figcaption>${esc(m.cap)} <span class="credit">${credit(m)}</span></figcaption></figure>
      <div><dl class="ps-facts"><div><dt>What is it?</dt><dd>${esc(p.kind)}</dd></div><div><dt>Made by, and when</dt><dd>${esc(p.made)}</dd></div></dl>
        <p class="ps-about">${esc(p.about)}</p>
        ${p.read ? `<h4>Reading it</h4><p class="ps-read">${esc(p.read)}</p>` : `<h4>Things worth asking</h4><ul class="ps-q">${p.questions.map(q => `<li>${esc(q)}</li>`).join("")}</ul>`}</div></div></div>`;
    }
    const key = e.hero && MEDIA[e.hero] ? e.hero : (e.gallery || []).find(k => MEDIA[k]);
    if (!key) return "";
    const m = MEDIA[key];
    return `<div class="lookclose"><h3>A picture as evidence</h3>
      <div class="lc-grid"><figure><img loading="lazy" src="${fileUrl(m.f, 700)}" alt="${esc(m.cap)}" onerror="this.closest('figure').classList.add('noimg')"><figcaption>${esc(m.cap)} <span class="credit">${credit(m)}</span></figcaption></figure>
      <p class="ps-read">Pictures are evidence too, but they need reading with care. The caption and credit say who made this one and when — at the time, or long afterwards? It may have been made to record, to persuade, to celebrate or to remember, and it shows events from someone's point of view. It is worth asking whose, and who is missing from the frame.</p></div></div>`;
  };
  function setMode(mode) {
    FB.view.classList.toggle("quick", mode === "quick");
    FB.vc.querySelectorAll(".st-mode button").forEach(b => b.setAttribute("aria-pressed", b.dataset.mode === mode));
    store.set("mode", mode);
  }

  /* ---------- print-friendly version of a story ---------- */
  function printStory(e) {
    const SEC = FB.SECTIONS.map(x => x[1]);
    const fnote = h => String(h || "").replace(/\[(\d+)\]/g, "\u0001s$1\u0002");
    const xr = []; const pref = (l, u) => { xr.push([l, u]); return `\u0001u${xr.length - 1}\u0002`; };
    const txt = h => String(h || "").replace(/<[^>]+>/g, "");
    const url = SITE.storyPages && SITE.url ? shareUrl(`/stories/${e.id}.html`) : shareUrl(`/#${e.id}`);
    const capOf = m => `${esc(m.cap)} <span class="cr">${txt(credit(m))}</span>`;
    const hm = MEDIA[e.hero];
    const sec = (n, body) => body ? `<section><h2><span>${n}</span> ${esc(SEC[n - 1])}</h2>${body}</section>` : "";
    const voices = (e.voices || []).length ? `<div class="voices"><h3>In their own words</h3>${e.voices.map(v => `<blockquote>“${esc(v.q)}”<cite>${esc(v.who)}${v.when ? `, ${esc(v.when)}` : ""}${v.src ? pref(v.src[0], v.src[1]) : ""}</cite></blockquote>`).join("")}</div>` : "";
    const p = e.primary, pm = p && MEDIA[p.media];
    const primary = (pm || (p && p.text)) ? `<div class="box"><h3>Primary source: ${esc(p.kind)}</h3>${pm ? `<figure class="pfig"><img src="${fileUrl(pm.f, 600)}" alt=""><figcaption>${capOf(pm)}</figcaption></figure>` : `<blockquote><p>${esc(p.text.t)}</p><p><i>${esc(p.text.from || "")}</i></p></blockquote>`}<p><b>Made by, and when:</b> ${esc(p.made)}</p><p>${esc(p.about)}</p>${p.read ? `<p>${esc(p.read)}</p>` : `<p><b>Things worth asking</b></p><ul>${p.questions.map(q => `<li>${esc(q)}</li>`).join("")}</ul>`}</div>` : "";
    const og = e.ongoing ? `<div class="box og"><h3>Ongoing situation (last reviewed ${esc(e.ongoing.asOf)})</h3>${fnote(e.ongoing.text)}${(e.ongoing.watch || []).length ? `<p><b>Still unresolved:</b></p><ul>${e.ongoing.watch.map(w => `<li>${w}</li>`).join("")}</ul>` : ""}<p class="small">This is recent history. Accounts, casualty figures and outcomes may change as more evidence emerges.</p></div>` : "";
    const similar = (e.similar || []).map(x => x.id && byId[x.id] ? `<li>${esc(byId[x.id].title)} (${yr(byId[x.id].year)})</li>` : x.name ? `<li>${esc(x.name)}${x.url ? ` — <span class="u">${esc(x.url)}</span>` : ""}</li>` : "").join("");
    const more = (e.more || []).map(([t, l, u]) => `<li>${esc(l)}${u ? ` — <span class="u">${esc(u)}</span>` : ""}</li>`).join("");
    const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
    const doc = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>${esc(e.title)} — From Below (print version)</title>
<style>
  @page{margin:18mm 16mm}
  body{font-family:Georgia,"Times New Roman",serif;color:#111;max-width:720px;margin:24px auto;padding:0 18px;font-size:11.5pt;line-height:1.5}
  .bar{font-family:Arial,sans-serif;display:flex;gap:10px;align-items:center;justify-content:space-between;border:1px solid #ccc;border-radius:8px;padding:10px 14px;margin-bottom:22px;font-size:10pt}
  .bar button{font:inherit;font-weight:bold;background:#B5432F;color:#fff;border:0;border-radius:6px;padding:7px 14px;cursor:pointer}
  .kicker{font-family:Arial,sans-serif;font-size:8.5pt;letter-spacing:.12em;text-transform:uppercase;color:#555;margin:0 0 6px}
  h1{font-family:Arial,sans-serif;font-size:24pt;line-height:1.1;margin:0 0 8px}
  .teaser{font-size:13pt;font-style:italic;margin:0 0 12px}
  .facts{font-family:Arial,sans-serif;font-size:9.5pt;color:#333;border-top:1px solid #999;border-bottom:1px solid #999;padding:6px 0;margin:0 0 14px}
  h2{font-family:Arial,sans-serif;font-size:13.5pt;margin:20px 0 6px;border-bottom:1px solid #ddd;padding-bottom:3px;break-after:avoid}
  h2 span{color:#B5432F}
  h3{font-family:Arial,sans-serif;font-size:11pt;margin:12px 0 6px}
  figure{margin:0 0 14px;break-inside:avoid}
  figure img{max-width:100%;max-height:240px;display:block}
  .pfig img{max-height:200px}
  figcaption{font-family:Arial,sans-serif;font-size:8.5pt;color:#444;margin-top:4px}
  .cr{color:#777}
  ul,ol{padding-left:22px;margin:6px 0 10px}
  li{margin:0 0 4px}
  dl{margin:0}dt{font-weight:bold;margin-top:6px}dd{margin:0 0 4px 0}
  blockquote{margin:8px 0 10px;padding-left:12px;border-left:3px solid #B5432F;font-style:italic}
  cite{display:block;font-style:normal;font-family:Arial,sans-serif;font-size:8.5pt;color:#444;margin-top:3px}
  .box{border:1px solid #bbb;border-radius:6px;padding:8px 14px;margin:12px 0;break-inside:avoid}
  .og{background:#FFF8E6}
  sup{font-size:7pt;color:#B5432F}
  .src li,.u{font-size:9pt;word-break:break-all}
  .src .u{color:#333}
  .small,footer{font-family:Arial,sans-serif;font-size:8.5pt;color:#555}
  footer{border-top:1px solid #999;margin-top:24px;padding-top:8px}
  @media print{.bar{display:none}body{margin:0;max-width:none}}
</style></head><body>
<div class="bar"><span>Print-friendly version. Use your browser's print dialog to print or save as PDF.</span><button onclick="window.print()">Print / Save as PDF</button></div>
<p class="kicker">From Below · an atlas of radical history · ${esc(THEMES[e.theme] || "")}${e.ongoing ? " · Recent history" : ""}</p>
<h1>${esc(e.title)}</h1>
<p class="teaser">${esc(e.teaser)}</p>
<p class="facts"><b>When:</b> ${esc(e.date)} &nbsp;·&nbsp; <b>Where:</b> ${esc(e.place)}${e.checked ? ` &nbsp;·&nbsp; <b>Facts last checked:</b> ${esc(fmtDate(e.checked))}` : ""}</p>
${hm ? `<figure><img src="${fileUrl(hm.f, 900)}" alt=""><figcaption>${capOf(hm)}</figcaption></figure>` : ""}
${og}
${sec(1, fnote(e.background))}
${sec(2, `<dl>${(e.people || []).map(x => `<dt>${x.n}</dt><dd>${x.r}</dd>`).join("")}</dl>${voices}`)}
${sec(3, fnote(e.happened))}
${sec(4, fnote(e.next))}
${sec(5, fnote(e.debates))}
${sec(6, fnote(e.evidence) + primary)}
${sec(7, fnote(e.memory))}
${sec(8, fnote(e.why))}
${(e.questions || []).length ? `<div class="box"><h3>Open questions</h3><ol>${e.questions.map(q => `<li>${q}</li>`).join("")}</ol></div>` : ""}
${sec(9, similar ? `<ul>${similar}</ul>` : "")}
${sec(10, more ? `<ul>${more}</ul>` : "")}
<section><h2>References</h2>\u0003REFS\u0003</section>
<footer>Printed from <b>From Below</b> on ${today}. Online version: ${esc(url)}<br>Text licensed CC BY-SA 4.0. Images from Wikimedia Commons; credits are given in each caption.</footer>
</body></html>`;
    const pmap = new Map(), pord = [];
    let pdoc = doc.replace(/\u0001([su]\d+)\u0002/g, (m, k) => { if (k[0] === "s" && !(e.sources || [])[+k.slice(1) - 1]) return ""; if (!pmap.has(k)) { pmap.set(k, pord.length + 1); pord.push(k); } return `<sup>${pmap.get(k)}</sup>`; });
    (e.sources || []).forEach((_, j) => { const k = "s" + (j + 1); if (!pmap.has(k)) { pmap.set(k, pord.length + 1); pord.push(k); } });
    pdoc = pdoc.replace("\u0003REFS\u0003", `<ol class="src">${pord.map(k => k[0] === "s" ? e.sources[+k.slice(1) - 1] : xr[+k.slice(1)]).map(([t, u]) => `<li>${txt(t)}${u ? `<br><span class="u">${esc(u)}</span>` : ""}</li>`).join("")}</ol>`);
    const fire = win => {
      const go2 = () => { try { win.focus(); win.print(); } catch (_) { } };
      const imgs = [...win.document.images]; let left = imgs.length;
      if (!left) return setTimeout(go2, 200);
      const done = () => { if (--left <= 0) setTimeout(go2, 150); };
      imgs.forEach(im => { if (im.complete) done(); else { im.onload = im.onerror = done; } });
      setTimeout(go2, 4000);
    };
    let w = null; try { w = window.open("", "_blank"); } catch (_) { }
    if (w && w.document) { w.document.open(); w.document.write(pdoc); w.document.close(); let fired = false; const f = () => { if (!fired) { fired = true; fire(w); } }; w.onload = f; setTimeout(f, 600); return; }
    // pop-ups blocked: print from a hidden frame instead
    const fr = document.createElement("iframe"); fr.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0";
    document.body.appendChild(fr); fr.contentDocument.open(); fr.contentDocument.write(pdoc); fr.contentDocument.close();
    fire(fr.contentWindow); setTimeout(() => fr.remove(), 60000);
  }
  FB.hooks.afterStory = (e, vc) => {
    markGlossary(vc);
    setMode(store.get("mode") || "full");
    vc.querySelectorAll(".st-mode button").forEach(b => b.onclick = () => { setMode(b.dataset.mode); stopSpeech(); });
    vc.querySelector(".st-print").onclick = () => printStory(e);
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
