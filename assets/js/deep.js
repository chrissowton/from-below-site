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
  const srcLinks = s => { const L = (s || []).filter(([, u]) => u); return L.length ? `<span class="dp-srcs">${L.map(([l, u], k) => `<a href="${u}" target="_blank" rel="noopener" title="${esc(l)}">${L.length > 1 ? `Source ${k + 1}` : "Source"} ↗</a>`).join("")}</span>` : ""; };

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
    const even = new Map(incs.map((i, k) => [i.id, (k + 0.5) / incs.length]));
    let spacing = "date";
    const P = i => (spacing === "date" ? S.pos : even).get(i.id);
    const hero = D.hero && MEDIA[D.hero] ? `style="--hero:url('${fileUrl(MEDIA[D.hero].f, 1400)}')"` : "";
    const others = Object.values(DEEP).filter(x => x.id !== D.id);
    const story = D.story && byId[D.story];
    // map geometry first, to decide the layout: tall, thin countries get a three-column layout with a vertical timeline
    const R = D.region;
    const frame = { type: "MultiPoint", coordinates: [[R.lon[0], R.lat[0]], [R.lon[1], R.lat[1]], [R.lon[0], R.lat[1]], [R.lon[1], R.lat[0]]] };
    const p0 = d3.geoMercator().fitWidth(900, frame);
    const tall = p0([R.lon[0], R.lat[0]])[1] / 900 > 1.25;
    // tall maps are drawn narrower, so markers keep the same size on screen
    const W = tall ? 500 : 900, proj = tall ? d3.geoMercator().fitWidth(W, frame) : p0;
    const H = Math.round(proj([R.lon[0], R.lat[0]])[1]);
    const howto = `Press <b>▶ Play</b> to move through the events one by one, or drag along the timeline. Each numbered point on the map matches a dot on the timeline and a card in the list below — select any of them to read what happened. Where many events happened close together, a cluster opens a close-up map.`;

    FB.showPage(`
      <header class="pg-hero dp-hero" ${hero}><div class="wrap">
        <div class="eyebrow">Deep dive · ${esc(D.years)} · ${incs.length} events</div><h1 id="s-title">${esc(D.title)}</h1><p class="teaser">${esc(D.teaser)}</p>
      </div></header>
      <div class="pg-body dp-body"><div class="wrap">
        <div class="dp-legend" role="group" aria-label="Show or hide types of event"><button type="button" class="dp-chip dp-all" id="dp-all">Hide all</button>${types.map(([k, t]) => `<button type="button" class="dp-chip on" data-type="${k}" aria-pressed="true"><span class="dp-dot" style="background:${t.colour}"></span>${esc(t.label)}</button>`).join("")}</div>
        <section class="dp-top${tall ? " tall" : ""}" aria-label="Map, timeline and introduction">
          <div class="dp-side">
            <div id="dp-introPane">
              <div class="dp-about prose">${D.intro}</div>
              ${story ? `<button type="button" class="btn-play dp-storybtn" data-go="${D.story}">Read the full story: ${esc(story.title)} →</button>` : ""}
              <details class="dp-box" open><summary>How to use this map</summary><p>${howto}</p></details>
              <details class="dp-box"><summary>A note on the figures</summary><p>${esc(D.balance || "Figures are given as ranges, with who produced them, where they are disputed.")}</p></details>
            </div>
            <div class="dp-card" id="dp-card" hidden aria-live="polite"></div>
          </div>
          <div class="dp-mapcol"><div class="dp-map" id="dp-map"></div></div>
          <div class="dp-tl" aria-label="Timeline">
            <div class="dp-tl-head">
              <button type="button" class="btn-play" id="dp-play" aria-pressed="false">▶ Play</button>
              <output id="dp-label" class="dp-label notranslate"></output>
              <span class="dp-count" id="dp-count"></span>
              <span class="dp-opts">
                <label title="Seconds between events when playing"><input type="number" id="dp-secs" min="1" max="60" step="1" value="10"> sec per event</label>
                <span class="dp-seg" role="group" aria-label="Space the dots"><button type="button" data-sp="date" class="on">By date</button><button type="button" data-sp="even">Evenly</button></span>
              </span>
            </div>
            <div class="dp-tl-track${tall ? " v" : ""}" id="dp-track" tabindex="0" role="slider" aria-label="Move through time" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </section>
        <section class="pg-sec"><h2>All events</h2>
          <div class="dp-masonry" id="dp-masonry">${incs.map(i => `<article class="dp-item" id="dpi-${i.id}" style="--c:${colour(i)}">
            ${i.img && MEDIA[i.img] ? fig(i.img, 640) : ""}
            <div class="dp-item-in">
              <div class="dp-item-head"><span class="dp-num" style="background:${colour(i)}">${num.get(i.id)}</span><small class="notranslate">${esc(i.when)} · ${esc(i.place)}</small></div>
              <h4>${esc(i.title)}</h4>
              <p>${i.text}</p>
              <div class="dp-item-foot">${srcLinks(i.src)}<span class="dp-item-btns"><button type="button" class="btn-ghost" data-show-inc="${i.id}">Show on the map</button>${i.story && byId[i.story] ? `<button type="button" class="btn-ghost" data-go="${i.story}">Full story →</button>` : ""}</span></div>
            </div></article>`).join("")}</div>
        </section>
        ${D.phaseMap && MEDIA[D.phaseMap.media] ? `<section class="pg-sec dp-phase"><h2>${esc(D.phaseMap.title || "Who controlled what")}</h2><p>${esc(D.phaseMap.note)}</p>${fig(D.phaseMap.media, 1100, "wide")}</section>` : ""}
        ${D.memoryNote ? `<section class="pg-sec"><h2>How it is remembered</h2><div class="prose">${D.memoryNote}</div></section>` : ""}
        ${D.ukNote ? `<section class="pg-sec"><h2>${esc(D.linkHead || "The British and Irish connection")}</h2><div class="prose">${D.ukNote}</div><div class="dp-uk">${(D.ukMedia || []).map(k => fig(k, 600)).join("")}</div></section>` : ""}
        <div class="sources"><h3>Sources</h3><p class="dp-srclist">${(D.sources || []).map(([t, u]) => u ? `<a href="${u}" target="_blank" rel="noopener">${esc(t)} ↗</a>` : esc(t)).join("")}</p><p class="dp-note">Each event also links to its own source.</p></div>
        ${others.length ? `<section class="pg-sec"><h2>Other deep dives</h2><div class="pg-others">${others.map(o => `<button type="button" class="pg-other" data-go="deep/${o.id}"><small>${esc(o.years)}</small><b>${esc(o.title)}</b></button>`).join("")}</div></section>` : ""}
      </div></div>`, D.title);

    /* ---- masonry: place cards left to right, each in the currently shortest column ---- */
    const mas = document.getElementById("dp-masonry"), cards = [...mas.children];
    let masCols = 0;
    function layoutMasonry(force) {
      const w = mas.clientWidth, n = w > 980 ? 3 : w > 620 ? 2 : 1;
      if (n === masCols && !force) return;
      masCols = n;
      const cols = Array.from({ length: n }, () => { const c = document.createElement("div"); c.className = "dp-mcol"; return c; });
      const hts = new Array(n).fill(0);
      cards.forEach(c => { const k = hts.indexOf(Math.min(...hts)); cols[k].appendChild(c); hts[k] += c.offsetHeight || 300; });
      mas.replaceChildren(...cols);
      // second pass with real heights
      const h2 = new Array(n).fill(0); cols.forEach(c => c.replaceChildren());
      cards.forEach(c => { const k = h2.indexOf(Math.min(...h2)); cols[k].appendChild(c); h2[k] += c.offsetHeight + 18; });
    }
    layoutMasonry(true);
    let mt = null; const relayout = () => { clearTimeout(mt); mt = setTimeout(() => layoutMasonry(true), 120); };
    mas.querySelectorAll("img").forEach(im => im.addEventListener("load", relayout, { once: true }));
    const onResize = () => { if (!document.body.contains(mas)) { window.removeEventListener("resize", onResize); return; } layoutMasonry(false); };
    window.addEventListener("resize", onResize);

    /* ---- map ---- */
    const box = document.getElementById("dp-map");
    const path = d3.geoPath(proj);
    const svg = d3.select(box).append("svg").attr("viewBox", `0 0 ${W} ${H}`).attr("role", "img").attr("aria-label", `Map: ${D.title}`);
    const drawBase = (sv, pth, w, h) => {
      sv.append("rect").attr("width", w).attr("height", h).attr("class", "dp-sea");
      if (window.WORLD) sv.append("g").selectAll("path").data(topojson.feature(window.WORLD, window.WORLD.objects.countries).features).join("path").attr("d", pth).attr("class", "dp-other");
      const topo = window[R.topo];
      if (topo) {
        const feats = topojson.feature(topo, topo.objects[R.object]).features.filter(f => !(R.skip || []).includes(f.properties.name));
        sv.append("g").selectAll("path").data(feats).join("path").attr("d", pth).attr("class", f => R.focus && f.properties.name !== R.focus ? "dp-other dp-nb" : "dp-prov").append("title").text(f => f.properties.name);
      }
    };
    drawBase(svg, path, W, H);
    if (R.labels) svg.append("g").attr("class", "dp-lbls").selectAll("text").data(R.labels).join("text").attr("x", l => proj([l.lon, l.lat])[0]).attr("y", l => proj([l.lon, l.lat])[1]).attr("class", l => "dp-lbl" + (l.sea ? " sea" : "")).text(l => l.t);
    // dense groups (four or more events within a small area) become one cluster with a close-up inset
    const raw = new Map(incs.map(i => [i.id, proj([i.lon, i.lat])]));
    const groups = [];
    incs.forEach(i => { const p = raw.get(i.id); const g = groups.find(g => g.items.some(j => Math.hypot(raw.get(j.id)[0] - p[0], raw.get(j.id)[1] - p[1]) < 30)); if (g) g.items.push(i); else groups.push({ items: [i] }); });
    const clusters = groups.filter(g => g.items.length >= 4).map((g, k) => {
      const xs = g.items.map(i => raw.get(i.id)[0]), ys = g.items.map(i => raw.get(i.id)[1]);
      const place = (g.items.map(i => i.place.split(/[,(]| and /)[0].trim()).sort((a, b) => g.items.filter(i => i.place.startsWith(b)).length - g.items.filter(i => i.place.startsWith(a)).length)[0]) || "Close-up";
      return { k, items: g.items, x: d3.mean(xs), y: d3.mean(ys), place };
    });
    const inCluster = new Map(); clusters.forEach(c => c.items.forEach(i => inCluster.set(i.id, c)));
    // positions for single points: spread any that still overlap
    const pts = incs.filter(i => !inCluster.has(i.id)).map(i => ({ id: i.id, p: raw.get(i.id).slice(), o: raw.get(i.id) }));
    clusters.forEach(c => pts.push({ id: "c" + c.k, p: [c.x, c.y], o: [c.x, c.y], big: true }));
    for (let it = 0; it < 80; it++) {
      let moved = false;
      for (let a = 0; a < pts.length; a++) for (let b = a + 1; b < pts.length; b++) {
        const A = pts[a].p, B = pts[b].p, dx = B[0] - A[0], dy = B[1] - A[1], d = Math.hypot(dx, dy) || 0.01, min = (pts[a].big || pts[b].big) ? 40 : 29;
        if (d < min) { const k = (min - d) / 2 / d; A[0] -= dx * k; A[1] -= dy * k; B[0] += dx * k; B[1] += dy * k; moved = true; }
      }
      if (!moved) break;
    }
    pts.forEach(o => { o.p[0] = Math.max(16, Math.min(W - 16, o.p[0])); o.p[1] = Math.max(16, Math.min(H - 16, o.p[1])); });
    const posOf = new Map(pts.map(o => [o.id, o]));
    const gl = svg.append("g").attr("class", "dp-leaders");
    pts.filter(o => Math.hypot(o.p[0] - o.o[0], o.p[1] - o.o[1]) > 6).forEach(o => { gl.append("circle").attr("cx", o.o[0]).attr("cy", o.o[1]).attr("r", 2.5).attr("class", "dp-hub").attr("data-i", o.id); gl.append("line").attr("x1", o.o[0]).attr("y1", o.o[1]).attr("x2", o.p[0]).attr("y2", o.p[1]).attr("class", "dp-leader").attr("data-i", o.id); });
    const single = incs.filter(i => !inCluster.has(i.id));
    const drawMarks = (g, list, at) => {
      const m = g.selectAll("g.dp-mark").data(list, i => i.id).join("g").attr("class", "dp-mark")
        .attr("transform", i => `translate(${at(i)})`).attr("tabindex", 0).attr("role", "button").attr("aria-label", i => `${num.get(i.id)}. ${i.title}, ${i.when}`);
      m.append("circle").attr("class", "dp-ring").attr("r", 18);
      m.append("circle").attr("class", "dp-pt").attr("r", 13).attr("fill", colour);
      m.append("text").attr("class", "dp-n").attr("dy", "0.36em").text(i => num.get(i.id));
      m.append("title").text(i => `${num.get(i.id)}. ${i.title} — ${i.when}`);
      return m;
    };
    let marks = drawMarks(svg.append("g").attr("class", "dp-marks"), single, i => posOf.get(i.id).p);
    const cg = svg.append("g").attr("class", "dp-clusters").selectAll("g").data(clusters).join("g").attr("class", "dp-cluster")
      .attr("transform", c => `translate(${posOf.get("c" + c.k).p})`).attr("tabindex", 0).attr("role", "button").attr("aria-label", c => `${c.items.length} events around ${c.place}: open close-up`);
    cg.append("circle").attr("class", "dp-cl-bg").attr("r", 24);
    cg.append("text").attr("class", "dp-cl-n").attr("dy", "-0.05em").text(c => c.items.length);
    cg.append("text").attr("class", "dp-cl-t").attr("dy", "1.25em").text("events");
    cg.append("text").attr("class", "dp-cl-place").attr("y", 38).text(c => c.place);
    // close-up inset for a cluster
    const inset = document.createElement("div"); inset.className = "dp-inset"; inset.hidden = true; box.appendChild(inset);
    let insetMarks = null, openCl = null;
    function openInset(c) {
      openCl = c;
      const IW = 420, IH = 320, xs = c.items.map(i => i.lon), ys = c.items.map(i => i.lat);
      const padX = Math.max(0.06, (d3.max(xs) - d3.min(xs)) * 0.35), padY = Math.max(0.05, (d3.max(ys) - d3.min(ys)) * 0.35);
      const fr = { type: "MultiPoint", coordinates: [[d3.min(xs) - padX, d3.min(ys) - padY], [d3.max(xs) + padX, d3.max(ys) + padY]] };
      const ip = d3.geoMercator().fitExtent([[30, 34], [IW - 30, IH - 24]], fr), ipath = d3.geoPath(ip);
      inset.innerHTML = `<div class="dp-inset-head"><b>Close-up: around ${esc(c.place)}</b><button type="button" aria-label="Close the close-up">✕</button></div>`;
      inset.querySelector("button").onclick = () => { inset.hidden = true; openCl = null; };
      const isv = d3.select(inset).append("svg").attr("viewBox", `0 0 ${IW} ${IH}`);
      drawBase(isv, ipath, IW, IH);
      const ipts = c.items.map(i => ({ id: i.id, p: ip([i.lon, i.lat]), o: ip([i.lon, i.lat]).slice() }));
      for (let it = 0; it < 120; it++) { let mv = false; for (let a = 0; a < ipts.length; a++) for (let b = a + 1; b < ipts.length; b++) { const A = ipts[a].p, B = ipts[b].p, dx = B[0] - A[0], dy = B[1] - A[1], d = Math.hypot(dx, dy) || 0.01; if (d < 30) { const k = (30 - d) / 2 / d; A[0] -= dx * k; A[1] -= dy * k; B[0] += dx * k; B[1] += dy * k; mv = true; } } if (!mv) break; }
      ipts.forEach(o => { o.p[0] = Math.max(16, Math.min(IW - 16, o.p[0])); o.p[1] = Math.max(40, Math.min(IH - 16, o.p[1])); });
      const cc = ip([d3.mean(xs), d3.mean(ys)]);
      isv.append("text").attr("class", "dp-lbl dp-inset-lbl").attr("x", cc[0]).attr("y", Math.min(IH - 8, d3.max(c.items, i => ip([i.lon, i.lat])[1]) + 40)).text(c.place);
      const ig = isv.append("g");
      ipts.forEach(o => { if (Math.hypot(o.p[0] - o.o[0], o.p[1] - o.o[1]) > 5) { ig.append("line").attr("x1", o.o[0]).attr("y1", o.o[1]).attr("x2", o.p[0]).attr("y2", o.p[1]).attr("class", "dp-leader"); ig.append("circle").attr("cx", o.o[0]).attr("cy", o.o[1]).attr("r", 2.5).attr("class", "dp-hub"); } });
      const ipos = new Map(ipts.map(o => [o.id, o.p]));
      insetMarks = drawMarks(isv.append("g"), c.items, i => ipos.get(i.id));
      insetMarks.on("click", (ev, i) => { stop(); select(i); });
      // put the inset in the corner furthest from the cluster
      const cx = posOf.get("c" + c.k).p[0] / W, cy = posOf.get("c" + c.k).p[1] / H;
      inset.style.left = cx > 0.5 ? "10px" : "auto"; inset.style.right = cx > 0.5 ? "auto" : "10px";
      inset.style.top = cy > 0.5 ? "10px" : "auto"; inset.style.bottom = cy > 0.5 ? "auto" : "10px";
      inset.hidden = false;
      paint();
    }
    cg.on("click", (ev, c) => openInset(c)).on("keydown", (ev, c) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); openInset(c); } });

    /* ---- timeline track ---- */
    const track = document.getElementById("dp-track");
    const V = tall && window.innerWidth > 900;
    const nRowsFor = () => { const ends = [], row = new Map(); incs.slice().sort((a, b) => P(a) - P(b)).forEach(i => { const x = P(i); let r = ends.findIndex(e => x - e >= (V ? 0.03 : 0.026)); if (r < 0) { r = ends.length; ends.push(-1); } ends[r] = x; row.set(i.id, r); }); return { row, n: Math.max(1, ends.length) }; };
    let tdots = [];
    function buildTrack() {
      const { row, n } = nRowsFor(); track.style.setProperty("--rows", n);
      const at = f => V ? `top:${f * 100}%` : `left:${f * 100}%`;
      const dateMode = spacing === "date";
      track.innerHTML = `
        ${dateMode && S.L ? `<span class="dp-zone" style="${V ? `top:0;height:${S.L * 100}%` : `left:0;width:${S.L * 100}%`}">${esc(D.beforeLabel || "Before")}</span>` : ""}
        ${dateMode && S.R < 1 ? `<span class="dp-zone" style="${V ? `top:${S.R * 100}%;height:${(1 - S.R) * 100}%` : `left:${S.R * 100}%;width:${(1 - S.R) * 100}%`}">${esc(D.afterLabel || "Afterwards")}</span>` : ""}
        <div class="dp-axis"></div><div class="dp-fill" id="dp-fill"></div>
        <span class="dp-end dp-end-l" style="${at(dateMode ? S.L : 0)}">${esc(dateMode ? S.startLabel : incs[0].when)}</span>
        <span class="dp-end dp-end-r" style="${V ? `top:${(dateMode ? S.R : 1) * 100}%` : `right:${(1 - (dateMode ? S.R : 1)) * 100}%`}">${esc(dateMode ? S.endLabel : incs[incs.length - 1].when)}</span>
        ${dateMode ? S.ticks.map(t => `<span class="dp-tick" style="${at(t.f)}">${esc(t.t)}</span>`).join("") : ""}
        <div class="dp-head" id="dp-head"></div>
        ${incs.map(i => `<button type="button" class="dp-tdot" data-i="${i.id}" style="${at(P(i))};--r:${row.get(i.id)};background:${colour(i)}" title="${esc(i.when)} — ${esc(i.title)}" aria-label="${num.get(i.id)}. ${esc(i.title)}, ${esc(i.when)}">${num.get(i.id)}</button>`).join("")}`;
      tdots = [...track.querySelectorAll(".dp-tdot")];
      tdots.forEach(b => b.onclick = ev => { ev.stopPropagation(); stop(); const i = incs.find(x => x.id === b.dataset.i); reveal(i); select(i); });
    }

    const cardEl = document.getElementById("dp-card"), introEl = document.getElementById("dp-introPane");
    const label = document.getElementById("dp-label"), count = document.getElementById("dp-count");
    const on = new Set(types.map(([k]) => k)); let sel = null, shown = new Set(incs.map(i => i.id)), frac = 1, first = true;
    const labelAt = f => spacing === "date" ? (f >= 0.999 ? (S.R < 1 ? (D.afterLabel || "Afterwards") : S.endLabel) : S.label(f)) : (() => { const v = incs.filter(i => P(i) <= f + 1e-9); return v.length ? v[v.length - 1].when : "Start"; })();
    function select(inc, scroll) {
      sel = inc ? inc.id : null;
      paint();
      if (!inc) { cardEl.hidden = true; introEl.hidden = false; return; }
      const c = inCluster.get(inc.id); if (c && openCl !== c) openInset(c);
      const T = D.types[inc.type] || {}, n = num.get(inc.id), k = incs.indexOf(inc);
      cardEl.innerHTML = `<div class="dp-card-in">
        <div class="dp-card-nav"><button type="button" class="dp-x" data-nav="intro">← Introduction</button><span><button type="button" data-nav="${k - 1}" ${k ? "" : "disabled"} aria-label="Previous event">‹</button><b>${n} of ${incs.length}</b><button type="button" data-nav="${k + 1}" ${k < incs.length - 1 ? "" : "disabled"} aria-label="Next event">›</button></span></div>
        <div class="dp-card-meta"><span class="dp-num" style="background:${T.colour}">${n}</span>${esc(T.label || "")}</div>
        <h3>${esc(inc.title)}</h3>
        <p class="dp-when"><b class="notranslate">${esc(inc.when)}</b> · ${esc(inc.place)}</p>
        ${inc.img ? fig(inc.img, 480, "dp-float") : ""}
        <p>${inc.text}</p>
        <div class="dp-card-foot">${srcLinks(inc.src)}${inc.story && byId[inc.story] ? `<button type="button" class="btn-play" data-go="${inc.story}">Read the full story →</button>` : ""}</div>
      </div>`;
      introEl.hidden = true; cardEl.hidden = false;
      cardEl.querySelectorAll("[data-go]").forEach(b => b.onclick = () => go(b.dataset.go));
      cardEl.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => { stop(); if (b.dataset.nav === "intro") return select(null); const j = incs[+b.dataset.nav]; if (j) { reveal(j); select(j); } });
      if (scroll) document.querySelector(".dp-top").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function paint() {
      const vis = i => P(i) <= frac + 1e-9 && on.has(i.type);
      const apply = m => m && m.each(function (i) { const v = vis(i); d3.select(this).classed("hide", !v).classed("sel", i.id === sel).attr("tabindex", v ? 0 : -1); });
      apply(marks); apply(insetMarks);
      gl.selectAll("[data-i]").style("display", function () { const id = this.dataset.i; if (id[0] === "c") return null; const i = incs.find(x => x.id === id); return vis(i) ? null : "none"; });
      cg.each(function (c) { const n = c.items.filter(vis).length; d3.select(this).classed("hide", !n).classed("sel", c.items.some(i => i.id === sel)).select(".dp-cl-n").text(n); });
      tdots.forEach(b => { const i = incs.find(x => x.id === b.dataset.i); b.classList.toggle("future", P(i) > frac + 1e-9); b.classList.toggle("off", !on.has(i.type)); b.classList.toggle("sel", i.id === sel); });
    }
    function spark(i) {
      const c = inCluster.get(i.id);
      const host = c ? cg.filter(d => d === c) : marks.filter(d => d.id === i.id);
      host.append("circle").attr("class", "dp-spark").attr("r", c ? 24 : 13).attr("stroke", colour(i)).on("animationend", function () { this.remove(); });
      if (insetMarks) insetMarks.filter(d => d.id === i.id).append("circle").attr("class", "dp-spark").attr("r", 13).attr("stroke", colour(i)).on("animationend", function () { this.remove(); });
      const b = tdots.find(x => x.dataset.i === i.id); if (b) { b.classList.remove("spark"); void b.offsetWidth; b.classList.add("spark"); }
    }
    function setFrac(f) {
      const prev = shown; frac = Math.max(0, Math.min(1, f)); shown = new Set();
      incs.forEach(i => { if (P(i) <= frac + 1e-9 && on.has(i.type)) shown.add(i.id); });
      label.value = label.textContent = labelAt(frac);
      const fill = document.getElementById("dp-fill"), head = document.getElementById("dp-head");
      if (V) { fill.style.height = (frac * 100) + "%"; head.style.top = (frac * 100) + "%"; } else { fill.style.width = (frac * 100) + "%"; head.style.left = (frac * 100) + "%"; }
      track.setAttribute("aria-valuenow", Math.round(frac * 100)); track.setAttribute("aria-valuetext", label.textContent);
      count.textContent = `${shown.size} of ${incs.length} events shown`;
      paint();
      const fresh = first ? [] : incs.filter(i => shown.has(i.id) && !prev.has(i.id)); first = false;
      fresh.forEach(spark);
      return fresh;
    }
    function reveal(i) { on.add(i.type); syncChips(); if (frac < P(i)) setFrac(P(i)); else setFrac(frac); }
    // dragging and keyboard on the track
    const fracFromEvent = ev => { const r = track.getBoundingClientRect(); return V ? (ev.clientY - r.top) / r.height : (ev.clientX - r.left) / r.width; };
    track.addEventListener("pointerdown", ev => { if (ev.target.closest(".dp-tdot")) return; stop(); track.setPointerCapture(ev.pointerId); setFrac(fracFromEvent(ev)); const mv = e => setFrac(fracFromEvent(e)); const up = () => { track.removeEventListener("pointermove", mv); track.removeEventListener("pointerup", up); }; track.addEventListener("pointermove", mv); track.addEventListener("pointerup", up); });
    track.addEventListener("keydown", ev => { const d = { ArrowRight: 0.02, ArrowDown: 0.02, ArrowLeft: -0.02, ArrowUp: -0.02, Home: -1, End: 1 }[ev.key]; if (d !== undefined) { ev.preventDefault(); stop(); setFrac(frac + d); } });
    // filters
    const allBtn = document.getElementById("dp-all");
    function syncChips() { document.querySelectorAll(".dp-chip[data-type]").forEach(c => { const o = on.has(c.dataset.type); c.classList.toggle("on", o); c.setAttribute("aria-pressed", o); }); allBtn.textContent = on.size ? "Hide all" : "Show all"; }
    document.querySelectorAll(".dp-chip[data-type]").forEach(b => b.onclick = () => { const k = b.dataset.type; if (on.has(k)) on.delete(k); else on.add(k); syncChips(); setFrac(frac); });
    allBtn.onclick = () => { if (on.size) on.clear(); else types.forEach(([k]) => on.add(k)); syncChips(); setFrac(frac); };
    // spacing toggle
    document.querySelectorAll(".dp-seg [data-sp]").forEach(b => b.onclick = () => { const old = frac >= 0.999 ? null : incs.filter(i => P(i) <= frac + 1e-9).pop(); spacing = b.dataset.sp; document.querySelectorAll(".dp-seg [data-sp]").forEach(x => x.classList.toggle("on", x === b)); buildTrack(); first = true; setFrac(old === null ? 1 : old ? P(old) : 0); });
    // play: the playhead moves from one event to the next, taking the chosen number of seconds for each
    const secsEl = document.getElementById("dp-secs");
    document.getElementById("dp-play").onclick = ev => {
      if (timer) { stop(); return; }
      const b = ev.currentTarget; b.textContent = "■ Pause"; b.setAttribute("aria-pressed", "true");
      if (frac >= 0.999) { setFrac(0); select(null); }
      let t0 = performance.now(), from = frac;
      const nextStop = () => { const nx = incs.filter(i => on.has(i.type) && P(i) > frac + 1e-6).sort((a, b) => P(a) - P(b))[0]; return nx ? P(nx) : 1; };
      let to = nextStop(), dur = () => Math.max(1, Math.min(60, +secsEl.value || 10)) * 1000 * (from === 0 && to > 0 && !shown.size ? 0.3 : 1);
      timer = setInterval(() => {
        const k = Math.min(1, (performance.now() - t0) / dur());
        const fresh = setFrac(from + (to - from) * k).filter(i => on.has(i.type));
        if (fresh.length) select(fresh[fresh.length - 1]);
        if (k >= 1) { if (to >= 1) { stop(); return; } from = to; to = nextStop(); t0 = performance.now(); }
      }, 50);
    };
    FB.vc.querySelectorAll("[data-show-inc]").forEach(b => b.onclick = () => {
      const inc = incs.find(i => i.id === b.dataset.showInc); if (!inc) return;
      stop(); reveal(inc); select(inc, true);
    });
    marks.on("click", (ev, i) => { stop(); select(i); }).on("keydown", (ev, i) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); stop(); select(i); } });
    buildTrack();
    setFrac(1);
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
