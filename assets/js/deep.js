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
  function steps(D) {
    const out = []; let [y, m] = D.start.split("-").map(Number); const [ey, em] = D.end.split("-").map(Number);
    while (y < ey || (y === ey && m <= em)) { out.push({ key: `${y}-${String(m).padStart(2, "0")}`, label: `${MONTHS[m - 1]} ${y}` }); m++; if (m > 12) { m = 1; y++; } }
    if (D.incidents.some(i => monthKey(i.d) > D.end)) out.push({ key: "after", label: "After the war" });
    return out;
  }
  const stepOf = (D, st, inc) => { const k = monthKey(inc.d); if (k > D.end) return st.length - 1; const i = st.findIndex(s => s.key === k); return i < 0 ? 0 : i; };
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

  FB.routes.deep = id => {
    const D = DEEP[id]; if (!D) return false;
    stop();
    const st = steps(D), incs = D.incidents.slice().sort((a, b) => a.d.localeCompare(b.d));
    const types = Object.entries(D.types).filter(([k]) => incs.some(i => i.type === k));
    const hero = D.hero && MEDIA[D.hero] ? `style="--hero:url('${fileUrl(MEDIA[D.hero].f, 1400)}')"` : "";
    const byYear = {}; incs.forEach(i => { const y = monthKey(i.d) > D.end ? "Afterwards" : i.d.slice(0, 4); (byYear[y] = byYear[y] || []).push(i); });
    const others = Object.values(DEEP).filter(x => x.id !== D.id);
    FB.showPage(`
      <header class="pg-hero" ${hero}><div class="wrap">
        <div class="eyebrow">Deep dive · ${esc(D.years)}</div><h1 id="s-title">${esc(D.title)}</h1><p class="teaser">${esc(D.teaser)}</p>
        ${D.story && byId[D.story] ? `<div class="pg-btns"><button type="button" class="btn-play big" data-go="${D.story}">Read the full story</button></div>` : ""}
      </div></header>
      <div class="pg-body"><div class="wrap">
        <div class="dp-intro prose">${D.intro}</div>
        <p class="dp-balance">${esc(D.balance || "")}</p>
        <section class="dp-mapwrap" aria-label="Map of incidents">
          <div class="dp-controls">
            <button type="button" class="btn-play" id="dp-play" aria-pressed="false">▶ Play</button>
            <label class="dp-range"><span class="sr">Month</span><input type="range" id="dp-range" min="0" max="${st.length - 1}" value="${st.length - 1}" step="1"></label>
            <output id="dp-label" class="dp-label notranslate">${esc(st[st.length - 1].label)}</output>
          </div>
          <div class="dp-legend" role="group" aria-label="Show or hide types of incident">${types.map(([k, t]) => `<button type="button" class="dp-chip on" data-type="${k}" aria-pressed="true"><span class="dp-dot" style="background:${t.colour}"></span>${esc(t.label)}</button>`).join("")}</div>
          <div class="dp-grid">
            <div class="dp-map" id="dp-map"></div>
            <aside class="dp-card" id="dp-card" aria-live="polite"><div class="dp-card-in dp-empty"><h3>Select a point on the map</h3><p>Each point is an incident with a short, sourced account. Use the slider to move through time: points appear in the month they happened, and the newest are ringed.</p></div></aside>
          </div>
          <p class="dp-count" id="dp-count"></p>
        </section>
        ${D.phaseMap && MEDIA[D.phaseMap.media] ? `<section class="pg-sec dp-phase"><h2>Who controlled what</h2><p>${esc(D.phaseMap.note)}</p>${fig(D.phaseMap.media, 1100, "wide")}</section>` : ""}
        <section class="pg-sec"><h2>All incidents</h2>
          ${Object.entries(byYear).map(([y, list]) => `<h3 class="dp-year">${esc(y)}</h3><ol class="dp-list">${list.map(i => `<li id="dpi-${i.id}" class="dp-item">
            <div class="dp-item-head"><span class="dp-dot" style="background:${(D.types[i.type] || {}).colour}"></span><div><small class="notranslate">${esc(i.when)} · ${esc(i.place)}</small><h4>${esc(i.title)}</h4></div></div>
            <div class="dp-item-body">${i.img ? fig(i.img, 520, "side") : ""}<p>${i.text}</p><p class="dp-src"><b>Source:</b> ${srcLinks(i.src)}</p>
            <div class="ex-btns"><button type="button" class="btn-ghost" data-show-inc="${i.id}">Show on the map</button>${i.story && byId[i.story] ? `<button type="button" class="btn-ghost" data-go="${i.story}">Full story →</button>` : ""}</div></div></li>`).join("")}</ol>`).join("")}
        </section>
        ${D.memoryNote ? `<section class="pg-sec"><h2>How it is remembered</h2><div class="prose">${D.memoryNote}</div></section>` : ""}
        ${D.ukNote ? `<section class="pg-sec"><h2>The British and Irish connection</h2><div class="prose">${D.ukNote}</div><div class="dp-uk">${(D.ukMedia || []).map(k => fig(k, 600)).join("")}</div></section>` : ""}
        <div class="sources"><h3>Sources</h3><ol>${(D.sources || []).map(([t, u]) => `<li>${esc(t)}${u ? ` <a href="${u}" target="_blank" rel="noopener">Link ↗</a>` : ""}</li>`).join("")}</ol><p class="dp-note">Each incident also lists its own source.</p></div>
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
      svg.append("g").selectAll("path").data(feats).join("path").attr("d", path).attr("class", "dp-prov").append("title").text(f => f.properties.name);
    }
    // spread out points that would sit on top of each other (e.g. several incidents in Madrid)
    const pos = new Map(), clusters = [];
    incs.forEach(i => { const p = proj([i.lon, i.lat]); const c = clusters.find(c => Math.hypot(c.x - p[0], c.y - p[1]) < 40); if (c) c.items.push(i); else clusters.push({ x: p[0], y: p[1], items: [i] }); });
    clusters.forEach(c => c.items.forEach((i, k) => {
      if (c.items.length === 1) { pos.set(i.id, [c.x, c.y]); return; }
      const a = -Math.PI / 2 + 2 * Math.PI * k / c.items.length, r = 10 + 3 * c.items.length;
      pos.set(i.id, [c.x + r * Math.cos(a), c.y + r * Math.sin(a)]);
    }));
    const gl = svg.append("g").attr("class", "dp-leaders");
    clusters.filter(c => c.items.length > 1).forEach(c => { gl.append("circle").attr("cx", c.x).attr("cy", c.y).attr("r", 2.5).attr("class", "dp-hub"); c.items.forEach(i => gl.append("line").attr("x1", c.x).attr("y1", c.y).attr("x2", pos.get(i.id)[0]).attr("y2", pos.get(i.id)[1]).attr("class", "dp-leader").attr("data-i", i.id)); });
    const gm = svg.append("g").attr("class", "dp-marks");
    const marks = gm.selectAll("g").data(incs).join("g").attr("class", "dp-mark")
      .attr("transform", i => `translate(${pos.get(i.id)})`)
      .attr("tabindex", 0).attr("role", "button").attr("aria-label", i => `${i.title}, ${i.when}`);
    marks.append("circle").attr("class", "dp-ring").attr("r", 13);
    marks.append("circle").attr("class", "dp-pt").attr("r", 7.5).attr("fill", i => (D.types[i.type] || {}).colour);
    marks.append("title").text(i => `${i.title} — ${i.when}`);

    const cardEl = document.getElementById("dp-card"), range = document.getElementById("dp-range"), label = document.getElementById("dp-label"), count = document.getElementById("dp-count");
    const on = new Set(types.map(([k]) => k)); let sel = null;
    function select(inc, scroll) {
      sel = inc ? inc.id : null;
      marks.classed("sel", i => i.id === sel);
      if (inc) {
        cardEl.innerHTML = card(D, inc);
        cardEl.querySelectorAll("[data-go]").forEach(b => b.onclick = () => go(b.dataset.go));
        if (scroll) document.getElementById("dp-map").scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
    function update() {
      const s = +range.value; label.value = st[s].label; label.textContent = st[s].label;
      let n = 0;
      marks.each(function (i) {
        const k = stepOf(D, st, i), vis = k <= s && on.has(i.type);
        if (vis) n++;
        d3.select(this).classed("hide", !vis).classed("new", vis && k === s).attr("tabindex", vis ? 0 : -1).attr("aria-hidden", vis ? null : "true");
      });
      const shown = new Set(); marks.each(function (i) { if (!this.classList.contains("hide")) shown.add(i.id); });
      gl.selectAll("line").style("display", function () { return shown.has(this.dataset.i) ? null : "none"; });
      count.textContent = `${n} of ${incs.length} incidents shown`;
    }
    marks.on("click", (ev, i) => { stop(); select(i); }).on("keydown", (ev, i) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); stop(); select(i); } });
    range.oninput = () => { stop(); update(); };
    document.querySelectorAll(".dp-chip").forEach(b => b.onclick = () => {
      const k = b.dataset.type; if (on.has(k)) on.delete(k); else on.add(k);
      b.classList.toggle("on", on.has(k)); b.setAttribute("aria-pressed", on.has(k)); update();
    });
    document.getElementById("dp-play").onclick = ev => {
      if (timer) { stop(); return; }
      const b = ev.currentTarget; b.textContent = "■ Pause"; b.setAttribute("aria-pressed", "true");
      if (+range.value >= st.length - 1) range.value = 0;
      update();
      timer = setInterval(() => {
        const s = +range.value;
        if (s >= st.length - 1) { stop(); return; }
        range.value = s + 1; update();
        const fresh = incs.filter(i => stepOf(D, st, i) === s + 1 && on.has(i.type));
        if (fresh.length) select(fresh[fresh.length - 1]);
      }, 1100);
    };
    FB.vc.querySelectorAll("[data-show-inc]").forEach(b => b.onclick = () => {
      const inc = incs.find(i => i.id === b.dataset.showInc); if (!inc) return;
      stop(); range.value = st.length - 1; on.add(inc.type);
      document.querySelectorAll(`.dp-chip[data-type="${inc.type}"]`).forEach(c => { c.classList.add("on"); c.setAttribute("aria-pressed", "true"); });
      update(); select(inc, true);
    });
    update();
    return true;
  };

  /* banner on stories that have a deep dive */
  const prevBanner = FB.hooks.storyBanner;
  FB.hooks.storyBanner = e => {
    const base = prevBanner ? prevBanner(e) : "";
    const D = e.deep && DEEP[e.deep]; if (!D) return base;
    return base + `<div class="dp-banner"><div class="wrap"><div><small>Deep dive</small><b>Explore ${esc(D.title)} on a detailed map</b><p>${D.incidents.length} incidents, month by month, with sources.</p></div><button type="button" class="btn-play" data-go="deep/${D.id}">Open the map →</button></div></div>`;
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
        <div class="ex-btns"><button type="button" class="btn-play" data-go="deep/${D.id}">Open the map · ${D.incidents.length} incidents</button></div></div>
    </article>`;
  }).join("");
  if (ex) ex.querySelectorAll("[data-go]").forEach(b => b.onclick = () => go(b.dataset.go));
})();
