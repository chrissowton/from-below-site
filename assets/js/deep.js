/* From Below — Deep dives: a detailed map of one country or conflict, with many short sourced incidents and a time slider.
   Data: window.DEEP[id] (data/deep-*.js). Uses the toolkit in window.FB. Plain JavaScript, no build step. */
(function () {
  "use strict";
  const FB = window.FB; if (!FB || !window.d3 || !window.topojson) return;
  const DEEP = window.DEEP || {};
  const { byId, MEDIA, esc, fileUrl, credit, go } = FB;
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let timer = null;
  const stop = () => { if (timer) { clearInterval(timer); timer = null; } const b = document.getElementById("dp-play"); if (b) { b.textContent = "▶ Play"; b.setAttribute("aria-pressed", "false"); } };

  const monthKey = d => d.slice(0, 7);
  const yearMode = D => D.step === "year";
  const keyOf = (D, d) => yearMode(D) ? d.slice(0, 4) : d.slice(0, 7);
  function steps(D) {
    const out = [];
    if (yearMode(D)) { for (let y = +D.start; y <= +D.end; y++) out.push({ key: String(y), label: String(y) }); }
    else { let [y, m] = D.start.split("-").map(Number); const [ey, em] = D.end.split("-").map(Number);
      while (y < ey || (y === ey && m <= em)) { out.push({ key: `${y}-${String(m).padStart(2, "0")}`, label: `${MONTHS[m - 1]} ${y}` }); m++; if (m > 12) { m = 1; y++; } } }
    if (D.incidents.some(i => keyOf(D, i.d) > D.end)) out.push({ key: "after", label: D.afterLabel || "After the war" });
    if (D.incidents.some(i => keyOf(D, i.d) < D.start)) out.unshift({ key: "before", label: D.beforeLabel || "Before" });
    return out;
  }
  const stepOf = (D, st, inc) => { const k = keyOf(D, inc.d); if (k > D.end) return st.length - 1; if (k < D.start) return 0; const i = st.findIndex(s => s.key === k); return i < 0 ? 0 : i; };
  const fig = (k, w, cls = "") => { const m = MEDIA[k]; if (!m) return ""; return `<figure class="dp-fig ${cls}"><a href="${fileUrl(m.f)}" target="_blank" rel="noopener"><img loading="lazy" src="${fileUrl(m.f, w)}" alt="${esc(m.cap)}"></a><figcaption>${esc(m.cap)} <span class="credit">${credit(m)}</span></figcaption></figure>`; };
  const srcLinks = s => (s || []).map(([l, u]) => u ? `<a href="${u}" target="_blank" rel="noopener">${esc(l)} ↗</a>` : esc(l)).join(" · ");

  function card(D, inc) {
    const T = D.types[inc.type] || {};
    return `<div class="dp-card-in">
      <div class="dp-card-meta"><span class="dp-dot" style="background:${T.colour}"></span>${esc(T.label || "")}</div>
      <h3>${esc(inc.title)}</h3>
      <p class="dp-when"><b class="notranslate">${esc(inc.when)}</b> · ${esc(inc.place)}</p>
      ${inc.img ? fig(inc.img, 640) : ""}
      <p>${inc.text}</p>
      <p class="dp-src"><b>Source:</b> ${srcLinks(inc.src)}</p>
      ${inc.story && byId[inc.story] ? `<button type="button" class="btn-play" data-go="${inc.story}">Read the full story →</button>` : ""}
    </div>`;
  }

  /* ---------- time scale: dates to positions on a continuous timeline ---------- */
  const tnum = d => { const [y, m = 1, dd = 1] = String(d).split("-").map(Number); return y + (m - 1) / 12 + (dd - 1) / 365; };
  function scale(D, incs) {
    const s0 = yearMode(D) ? +D.start : tnum(D.start + "-01"), s1 = yearMode(D) ? +D.end + 1 : tnum(D.end + "-01") + 1 / 12;
    const before = incs.filter(i => tnum(i.d) < s0), after = incs.filter(i => tnum(i.d) >= s1);
    const L = before.length ? 0.08 : 0, R = after.length ? 0.92 : 1;
    const pos = new Map();
    before.forEach((i, k) => pos.set(i.id, (k + 1) / (before.length + 1) * L));
    after.forEach((i, k) => pos.set(i.id, R + (k + 1) / (after.length + 1) * (1 - R)));
    incs.forEach(i => { if (!pos.has(i.id)) pos.set(i.id, L + (tnum(i.d) - s0) / (s1 - s0) * (R - L)); });
    const label = f => {
      if (f < L) return D.beforeLabel || "Before";
      if (f > R) return D.afterLabel || "Afterwards";
      const t = s0 + (f - L) / (R - L || 1) * (s1 - s0), y = Math.floor(t);
      return yearMode(D) ? String(Math.min(y, +D.end)) : `${MONTHS[Math.min(11, Math.floor((t - y) * 12))]} ${y}`;
    };
    const ticks = [];
    const span = Math.ceil(s1 - s0), every = [1, 2, 5, 10, 20, 25, 50].find(e => span / e <= 10) || 50;
    for (let y = Math.ceil(s0 / every) * every; y < s1; y += every) { const f = L + (y - s0) / (s1 - s0) * (R - L); if (f - L > 0.07 && R - f > 0.07) ticks.push({ f, t: String(y) }); }
    return { pos, label, ticks, L, R, startLabel: yearMode(D) ? D.start : label(L + 1e-6), endLabel: yearMode(D) ? D.end : label(R - 1e-6) };
  }

  FB.routes.deep = id => {
    const D = DEEP[id]; if (!D) return false;
    stop();
    const incs = D.incidents.slice().sort((a, b) => a.d.localeCompare(b.d));
    const num = new Map(incs.map((i, k) => [i.id, k + 1]));
    const types = Object.entries(D.types).filter(([k]) => incs.some(i => i.type === k));
    const colour = i => (D.types[i.type] || {}).colour || "#333";
    const S = scale(D, incs);
    const hero = D.hero && MEDIA[D.hero] ? `style="--hero:url('${fileUrl(MEDIA[D.hero].f, 1400)}')"` : "";
    const others = Object.values(DEEP).filter(x => x.id !== D.id);
    const story = D.story && byId[D.story];
    // rows on the timeline so that dots do not overlap
    const rowsEnd = [], row = new Map();
    incs.slice().sort((a, b) => S.pos.get(a.id) - S.pos.get(b.id)).forEach(i => {
      const x = S.pos.get(i.id); let r = rowsEnd.findIndex(e => x - e >= 0.026); if (r < 0) { r = rowsEnd.length; rowsEnd.push(-1); }
      rowsEnd[r] = x; row.set(i.id, r);
    });
    const nRows = Math.max(1, rowsEnd.length);
    const howto = `Press <b>▶ Play</b> to watch events appear in order, or drag along the timeline. Each numbered point on the map matches a dot on the timeline and a card in the list below — select any of them to read what happened. Use the coloured buttons to show or hide types of event.`;

    FB.showPage(`
      <header class="pg-hero dp-hero" ${hero}><div class="wrap">
        <div class="eyebrow">Deep dive · ${esc(D.years)} · ${incs.length} events</div><h1 id="s-title">${esc(D.title)}</h1><p class="teaser">${esc(D.teaser)}</p>
      </div></header>
      <div class="pg-body dp-body"><div class="wrap">
        <section class="dp-top" aria-label="Map and introduction">
          <div class="dp-side">
            <div id="dp-introPane">
              <div class="dp-about prose">${D.intro}</div>
              ${story ? `<button type="button" class="btn-play dp-storybtn" data-go="${D.story}">Read the full story: ${esc(story.title)} →</button>` : ""}
              <details class="dp-box" open><summary>How to use this map</summary><p>${howto}</p></details>
              <details class="dp-box"><summary>A note on the figures</summary><p>${esc(D.balance || "Figures are given as ranges, with who produced them, where they are disputed.")}</p></details>
            </div>
            <div class="dp-card" id="dp-card" hidden aria-live="polite"></div>
          </div>
          <div class="dp-mapcol">
            <div class="dp-legend" role="group" aria-label="Show or hide types of event">${types.map(([k, t]) => `<button type="button" class="dp-chip on" data-type="${k}" aria-pressed="true"><span class="dp-dot" style="background:${t.colour}"></span>${esc(t.label)}</button>`).join("")}</div>
            <div class="dp-map" id="dp-map"></div>
            <section class="dp-tl" aria-label="Timeline">
          <div class="dp-tl-head">
            <button type="button" class="btn-play" id="dp-play" aria-pressed="false">▶ Play</button>
            <output id="dp-label" class="dp-label notranslate"></output>
            <span class="dp-count" id="dp-count"></span>
          </div>
          <div class="dp-tl-track" id="dp-track" style="--rows:${nRows}">
            ${S.L ? `<span class="dp-zone" style="left:0;width:${S.L * 100}%">${esc(D.beforeLabel || "Before")}</span>` : ""}
            ${S.R < 1 ? `<span class="dp-zone" style="left:${S.R * 100}%;width:${(1 - S.R) * 100}%">${esc(D.afterLabel || "Afterwards")}</span>` : ""}
            <div class="dp-axis" style="left:${S.L * 100}%;right:${(1 - S.R) * 100}%"></div>
            <span class="dp-end dp-end-l" style="left:${S.L * 100}%">${esc(S.startLabel)}</span>
            <span class="dp-end dp-end-r" style="right:${(1 - S.R) * 100}%">${esc(S.endLabel)}</span>
            ${S.ticks.map(t => `<span class="dp-tick" style="left:${t.f * 100}%">${esc(t.t)}</span>`).join("")}
            <div class="dp-fill" id="dp-fill"></div>
            <div class="dp-head" id="dp-head"></div>
            ${incs.map(i => `<button type="button" class="dp-tdot" data-i="${i.id}" style="left:${S.pos.get(i.id) * 100}%;--r:${row.get(i.id)};background:${colour(i)}" title="${esc(i.when)} — ${esc(i.title)}" aria-label="${num.get(i.id)}. ${esc(i.title)}, ${esc(i.when)}">${num.get(i.id)}</button>`).join("")}
            <input type="range" id="dp-range" min="0" max="1000" value="1000" step="1" aria-label="Move through time">
          </div>
        </section>
          </div>
        </section>

        <section class="pg-sec"><h2>All events</h2>
          <div class="dp-masonry">${incs.map(i => `<article class="dp-item" id="dpi-${i.id}">
            ${i.img && MEDIA[i.img] ? fig(i.img, 640) : ""}
            <div class="dp-item-in">
              <div class="dp-item-head"><span class="dp-num" style="background:${colour(i)}">${num.get(i.id)}</span><small class="notranslate">${esc(i.when)} · ${esc(i.place)}</small></div>
              <h4>${esc(i.title)}</h4>
              <p>${i.text}</p>
              <p class="dp-src"><b>Source:</b> ${srcLinks(i.src)}</p>
              <div class="ex-btns"><button type="button" class="btn-ghost" data-show-inc="${i.id}">Show on the map</button>${i.story && byId[i.story] ? `<button type="button" class="btn-ghost" data-go="${i.story}">Full story →</button>` : ""}</div>
            </div></article>`).join("")}</div>
        </section>
        ${D.phaseMap && MEDIA[D.phaseMap.media] ? `<section class="pg-sec dp-phase"><h2>${esc(D.phaseMap.title || "Who controlled what")}</h2><p>${esc(D.phaseMap.note)}</p>${fig(D.phaseMap.media, 1100, "wide")}</section>` : ""}
        ${D.memoryNote ? `<section class="pg-sec"><h2>How it is remembered</h2><div class="prose">${D.memoryNote}</div></section>` : ""}
        ${D.ukNote ? `<section class="pg-sec"><h2>${esc(D.linkHead || "The British and Irish connection")}</h2><div class="prose">${D.ukNote}</div><div class="dp-uk">${(D.ukMedia || []).map(k => fig(k, 600)).join("")}</div></section>` : ""}
        <div class="sources"><h3>Sources</h3><ol>${(D.sources || []).map(([t, u]) => `<li>${esc(t)}${u ? ` <a href="${u}" target="_blank" rel="noopener">Link ↗</a>` : ""}</li>`).join("")}</ol><p class="dp-note">Each event also lists its own source.</p></div>
        ${others.length ? `<section class="pg-sec"><h2>Other deep dives</h2><div class="pg-others">${others.map(o => `<button type="button" class="pg-other" data-go="deep/${o.id}"><small>${esc(o.years)}</small><b>${esc(o.title)}</b></button>`).join("")}</div></section>` : ""}
      </div></div>`, D.title);

    /* ---- map ---- */
    const box = document.getElementById("dp-map");
    const W = 900, R = D.region;
    const frame = { type: "MultiPoint", coordinates: [[R.lon[0], R.lat[0]], [R.lon[1], R.lat[1]], [R.lon[0], R.lat[1]], [R.lon[1], R.lat[0]]] };
    const proj = d3.geoMercator().fitWidth(W, frame);
    const path = d3.geoPath(proj);
    const H = Math.round(proj([R.lon[0], R.lat[0]])[1]);
    const svg = d3.select(box).append("svg").attr("viewBox", `0 0 ${W} ${H}`).attr("role", "img").attr("aria-label", `Map: ${D.title}`);
    svg.append("rect").attr("width", W).attr("height", H).attr("class", "dp-sea");
    if (window.WORLD) svg.append("g").selectAll("path").data(topojson.feature(window.WORLD, window.WORLD.objects.countries).features).join("path").attr("d", path).attr("class", "dp-other");
    const topo = window[R.topo];
    if (topo) {
      const feats = topojson.feature(topo, topo.objects[R.object]).features.filter(f => !(R.skip || []).includes(f.properties.name));
      svg.append("g").selectAll("path").data(feats).join("path").attr("d", path).attr("class", f => R.focus && f.properties.name !== R.focus ? "dp-other dp-nb" : "dp-prov").append("title").text(f => f.properties.name);
    }
    if (R.labels) svg.append("g").attr("class", "dp-lbls").selectAll("text").data(R.labels).join("text").attr("x", l => proj([l.lon, l.lat])[0]).attr("y", l => proj([l.lon, l.lat])[1]).attr("class", l => "dp-lbl" + (l.sea ? " sea" : "")).text(l => l.t);
    // spread out points that would sit on top of each other (e.g. several events in one city)
    const pos = new Map(), clusters = [];
    incs.forEach(i => { const p = proj([i.lon, i.lat]); const c = clusters.find(c => Math.hypot(c.x - p[0], c.y - p[1]) < 34); if (c) c.items.push(i); else clusters.push({ x: p[0], y: p[1], items: [i] }); });
    clusters.forEach(c => c.items.forEach((i, k) => {
      if (c.items.length === 1) { pos.set(i.id, [c.x, c.y]); return; }
      const a = -Math.PI / 2 + 2 * Math.PI * k / c.items.length, r = Math.max(30, 8.5 * c.items.length);
      pos.set(i.id, [c.x + r * Math.cos(a), c.y + r * Math.sin(a)]);
    }));
    // relax: push apart any points that still overlap (e.g. neighbouring clusters)
    const pts = incs.map(i => ({ id: i.id, p: pos.get(i.id) }));
    for (let it = 0; it < 80; it++) {
      let moved = false;
      for (let a = 0; a < pts.length; a++) for (let b = a + 1; b < pts.length; b++) {
        const A = pts[a].p, B = pts[b].p, dx = B[0] - A[0], dy = B[1] - A[1], d = Math.hypot(dx, dy) || 0.01, min = 29;
        if (d < min) { const k = (min - d) / 2 / d; A[0] -= dx * k; A[1] -= dy * k; B[0] += dx * k; B[1] += dy * k; moved = true; }
      }
      if (!moved) break;
    }
    pts.forEach(o => { o.p[0] = Math.max(14, Math.min(W - 14, o.p[0])); o.p[1] = Math.max(14, Math.min(H - 14, o.p[1])); });
    const gl = svg.append("g").attr("class", "dp-leaders");
    clusters.filter(c => c.items.length > 1).forEach(c => { gl.append("circle").attr("cx", c.x).attr("cy", c.y).attr("r", 3).attr("class", "dp-hub"); c.items.forEach(i => gl.append("line").attr("x1", c.x).attr("y1", c.y).attr("x2", pos.get(i.id)[0]).attr("y2", pos.get(i.id)[1]).attr("class", "dp-leader").attr("data-i", i.id)); });
    const gm = svg.append("g").attr("class", "dp-marks");
    const marks = gm.selectAll("g").data(incs).join("g").attr("class", "dp-mark")
      .attr("transform", i => `translate(${pos.get(i.id)})`)
      .attr("tabindex", 0).attr("role", "button").attr("aria-label", i => `${num.get(i.id)}. ${i.title}, ${i.when}`);
    marks.append("circle").attr("class", "dp-ring").attr("r", 18);
    marks.append("circle").attr("class", "dp-pt").attr("r", 13).attr("fill", colour);
    marks.append("text").attr("class", "dp-n").attr("dy", "0.36em").text(i => num.get(i.id));
    marks.append("title").text(i => `${num.get(i.id)}. ${i.title} — ${i.when}`);

    const cardEl = document.getElementById("dp-card"), introEl = document.getElementById("dp-introPane");
    const range = document.getElementById("dp-range"), label = document.getElementById("dp-label"), count = document.getElementById("dp-count");
    const fill = document.getElementById("dp-fill"), headEl = document.getElementById("dp-head");
    const tdots = [...document.querySelectorAll(".dp-tdot")];
    const on = new Set(types.map(([k]) => k)); let sel = null, shown = new Set(incs.map(i => i.id)), first = true;
    function select(inc, scroll) {
      sel = inc ? inc.id : null;
      marks.classed("sel", i => i.id === sel);
      tdots.forEach(b => b.classList.toggle("sel", b.dataset.i === sel));
      if (!inc) { cardEl.hidden = true; introEl.hidden = false; return; }
      const T = D.types[inc.type] || {}, n = num.get(inc.id), k = incs.indexOf(inc);
      cardEl.innerHTML = `<div class="dp-card-in">
        <div class="dp-card-nav"><button type="button" class="dp-x" data-nav="intro">← Introduction</button><span><button type="button" data-nav="${k - 1}" ${k ? "" : "disabled"} aria-label="Previous event">‹</button><b>${n} of ${incs.length}</b><button type="button" data-nav="${k + 1}" ${k < incs.length - 1 ? "" : "disabled"} aria-label="Next event">›</button></span></div>
        <div class="dp-card-meta"><span class="dp-num" style="background:${T.colour}">${n}</span>${esc(T.label || "")}</div>
        <h3>${esc(inc.title)}</h3>
        <p class="dp-when"><b class="notranslate">${esc(inc.when)}</b> · ${esc(inc.place)}</p>
        ${inc.img ? fig(inc.img, 640) : ""}
        <p>${inc.text}</p>
        <p class="dp-src"><b>Source:</b> ${srcLinks(inc.src)}</p>
        ${inc.story && byId[inc.story] ? `<button type="button" class="btn-play" data-go="${inc.story}">Read the full story →</button>` : ""}
      </div>`;
      introEl.hidden = true; cardEl.hidden = false;
      cardEl.querySelectorAll("[data-go]").forEach(b => b.onclick = () => go(b.dataset.go));
      cardEl.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => { stop(); if (b.dataset.nav === "intro") return select(null); const j = incs[+b.dataset.nav]; if (j) { reveal(j); select(j); } });
      if (scroll) document.querySelector(".dp-top").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function spark(i) {
      const g = marks.filter(d => d.id === i.id);
      g.append("circle").attr("class", "dp-spark").attr("r", 13).attr("stroke", colour(i)).on("animationend", function () { this.remove(); });
      const b = tdots.find(x => x.dataset.i === i.id); if (b) { b.classList.remove("spark"); void b.offsetWidth; b.classList.add("spark"); }
    }
    function update() {
      const f = +range.value / 1000, prev = shown; shown = new Set(); let n = 0;
      label.value = label.textContent = f >= 0.999 ? (S.R < 1 ? (D.afterLabel || "Afterwards") : S.endLabel) : S.label(f);
      fill.style.width = headEl.style.left = (f * 100) + "%";
      marks.each(function (i) {
        const vis = S.pos.get(i.id) <= f + 1e-9 && on.has(i.type);
        if (vis) { n++; shown.add(i.id); }
        d3.select(this).classed("hide", !vis).attr("tabindex", vis ? 0 : -1).attr("aria-hidden", vis ? null : "true");
      });
      tdots.forEach(b => { const i = incs.find(x => x.id === b.dataset.i); b.classList.toggle("future", S.pos.get(i.id) > f + 1e-9); b.classList.toggle("off", !on.has(i.type)); });
      gl.selectAll("line").style("display", function () { return shown.has(this.dataset.i) ? null : "none"; });
      count.textContent = `${n} of ${incs.length} events shown`;
      const fresh = first ? [] : incs.filter(i => shown.has(i.id) && !prev.has(i.id));
      first = false;
      fresh.forEach(spark);
      return fresh;
    }
    function reveal(i) { const f = S.pos.get(i.id); if (+range.value / 1000 < f) { range.value = Math.ceil(f * 1000); update(); } on.add(i.type); document.querySelectorAll(`.dp-chip[data-type="${i.type}"]`).forEach(c => { c.classList.add("on"); c.setAttribute("aria-pressed", "true"); }); update(); }
    marks.on("click", (ev, i) => { stop(); select(i); }).on("keydown", (ev, i) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); stop(); select(i); } });
    tdots.forEach(b => b.onclick = () => { stop(); const i = incs.find(x => x.id === b.dataset.i); reveal(i); select(i); });
    range.oninput = () => { stop(); update(); };
    document.querySelectorAll(".dp-chip").forEach(b => b.onclick = () => {
      const k = b.dataset.type; if (on.has(k)) on.delete(k); else on.add(k);
      b.classList.toggle("on", on.has(k)); b.setAttribute("aria-pressed", on.has(k)); update();
    });
    const dur = Math.min(40000, Math.max(16000, incs.length * 1300));
    document.getElementById("dp-play").onclick = ev => {
      if (timer) { stop(); return; }
      const b = ev.currentTarget; b.textContent = "■ Pause"; b.setAttribute("aria-pressed", "true");
      if (+range.value >= 1000) { range.value = 0; update(); select(null); }
      const step = 1000 * 80 / dur;
      timer = setInterval(() => {
        const v = Math.min(1000, +range.value + step); range.value = v;
        const fresh = update().filter(i => on.has(i.type));
        if (fresh.length) select(fresh[fresh.length - 1]);
        if (v >= 1000) stop();
      }, 80);
    };
    FB.vc.querySelectorAll("[data-show-inc]").forEach(b => b.onclick = () => {
      const inc = incs.find(i => i.id === b.dataset.showInc); if (!inc) return;
      stop(); reveal(inc); select(inc, true);
    });
    update();
    return true;
  };

  /* banner on stories that have a deep dive */
  const prevBanner = FB.hooks.storyBanner;
  FB.hooks.storyBanner = e => {
    const base = prevBanner ? prevBanner(e) : "";
    const D = e.deep && DEEP[e.deep]; if (!D) return base;
    return base + `<div class="dp-banner"><div class="wrap"><div><small>Deep dive</small><b>Explore ${esc(D.title)} on a detailed map</b><p>${D.incidents.length} numbered events on a map and timeline, with sources.</p></div><button type="button" class="btn-play" data-go="deep/${D.id}">Open the map →</button></div></div>`;
  };
  const prevAfter = FB.hooks.afterStory;
  FB.hooks.afterStory = (e, vc) => { if (prevAfter) prevAfter(e, vc); vc.querySelectorAll(".dp-banner [data-go]").forEach(b => b.onclick = () => go(b.dataset.go)); };
  const prevLeave = FB.hooks.leaveView;
  FB.hooks.leaveView = () => { stop(); if (prevLeave) prevLeave(); };

  /* Explore section card */
  const ex = document.getElementById("ex-deep");
  if (ex) ex.innerHTML = Object.values(DEEP).map(D => {
    const h = D.hero && MEDIA[D.hero];
    return `<article class="ex-card dp-excard">
      <div class="ex-img" style="${h ? `background-image:url('${fileUrl(h.f, 600)}')` : ""}"><span class="mo-yrs notranslate">${esc(D.years)}</span></div>
      <div class="ex-body"><h3>${esc(D.title)}</h3><p>${esc(D.teaser)}</p>
        <div class="ex-btns"><button type="button" class="btn-play" data-go="deep/${D.id}">Open the map · ${D.incidents.length} events</button></div></div>
    </article>`;
  }).join("");
  if (ex) ex.querySelectorAll("[data-go]").forEach(b => b.onclick = () => go(b.dataset.go));
})();
