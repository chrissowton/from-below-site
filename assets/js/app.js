/* From Below — an atlas of radical history. Plain JavaScript, no build step. */
(function () {
  "use strict";

  const THEMES = {
    labour:  "Workers & unions",
    vote:    "The vote & democracy",
    freedom: "Anti-colonial & freedom",
    civil:   "Civil rights & anti-racism",
    queer:   "LGBTQ+ liberation",
    earth:   "Land & environment",
    rights:  "Human rights",
    language: "Language & culture",
    thought: "Thought & expression",
    disability: "Disability rights",
    housing: "Housing & community",
    peace: "Peace & anti-war"
  };
  const SECTIONS = [
    ["background", "What is the background to this event?"],
    ["people", "Who were the key people?"],
    ["happened", "What happened?"],
    ["next", "What happened next?"],
    ["debates", "What do others say?"],
    ["evidence", "The evidence"],
    ["memory", "How is it remembered?"],
    ["why", "Why does it matter?"],
    ["similar", "What other events are like this?"],
    ["more", "Where can I find out more?"]
  ];
  const TYPES = { read: "Read", online: "Online", visit: "Visit", watch: "Watch", listen: "Listen" };
  const MEDIA = window.MEDIA;
  const EXTRAS = window.EXTRAS || {};
  window.EVENTS.forEach(e => { if (EXTRAS[e.id]) Object.keys(EXTRAS[e.id]).forEach(k => { if (!e[k]) e[k] = EXTRAS[e.id][k]; }); });
  const EVENTS = window.EVENTS.slice().sort((a, b) => a.year - b.year);
  const yr = y => y < 0 ? `${-y} BCE` : (y < 500 ? `${y} CE` : `${y}`);
  const byId = Object.fromEntries(EVENTS.map(e => [e.id, e]));

  /* ---------- helpers ---------- */
  const enc = f => encodeURIComponent(f.replace(/ /g, "_"));
  const fileUrl = (f, w) => "https://commons.wikimedia.org/wiki/Special:FilePath/" + enc(f) + (w ? "?width=" + w : "");
  const pageUrl = f => "https://commons.wikimedia.org/wiki/File:" + enc(f);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const credit = m => {
    const lic = m.lu ? `<a href="${m.lu}" target="_blank" rel="noopener">${esc(m.lic)}</a>` : esc(m.lic);
    return `${esc(m.by)} · ${lic} · <a href="${pageUrl(m.f)}" target="_blank" rel="noopener">Wikimedia Commons</a>`;
  };
  const figure = (key, w = 1100) => {
    const m = MEDIA[key]; if (!m) return "";
    if (m.video) {
      return `<figure class="media videobox"><video controls preload="metadata" src="${fileUrl(m.f)}" onerror="this.parentNode.classList.add('novid')"></video>
        <a class="vfall" href="${pageUrl(m.f)}" target="_blank" rel="noopener"><i>▶</i><div><b>Watch on Wikimedia Commons</b><span>${esc(m.cap)}</span></div></a>
        <figcaption>${esc(m.cap)} <span class="credit">${credit(m)}</span></figcaption></figure>`;
    }
    return `<figure class="media"><div class="ph"><img loading="lazy" src="${fileUrl(m.f, w)}" alt="${esc(m.cap)}" onerror="this.closest('figure').classList.add('noimg')"></div>
      <figcaption>${esc(m.cap)} <span class="credit">${credit(m)}</span></figcaption></figure>`;
  };
  const bg = (key, w = 700) => MEDIA[key] ? `background-image:url('${fileUrl(MEDIA[key].f, w)}')` : "";

  /* ---------- theme icons (SVG sprite) ---------- */
  const ICONS = {
    labour: '<path d="M13.5 3.5l7 7-2.6 2.6-7-7z"/><path d="M12.2 8.8L4 17a1.6 1.6 0 0 0 3 3l8.2-8.2"/>',
    vote: '<path d="M4 12h16v8H4z"/><path d="M8 12V4h8v8"/><path d="M10 7.5h4"/><path d="M9 16h6"/>',
    freedom: '<path d="M10 14.5l-2.3 2.3a3.2 3.2 0 0 1-4.5-4.5L6 9.5a3.2 3.2 0 0 1 4.5 0"/><path d="M14 9.5l2.3-2.3a3.2 3.2 0 0 1 4.5 4.5L18 14.5a3.2 3.2 0 0 1-4.5 0"/><path d="M9 3.5v2.5M3.5 9H6M15 20.5V18M20.5 15H18"/>',
    civil: '<circle cx="12" cy="12" r="9"/><path d="M7.5 10h9M7.5 14h9"/>',
    queer: '<path d="M3.5 5h17L12 20.5z"/>',
    earth: '<path d="M5 19C5 10 10 5 20 4c0 10-5 15-14 15"/><path d="M5 19l8-8"/>',
    rights: '<path d="M12 4v15M7.5 20h9M5 7h14"/><path d="M5 7l-2.6 6h5.2zM19 7l-2.6 6h5.2z"/>',
    language: '<path d="M4 5h16v11h-9l-5 4v-4H4z"/><path d="M8 9.5h8M8 12.5h5"/>',
    thought: '<path d="M3 5.5c3-1 6-1 9 1 3-2 6-2 9-1v13c-3-1-6-1-9 1-3-2-6-2-9-1z"/><path d="M12 6.5v13"/>',
    disability: '<circle cx="10" cy="4.2" r="1.7"/><path d="M10 7.5v6h5.5l2.5 5"/><path d="M10 10.5h4.5"/><path d="M7.2 11.2a5.2 5.2 0 1 0 7.6 6.6"/>',
    housing: '<path d="M3 11.5L12 4l9 7.5"/><path d="M5.5 10v10h13V10"/><path d="M10 20v-5.5h4V20"/>',
    peace: '<circle cx="12" cy="12" r="9"/><path d="M12 3v18M12 12l-6.4 6.4M12 12l6.4 6.4"/>'
  };
  /* one colour per theme: background (bg) and icon (fg) */
  const COLOURS = {
    labour: ["#D32F2F", "#fff"], vote: ["#7B1FA2", "#fff"], freedom: ["#EF6C00", "#fff"], civil: ["#212121", "#fff"],
    queer: ["rainbow", "#111"], earth: ["#2E7D32", "#fff"], rights: ["#00838F", "#fff"], language: ["#D81B60", "#fff"],
    thought: ["#F9A825", "#111"], disability: ["#1565C0", "#fff"], housing: ["#795548", "#fff"], peace: ["#81D4FA", "#0D2B45"]
  };
  const RAINBOW = ["#E40303", "#FF8C00", "#FFED00", "#008026", "#24408E", "#732982"];
  const rainbowCss = `linear-gradient(180deg,${RAINBOW.map((c, i) => `${c} ${(i * 100 / 6).toFixed(2)}% ${((i + 1) * 100 / 6).toFixed(2)}%`).join(",")})`;
  (function themeCss() {
    const st = document.createElement("style");
    st.textContent = Object.entries(COLOURS).map(([t, [bgc, fg]]) => bgc === "rainbow"
      ? `.t-${t}{--tc:url(#rainbow);--tbg:${rainbowCss};--tsolid:#732982;--tg:${fg}}`
      : `.t-${t}{--tc:${bgc};--tbg:${bgc};--tsolid:${bgc};--tg:${fg}}`).join("\n");
    document.head.appendChild(st);
  })();
  (function sprite() {
    const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.setAttribute("aria-hidden", "true"); s.style.cssText = "position:absolute;width:0;height:0;overflow:hidden";
    s.innerHTML = `<defs><linearGradient id="rainbow" x1="0" y1="0" x2="0" y2="1">${RAINBOW.map((c, i) => `<stop offset="${i / 6}" stop-color="${c}"/><stop offset="${(i + 1) / 6}" stop-color="${c}"/>`).join("")}</linearGradient></defs>` + Object.entries(ICONS).map(([k, p]) => `<symbol id="ic-${k}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</symbol>`).join("");
    document.body.prepend(s);
  })();
  const icon = (t, cls = "ic") => `<svg class="${cls}" aria-hidden="true"><use href="#ic-${t}"/></svg>`;
  const badge = t => `<span class="badge t-${t}">${icon(t)}</span>`;

  /* ---------- countries (point-in-polygon, with fallback to the place name) ---------- */
  const W = 960, H = 470;
  const countries = topojson.feature(window.WORLD, window.WORLD.objects.countries).features.filter(f => f.id !== "010");
  const NICE = { "United States of America": "United States", "Dem. Rep. Congo": "DR Congo", "Central African Rep.": "Central African Republic", "Bosnia and Herz.": "Bosnia and Herzegovina", "Dominican Rep.": "Dominican Republic", "Côte d'Ivoire": "Côte d'Ivoire", "Eq. Guinea": "Equatorial Guinea", "S. Sudan": "South Sudan", "Solomon Is.": "Solomon Islands", "W. Sahara": "Western Sahara", "Falkland Is.": "Falkland Islands", "Fr. S. Antarctic Lands": "French Southern Lands", "N. Cyprus": "Cyprus", "eSwatini": "Eswatini", "Macedonia": "North Macedonia" };
  const cname = f => NICE[f.properties.name] || f.properties.name;
  const byName = {}; countries.forEach(f => { byName[cname(f).toLowerCase()] = f; });
  const ALIAS = { "england": "United Kingdom", "scotland": "United Kingdom", "wales": "United Kingdom", "northern ireland": "United Kingdom", "uk": "United Kingdom", "usa": "United States", "us": "United States", "united states": "United States", "hawaii": "United States", "hawai'i": "United States", "guadeloupe": "France", "martinique": "France", "french polynesia": "France", "new caledonia": "France", "réunion": "France", "curaçao": "Netherlands", "greenland": "Greenland", "hong kong": "China", "tibet": "China", "singapore": "Singapore", "bahrain": "Bahrain", "malta": "Malta", "tonga": "Tonga", "maldives": "Maldives", "mauritius": "Mauritius", "barbados": "Barbados", "marshall islands": "Marshall Islands", "kiribati": "Kiribati", "samoa": "Samoa", "democratic republic of the congo": "DR Congo", "belgian congo": "DR Congo", "drc": "DR Congo", "ussr": "Russia", "soviet union": "Russia", "czechoslovakia": "Czechia", "yugoslavia": "Serbia", "west germany": "Germany", "east germany": "Germany", "bavaria": "Germany", "prussia": "Germany", "holland": "Netherlands", "burma": "Myanmar", "ceylon": "Sri Lanka", "persia": "Iran", "siam": "Thailand", "rhodesia": "Zimbabwe", "southern rhodesia": "Zimbabwe", "gold coast": "Ghana", "nyasaland": "Malawi", "dahomey": "Benin", "upper volta": "Burkina Faso", "ivory coast": "Côte d'Ivoire", "côte d'ivoire": "Côte d'Ivoire", "east timor": "Timor-Leste", "timor-leste": "Timor-Leste", "palestine": "Palestine", "trinidad": "Trinidad and Tobago", "trinidad and tobago": "Trinidad and Tobago", "the gambia": "Gambia", "republic of ireland": "Ireland", "korea": "South Korea", "south korea": "South Korea", "north korea": "North Korea", "bosnia": "Bosnia and Herzegovina", "papua new guinea": "Papua New Guinea" };
  function countryOf(e) {
    const hit = countries.find(f => d3.geoContains(f, [e.lon, e.lat]));
    if (hit) return cname(hit);
    const parts = e.place.split(/[,;(]/).map(s => s.replace(/[)]/g, "").trim().toLowerCase()).filter(Boolean).reverse();
    for (const p of parts) { if (ALIAS[p]) return ALIAS[p]; if (byName[p]) return cname(byName[p]); }
    for (const p of parts) for (const k of Object.keys(ALIAS)) if (p.endsWith(" " + k) || p === k) return ALIAS[k];
    for (const p of parts) for (const k of Object.keys(byName)) if (p.endsWith(k)) return cname(byName[k]);
    // last resort: nearest country centroid
    let best = null, bd = 9;
    countries.forEach(f => { const d = d3.geoDistance([e.lon, e.lat], d3.geoCentroid(f)); if (d < bd) { bd = d; best = f; } });
    return best ? cname(best) : "Other";
  }
  // present-day country or territory; a few places need setting by hand
  const OVERRIDE = { kahoolawe: "United States", punanaleo: "United States", hocklee: "Singapore", curacao1969: "Curaçao", guadeloupe1967: "Guadeloupe", martinique1848: "Martinique", moruroa: "French Polynesia", palestine1936: "Palestine", blackpanthers: "Israel", gdeimizik: "Western Sahara", congo1963: "Congo", bhutan1990: "Bhutan" };
  EVENTS.forEach(e => { e.country = e.countryOverride || OVERRIDE[e.id] || countryOf(e); });

  /* ---------- filter state ---------- */
  const active = new Set(Object.keys(THEMES));
  const state = { y0: -Infinity, y1: Infinity, country: null, hits: null, focus: null };
  // focus mode (a Moment, Thread or Pathway shown on the map) overrides the other filters
  const inFocus = e => state.focus.ids.has(e.id) && (state.focus.n == null || state.focus.order.get(e.id) < state.focus.n);
  const visible = e => state.focus ? inFocus(e) : active.has(e.theme) && e.year >= state.y0 && e.year <= state.y1 && (!state.country || e.country === state.country) && (!state.hits || state.hits.has(e.id));

  /* ---------- search: key content words only ---------- */
  const STOP = new Set(("a an and the of in on at to for from by with without is are was were be been as it its this that these those or nor but not no into onto over under about after before during " +
    "their his her hers they them he she we our you your i me my who whom what when where why how which there here than then so such also very can could would should will did do does done has have had " +
    "all any some more most other one two story stories history about against between").split(" "));
  const norm = s => String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const strip = h => String(h || "").replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ");
  const words = s => norm(s).match(/[a-z0-9]+/g) || [];
  EVENTS.forEach(e => {
    e._key = words([e.title, e.place, e.country, e.date, THEMES[e.theme], e.teaser, (e.people || []).map(p => p.n).join(" ")].join(" "));
    e._body = null;                                   // full text, built only if needed
  });
  const bodyWords = e => e._body || (e._body = words(strip([e.background, e.happened, e.next, e.debates, e.memory, (e.people || []).map(p => p.r).join(" ")].join(" "))));
  const terms = q => words(q).filter(t => !STOP.has(t) && (t.length > 1 || /\d/.test(t)));
  const hasTerm = (list, t) => /^\d{3,4}$/.test(t) ? list.includes(t) : list.some(w => w.startsWith(t) || (t.length > 4 && w.startsWith(t.replace(/(es|s)$/, ""))));
  let searchMode = "";
  function runSearch(q) {
    const ts = terms(q);
    if (!ts.length) { state.hits = null; searchMode = ""; return ts; }
    const yearHit = (e, t) => /^\d{3,4}$/.test(t) && String(e.year) === t;
    let hits = EVENTS.filter(e => ts.every(t => yearHit(e, t) || hasTerm(e._key, t)));
    searchMode = "key";
    if (!hits.length) { hits = EVENTS.filter(e => ts.every(t => yearHit(e, t) || hasTerm(e._key, t) || hasTerm(bodyWords(e), t))); searchMode = "body"; }
    state.hits = new Set(hits.map(e => e.id));
    return ts;
  }

  /* ---------- map ---------- */
  const svg = d3.select("#map");
  const proj = d3.geoNaturalEarth1().fitExtent([[6, 6], [W - 6, H + 60]], { type: "Sphere" });
  const path = d3.geoPath(proj);
  const KMAX = 120;
  const g = svg.append("g");
  g.append("path").attr("class", "grat").attr("d", path(d3.geoGraticule10()));
  const landSel = g.append("g").selectAll("path").data(countries).join("path").attr("class", "country").attr("d", path);
  EVENTS.forEach(e => { const p = proj([e.lon, e.lat]); e.x = p[0]; e.y = p[1]; });
  const leaders = g.append("g");
  const arcsG = g.append("g").attr("class", "f-arcs");
  const pins = g.append("g").selectAll("g").data(EVENTS).join("g")
    .attr("class", d => "pin t-" + d.theme).attr("tabindex", 0).attr("role", "link")
    .attr("aria-label", d => `${d.title}, ${d.place}, ${d.date}`);
  pins.append("circle").attr("class", "ring").attr("r", 15.5);
  pins.append("circle").attr("class", "dot").attr("r", 11);
  pins.append("use").attr("href", d => "#ic-" + d.theme).attr("x", -7).attr("y", -7).attr("width", 14).attr("height", 14).attr("class", "glyph");

  let k = 1;
  const clusterG = g.append("g");
  const numsG = g.append("g").attr("class", "f-nums");
  function layout() {
    const vis = EVENTS.filter(visible);
    EVENTS.forEach(e => { e.dx = e.x; e.dy = e.y; e.inCluster = false; });
    const used = new Set(), th = 24 / k, clusters = [];
    const spread = k >= KMAX * 0.5;           // near full zoom: never cluster, always fan out
    vis.forEach(e => {
      if (used.has(e.id)) return;
      const grp = [e]; used.add(e.id);
      for (let i = 0; i < grp.length; i++) vis.forEach(o => { if (!used.has(o.id) && Math.hypot(o.x - grp[i].x, o.y - grp[i].y) < th) { grp.push(o); used.add(o.id); } });
      if (grp.length > 7 && !spread) {
        grp.forEach(o => o.inCluster = true);
        clusters.push({ id: grp.map(o => o.id).sort().join("|"), items: grp, x: d3.mean(grp, o => o.x), y: d3.mean(grp, o => o.y) });
      } else if (grp.length > 1) {
        const cx = d3.mean(grp, o => o.x), cy = d3.mean(grp, o => o.y);
        grp.sort((a, b) => a.year - b.year);
        if (grp.length <= 8) {
          const r = Math.max(20, grp.length * 4.4) / k;
          grp.forEach((o, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / grp.length; o.dx = cx + r * Math.cos(a); o.dy = cy + r * Math.sin(a); });
        } else {                                   // spiral for large groups
          grp.forEach((o, i) => { const a = i * 2.39996, r = (14 + 11 * Math.sqrt(i + 1)) / k; o.dx = cx + r * Math.cos(a); o.dy = cy + r * Math.sin(a); });
        }
      }
    });
    pins.attr("transform", d => `translate(${d.dx},${d.dy}) scale(${1 / k})`)
      .style("display", d => (d.inCluster || !visible(d)) ? "none" : null);
    const ld = vis.filter(e => !e.inCluster && Math.abs(e.dx - e.x) + Math.abs(e.dy - e.y) > 1e-6);
    leaders.selectAll("line").data(ld, d => d.id).join("line").attr("class", "leader")
      .attr("x1", d => d.x).attr("y1", d => d.y).attr("x2", d => d.dx).attr("y2", d => d.dy);
    leaders.selectAll("circle").data(ld, d => d.id).join("circle").attr("class", "anchor")
      .attr("cx", d => d.x).attr("cy", d => d.y).attr("r", 2.2 / k);
    const cl = clusterG.selectAll("g.cluster").data(clusters, d => d.id).join(enter => {
      const c = enter.append("g").attr("class", "cluster").attr("tabindex", 0).attr("role", "button");
      c.append("circle").attr("class", "c-halo").attr("r", 23); c.append("circle").attr("class", "c-dot").attr("r", 17);
      c.append("text").attr("class", "c-n").attr("dy", "0.35em");
      return c;
    });
    cl.attr("transform", d => `translate(${d.x},${d.y}) scale(${1 / k})`).attr("aria-label", d => `${d.items.length} stories here — zoom in`);
    cl.select(".c-n").text(d => d.items.length);
    cl.on("mouseenter focus", function (ev, d) { showClusterTip(d, this); }).on("mouseleave blur", hideTip)
      .on("click", (ev, d) => { ev.stopPropagation(); zoomTo(d.items); })
      .on("keydown", (ev, d) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); zoomTo(d.items); } });
    drawFocus();
  }
  function drawFocus() {
    const fo = state.focus;
    const seq = fo ? fo.seq.map(id => byId[id]).filter(e => e && visible(e) && !e.inCluster) : [];
    const pairs = fo && fo.arcs ? seq.slice(1).map((b, i) => [seq[i], b]) : [];
    arcsG.selectAll("path").data(pairs, d => d[0].id + ">" + d[1].id).join(
      enter => enter.append("path").attr("class", "f-arc").style("opacity", 0).call(p => p.transition().duration(500).style("opacity", 1)))
      .attr("d", ([a, b]) => {
        const mx = (a.dx + b.dx) / 2, my = (a.dy + b.dy) / 2, dx = b.dx - a.dx, dy = b.dy - a.dy, L = Math.hypot(dx, dy) || 1;
        const off = Math.min(L * 0.28, 60 / k);
        return `M${a.dx},${a.dy} Q${mx - dy / L * off},${my + dx / L * off} ${b.dx},${b.dy}`;
      });
    const nums = fo && fo.numbered ? seq : [];
    const ng = numsG.selectAll("g").data(nums, d => d.id).join(enter => {
      const n = enter.append("g").attr("class", "f-num");
      n.append("circle").attr("r", 8).attr("cx", 12).attr("cy", -12); n.append("text").attr("x", 12).attr("y", -12).attr("dy", "0.35em");
      return n;
    });
    ng.attr("transform", d => `translate(${d.dx},${d.dy}) scale(${1 / k})`).select("text").text(d => fo.seq.indexOf(d.id) + 1);
  }
  function zoomBox(x0, y0, x1, y1, fill = 0.5) {
    const sc = Math.max(1, Math.min(KMAX, fill / Math.max((x1 - x0) / W, (y1 - y0) / H, 1e-4)));
    svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity.translate(W / 2, H / 2).scale(sc).translate(-(x0 + x1) / 2, -(y0 + y1) / 2));
  }
  function zoomTo(items) {
    const x0 = d3.min(items, o => o.x), x1 = d3.max(items, o => o.x), y0 = d3.min(items, o => o.y), y1 = d3.max(items, o => o.y);
    let sc = Math.min(KMAX, 0.32 / Math.max((x1 - x0) / W, (y1 - y0) / H, 1e-4));
    // points almost on top of each other: go straight to the level where they fan out
    if (Math.max(x1 - x0, y1 - y0) * sc < 40) sc = Math.max(sc, KMAX * 0.55);
    sc = Math.min(KMAX, Math.max(sc, k * 1.5));
    svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity.translate(W / 2, H / 2).scale(sc).translate(-(x0 + x1) / 2, -(y0 + y1) / 2));
  }
  const zoom = d3.zoom().scaleExtent([1, KMAX]).translateExtent([[-40, -40], [W + 40, H + 40]])
    .on("zoom", ev => { k = ev.transform.k; g.attr("transform", ev.transform); layout(); hideTip(); });
  svg.call(zoom).on("dblclick.zoom", null);
  d3.select("#zin").on("click", () => svg.transition().duration(350).call(zoom.scaleBy, 2));
  d3.select("#zout").on("click", () => svg.transition().duration(350).call(zoom.scaleBy, 0.5));
  d3.select("#zreset").on("click", () => svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity));

  const tip = document.getElementById("tip"), box = document.getElementById("mapbox");
  const tipHtml = d => `<div class="tip-img" style="${bg(d.hero, 600)}"></div><div class="tip-body"><div class="t-meta">${badge(d.theme)}${yr(d.year)} · ${THEMES[d.theme]}</div><h3>${esc(d.title)}</h3><p>${esc(d.teaser)}</p><div class="go">Read the full story →</div></div>`;
  function placeTip(t, host, el) {
    const b = host.getBoundingClientRect(), r = el.getBoundingClientRect();
    let x = r.right - b.left + 22;                       // keep a clear gap from the icon
    if (x + 310 > b.width) x = r.left - b.left - 322;
    t.classList.add("show");
    const h = t.offsetHeight;
    t.style.left = Math.max(10, x) + "px"; t.style.top = Math.max(10, Math.min(r.top - b.top - h / 2, b.height - h - 10)) + "px";
  }
  function showTip(d, el) { tip.innerHTML = tipHtml(d); placeTip(tip, box, el); pins.classed("on", p => p === d); }
  function showClusterTip(d, el) {
    tip.innerHTML = `<div class="tip-body"><div class="t-meta">${d.items.length} stories here</div><h3>Click to zoom in</h3><p class="list">${d.items.slice().sort((a, b) => a.year - b.year).map(o => `${badge(o.theme)}${yr(o.year)} · ${esc(o.title)}`).join("<br>")}</p></div>`;
    placeTip(tip, box, el);
  }
  function hideTip() { tip.classList.remove("show"); pins.classed("on", false); }
  pins.on("mouseenter focus", function (ev, d) { showTip(d, this); })
    .on("mouseleave blur", hideTip)
    .on("click", (ev, d) => { ev.stopPropagation(); go(d.id); })
    .on("keydown", (ev, d) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); go(d.id); } });

  /* ---------- theme filters ---------- */
  const fl = document.getElementById("filters");
  const allBtn = document.createElement("button");
  allBtn.className = "chip"; allBtn.textContent = "All themes"; fl.appendChild(allBtn);
  const chips = {};
  Object.entries(THEMES).forEach(([key, label]) => {
    const n = EVENTS.filter(e => e.theme === key).length;
    const b = document.createElement("button");
    b.className = "chip"; b.innerHTML = `${badge(key)}${label}<span class="n">${n}</span>`;
    b.onclick = () => {
      const all = active.size === Object.keys(THEMES).length;
      if (all) { active.clear(); active.add(key); }
      else if (active.has(key)) { active.delete(key); if (!active.size) Object.keys(THEMES).forEach(t => active.add(t)); }
      else active.add(key);
      refresh();
    };
    chips[key] = b; fl.appendChild(b);
  });
  allBtn.onclick = () => { Object.keys(THEMES).forEach(t => active.add(t)); refresh(); };

  /* ---------- country picker ---------- */
  const cp = document.getElementById("countrypick");
  const counts = d3.rollups(EVENTS, v => v.length, e => e.country).sort((a, b) => a[0].localeCompare(b[0]));
  cp.innerHTML = `<button class="cp-btn" aria-haspopup="listbox" aria-expanded="false"><span class="cp-lbl">All countries</span><span class="cp-car">▾</span></button>
    <div class="cp-pop" hidden><input type="search" placeholder="Type a country…" aria-label="Search countries" autocomplete="off"><ul role="listbox"></ul></div>`;
  const cpBtn = cp.querySelector(".cp-btn"), cpPop = cp.querySelector(".cp-pop"), cpIn = cp.querySelector("input"), cpUl = cp.querySelector("ul");
  function cpRender() {
    const q = cpIn.value.trim().toLowerCase();
    const rows = [["", EVENTS.length]].concat(counts.filter(([c]) => !q || c.toLowerCase().includes(q)));
    cpUl.innerHTML = rows.map(([c, n], i) => `<li role="option" tabindex="-1" data-c="${esc(c)}" aria-selected="${(state.country || "") === c}">${c ? esc(c) : "All countries"}<span>${n}</span></li>`).join("") || "";
    if (rows.length === 1 && q) cpUl.innerHTML += `<li class="none">No stories yet</li>`;
  }
  function cpOpen(o) { cpPop.hidden = !o; cpBtn.setAttribute("aria-expanded", o); if (o) { cpIn.value = ""; cpRender(); cpIn.focus(); } }
  function setCountry(c) {
    state.country = c || null;
    cp.querySelector(".cp-lbl").textContent = c || "All countries";
    cp.classList.toggle("set", !!c);
    cpOpen(false); refresh();
    if (c) {
      const f = byName[c.toLowerCase()];
      const items = EVENTS.filter(visible);
      if (f) { const [[x0, y0], [x1, y1]] = path.bounds(f); zoomBox(Math.min(x0, d3.min(items, o => o.x) ?? x0), Math.min(y0, d3.min(items, o => o.y) ?? y0), Math.max(x1, d3.max(items, o => o.x) ?? x1), Math.max(y1, d3.max(items, o => o.y) ?? y1), 0.7); }
      else if (items.length) zoomTo(items);
    } else svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity);
  }
  cpBtn.onclick = () => cpOpen(cpPop.hidden);
  cpIn.oninput = cpRender;
  cpIn.onkeydown = ev => {
    if (ev.key === "Escape") { cpOpen(false); cpBtn.focus(); }
    if (ev.key === "Enter") { const li = cpUl.querySelector("li[data-c]:not([data-c=''])") || cpUl.querySelector("li[data-c]"); if (li) setCountry(li.dataset.c); }
    if (ev.key === "ArrowDown") { ev.preventDefault(); const li = cpUl.querySelector("li[data-c]"); if (li) li.focus(); }
  };
  cpUl.onclick = ev => { const li = ev.target.closest("li[data-c]"); if (li) setCountry(li.dataset.c); };
  cpUl.onkeydown = ev => {
    const li = ev.target.closest("li"); if (!li) return;
    if (ev.key === "ArrowDown") { ev.preventDefault(); (li.nextElementSibling || li).focus(); }
    if (ev.key === "ArrowUp") { ev.preventDefault(); (li.previousElementSibling || cpIn).focus(); }
    if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); setCountry(li.dataset.c); }
    if (ev.key === "Escape") { cpOpen(false); cpBtn.focus(); }
  };
  document.addEventListener("click", ev => { if (!cp.contains(ev.target)) cpOpen(false); });

  /* ---------- cards ---------- */
  const cardsEl = document.getElementById("cards");
  EVENTS.forEach(e => {
    const c = document.createElement("button");
    c.className = "card"; c.dataset.id = e.id;
    c.innerHTML = `<div class="c-img" style="${bg(e.hero, 600)}"><span class="c-yr">${yr(e.year)}</span><span class="c-ic t-${e.theme}">${icon(e.theme)}</span></div>
      <div class="c-body"><span class="c-theme t-${e.theme}">${THEMES[e.theme]}</span><h3>${esc(e.title)}</h3><span class="c-pl">${esc(e.place)}</span><p>${esc(e.teaser)}</p></div>`;
    c.onclick = () => go(e.id);
    c.onmouseenter = () => pins.classed("on", p => p === e);
    c.onmouseleave = () => pins.classed("on", false);
    cardsEl.appendChild(c);
  });

  /* ---------- timeline: a period overview you can drag across, plus a vertical list ---------- */
  const ov = document.getElementById("tl-overview"), vtl = document.getElementById("vtl");
  const BRK = [-1200, 0, 1500, 1800, 1900, 1950, 2000, 2027], FR = [0, .06, .13, .2, .34, .56, .87, 1];
  const TICKS = [1500, 1800, 1900, 1950, 2000];
  let tlX = null, brush = null, brushG = null, ovSvg = null, tlZoom = null;
  // when a period is chosen, the overview zooms to it (with a little margin either side)
  function zoomTo(a, z) { const span = Math.max(4, z - a), pad = Math.max(1, Math.round(span * .08)); tlZoom = [a - pad, z + pad]; }
  function drawOverview() {
    const w = ov.clientWidth; if (!w) return;
    const m = 4, iw = w - 2 * m, H0 = 74, base = H0 - 18, top = 12;
    const inZ = e => !tlZoom || (e.year >= tlZoom[0] && e.year <= tlZoom[1]);
    let ticks = TICKS;
    if (tlZoom) {
      tlX = d3.scaleLinear().domain(tlZoom).range([m, m + iw]).clamp(true);
      ticks = tlX.ticks(Math.max(3, Math.floor(iw / 80))).filter(Number.isInteger);
    } else tlX = d3.scaleLinear().domain(BRK).range(FR.map(f => m + f * iw)).clamp(true);
    const SHOWN = EVENTS.filter(inZ);
    const nb = Math.max(30, Math.floor(iw / 6)), bw = iw / nb;
    ov.innerHTML = "";
    ovSvg = d3.select(ov).append("svg").attr("width", w).attr("height", H0).attr("role", "img").attr("aria-label", "Number of stories over time — drag across to choose a period");
    // stacked, coloured columns: one small square per story, by theme
    const bins = Array.from({ length: nb }, () => []);
    SHOWN.forEach(e => { const i = Math.min(nb - 1, Math.max(0, Math.floor((tlX(e.year) - m) / bw))); bins[i].push(e); });
    const maxN = d3.max(bins, b => b.length) || 1, unit = Math.min(4, (base - top - 2) / maxN);
    const order = Object.keys(THEMES);
    bins.forEach((b, i) => b.sort((p, q) => order.indexOf(p.theme) - order.indexOf(q.theme)).forEach((e, j) => { e.bx = m + i * bw; e.by = base - (j + 1) * unit; }));
    ovSvg.append("g").selectAll("rect").data(SHOWN).join("rect")
      .attr("class", d => "ov-sq t-" + d.theme).attr("x", d => d.bx + .5).attr("y", d => d.by).attr("width", Math.max(1, bw - 1)).attr("height", Math.max(.6, unit - .3));
    ovSvg.append("rect").attr("class", "tl-band").attr("x", m).attr("y", base).attr("width", iw).attr("height", 1.5);
    const tg = ovSvg.append("g").selectAll("g").data(ticks).join("g").attr("transform", t => `translate(${tlX(t)},${base})`);
    tg.append("line").attr("class", "tl-tick").attr("y2", 4);
    tg.append("text").attr("class", "tl-lab").attr("y", 15).text(t => t < 0 ? `${-t} BCE` : t)
      .style("display", (t, i) => (i > 0 && tlX(t) - tlX(ticks[i - 1]) < 30) ? "none" : null);
    brushG = ovSvg.append("g").attr("class", "tl-brush");
    const markers = ovSvg.append("g").attr("class", "ov-moments");
    brush = d3.brushX().extent([[m, 0], [m + iw, H0]])
      .on("brush end", ev => {
        if (!ev.sourceEvent) return;
        if (!ev.selection) { state.y0 = -Infinity; state.y1 = Infinity; }
        else { state.y0 = Math.floor(tlX.invert(ev.selection[0])); state.y1 = Math.ceil(tlX.invert(ev.selection[1])); }
        refresh(ev.type === "end");
        if (ev.type === "end") {                       // zoom the overview in on the chosen period
          if (ev.selection) zoomTo(state.y0, state.y1); else tlZoom = null;
          setTimeout(drawOverview, 0);
        }
      });
    brushG.call(brush);
    // when zoomed, the whole strip is the chosen period, so leave it clear for a new, narrower selection
    if (isFinite(state.y0) && !tlZoom) brushG.call(brush.move, [tlX(state.y0), tlX(state.y1)]);
    // moments: small flags above the bars (drawn after the brush so they stay clickable)
    const mk = markers.raise().selectAll("g").data((window.MOMENTS || []).filter(d => !tlZoom || (parseInt(d.years) >= tlZoom[0] && parseInt(d.years) <= tlZoom[1]))).join("g").attr("class", "ov-mk").attr("tabindex", 0).attr("role", "link")
      .attr("aria-label", d => `Moment: ${d.title}`)
      .attr("transform", d => `translate(${tlX(parseInt(d.years))},0)`);
    mk.append("path").attr("d", "M-5,1 h10 l-5,7 z");
    mk.append("title").text(d => d.title);
    mk.on("click", (ev, d) => go("moment/" + d.id)).on("keydown", (ev, d) => { if (ev.key === "Enter") go("moment/" + d.id); });
    paintOverview();
  }
  function paintOverview() { if (ovSvg) ovSvg.selectAll(".ov-sq").classed("off", d => !visible(d)); }

  // vertical list, grouped by period
  const ERAS = [[-9999, 999, "Before 1000"], [1000, 1499, "1000–1499"], [1500, 1699, "1500–1699"], [1700, 1799, "1700s"], [1800, 1849, "1800–1849"], [1850, 1899, "1850–1899"],
    [1900, 1919, "1900–1919"], [1920, 1945, "1920–1945"], [1946, 1969, "1946–1969"], [1970, 1989, "1970–1989"], [1990, 2009, "1990–2009"], [2010, 9999, "Since 2010"]];
  const eraEls = [];
  ERAS.forEach(([a, z, label]) => {
    const evs = EVENTS.filter(e => e.year >= a && e.year <= z); if (!evs.length) return;
    const li = document.createElement("li"); li.className = "vt-era";
    li.innerHTML = `<h3><span>${label}</span><small></small></h3><ol>${evs.map(e => `<li class="vt-ev t-${e.theme}" data-id="${e.id}"><button type="button"><span class="vt-yr notranslate">${yr(e.year)}</span><span class="vt-dot">${icon(e.theme)}</span><span class="vt-tt"><b>${esc(e.title)}</b><small>${esc(e.country)}</small></span></button></li>`).join("")}</ol>`;
    vtl.appendChild(li); eraEls.push(li);
  });
  vtl.querySelectorAll(".vt-ev").forEach(li => {
    const e = byId[li.dataset.id], btn = li.firstElementChild;
    btn.onclick = () => go(e.id);
    btn.onmouseenter = btn.onfocus = () => pins.classed("on", p => p === e);
    btn.onmouseleave = btn.onblur = () => pins.classed("on", false);
    btn.title = e.teaser;
  });
  function paintTimeline() {
    paintOverview();
    eraEls.forEach(era => {
      let n = 0;
      era.querySelectorAll(".vt-ev").forEach(li => { const v = visible(byId[li.dataset.id]); li.hidden = !v; if (v) n++; });
      era.hidden = !n; era.querySelector("small").textContent = n === 1 ? "1 story" : `${n} stories`;
    });
  }
  function clearPeriod() { state.y0 = -Infinity; state.y1 = Infinity; if (tlZoom) { tlZoom = null; drawOverview(); } else if (brushG) brushG.call(brush.move, null); }
  document.getElementById("tl-reset").onclick = () => { clearPeriod(); refresh(); };
  document.querySelectorAll("[data-era]").forEach(b => b.onclick = () => {
    const [a, z] = b.dataset.era.split(",").map(Number); state.y0 = a; state.y1 = z;
    zoomTo(a, Math.min(z, new Date().getFullYear())); drawOverview(); refresh(true); vtl.scrollTop = 0;
  });
  let rz; window.addEventListener("resize", () => { clearTimeout(rz); rz = setTimeout(drawOverview, 150); });

  /* ---------- search box and reset ---------- */
  const qIn = document.getElementById("q"), qInfo = document.getElementById("searchinfo");
  let qt;
  function doSearch() {
    const ts = runSearch(qIn.value);
    refresh();
    if (!qIn.value.trim()) { qInfo.hidden = true; return; }
    const n = state.hits ? state.hits.size : 0;
    qInfo.hidden = false;
    qInfo.innerHTML = !ts.length ? `Type a key word — such as a place, a person, a cause or a year.`
      : !n ? `No stories found for <b>${esc(ts.join(" "))}</b>. Try a shorter or different word.`
      : `${n} ${n === 1 ? "story matches" : "stories match"} <b>${esc(ts.join(" "))}</b>${searchMode === "body" ? " (mentioned in the full text)" : ""}. <button type="button" class="linkbtn" id="q-clear">Clear search</button>`;
    const c = document.getElementById("q-clear"); if (c) c.onclick = () => { qIn.value = ""; doSearch(); qIn.focus(); };
  }
  qIn.addEventListener("input", () => { clearTimeout(qt); qt = setTimeout(doSearch, 180); });
  qIn.addEventListener("keydown", ev => { if (ev.key === "Enter") { clearTimeout(qt); doSearch(); document.getElementById("stories").scrollIntoView({ behavior: "smooth" }); } });
  document.getElementById("resetall").onclick = () => {
    qIn.value = ""; runSearch(""); qInfo.hidden = true;
    Object.keys(THEMES).forEach(t => active.add(t));
    clearPeriod();
    vtl.scrollTop = 0;
    if (state.focus) { stopPlay(); state.focus = null; fbar.hidden = true; }
    setCountry("");                                    // also zooms the map back out and refreshes
  };

  /* ---------- back to top ---------- */
  const toTop = document.getElementById("totop");
  function topCheck() { const y = view.classList.contains("open") ? view.scrollTop : window.scrollY; toTop.hidden = y < 600; }
  window.addEventListener("scroll", topCheck, { passive: true });
  toTop.onclick = () => { if (view.classList.contains("open")) view.scrollTo({ top: 0, behavior: "smooth" }); else window.scrollTo({ top: 0, behavior: "smooth" }); };

  /* ---------- Google Translate ---------- */
  const LANGS = [["en", "English"], ["ar", "العربية (Arabic)"], ["bn", "বাংলা (Bengali)"], ["zh-CN", "中文 (Chinese)"], ["cy", "Cymraeg (Welsh)"], ["de", "Deutsch (German)"], ["es", "Español (Spanish)"],
    ["fa", "فارسی (Persian)"], ["fr", "Français (French)"], ["ga", "Gaeilge (Irish)"], ["hi", "हिन्दी (Hindi)"], ["id", "Bahasa Indonesia"], ["it", "Italiano (Italian)"], ["ja", "日本語 (Japanese)"],
    ["ko", "한국어 (Korean)"], ["nl", "Nederlands (Dutch)"], ["pa", "ਪੰਜਾਬੀ (Punjabi)"], ["pl", "Polski (Polish)"], ["pt", "Português (Portuguese)"], ["ro", "Română (Romanian)"],
    ["ru", "Русский (Russian)"], ["so", "Soomaali (Somali)"], ["sw", "Kiswahili (Swahili)"], ["ta", "தமிழ் (Tamil)"], ["tl", "Filipino"], ["tr", "Türkçe (Turkish)"], ["uk", "Українська (Ukrainian)"],
    ["ur", "اردو (Urdu)"], ["vi", "Tiếng Việt (Vietnamese)"], ["yo", "Yorùbá (Yoruba)"], ["zu", "isiZulu (Zulu)"]];
  const langSel = document.getElementById("lang");
  langSel.innerHTML = LANGS.map(([c, n]) => `<option value="${c}">${n}</option>`).join("");
  const curLang = (document.cookie.match(/googtrans=\/[^/]*\/([^;]+)/) || [])[1];
  if (curLang) langSel.value = curLang;
  function setCookie(v) {
    const exp = v ? "" : ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = `googtrans=${v}${exp};path=/`;
    const host = location.hostname; if (host.includes(".")) document.cookie = `googtrans=${v}${exp};path=/;domain=.${host.split(".").slice(-2).join(".")}`;
  }
  langSel.onchange = () => {
    const code = langSel.value;
    if (code === "en") { setCookie(""); location.reload(); return; }
    setCookie(`/en/${code}`);
    const combo = document.querySelector("#gt select.goog-te-combo");
    if (combo) { combo.value = code; combo.dispatchEvent(new Event("change")); document.documentElement.dir = ["ar", "fa", "ur"].includes(code) ? "rtl" : "ltr"; return; }
    if (window.google && google.translate) { location.reload(); return; }   // loaded but not ready: the cookie applies it on reload
    // the translator could not load (e.g. blocked by the page host): offer Google Translate's own page instead
    setCookie("");
    const name = langSel.options[langSel.selectedIndex].text;
    const url = `https://translate.google.com/translate?sl=en&tl=${encodeURIComponent(code)}&u=${encodeURIComponent(location.href.split("#")[0])}`;
    toast(`Google Translate could not load on this page. <a href="${url}" target="_blank" rel="noopener">Open the site in ${esc(name)} with Google Translate ↗</a>`);
    langSel.value = "en";
  };
  function toast(html) {
    let t = document.getElementById("toast");
    if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast notranslate"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.innerHTML = html + ` <button type="button" aria-label="Close">✕</button>`;
    t.querySelector("button").onclick = () => t.classList.remove("show");
    t.classList.add("show");
  }
  if (curLang && ["ar", "fa", "ur"].includes(curLang)) document.documentElement.dir = "rtl";

  /* ---------- refresh everything ---------- */
  function refresh(final = true) {
    const all = active.size === Object.keys(THEMES).length;
    allBtn.setAttribute("aria-pressed", all);
    Object.entries(chips).forEach(([t, b]) => b.setAttribute("aria-pressed", !all && active.has(t)));
    cardsEl.querySelectorAll(".card").forEach(c => c.classList.toggle("hide", !visible(byId[c.dataset.id])));
    const vis = EVENTS.filter(visible), n = vis.length;
    const range = isFinite(state.y0) ? `${yr(Math.max(state.y0, EVENTS[0].year))} – ${yr(Math.min(state.y1, EVENTS[EVENTS.length - 1].year))}` : `${yr(EVENTS[0].year)} – ${yr(EVENTS[EVENTS.length - 1].year)}`;
    document.getElementById("count").textContent = state.focus ? `${n} of ${EVENTS.length} stories · ${state.focus.title}` : `${n} of ${EVENTS.length} stories · ${range}${state.country ? " · " + state.country : ""}`;
    document.getElementById("tl-range").textContent = isFinite(state.y0) ? `Showing ${range} — the timeline has zoomed in. Drag again to narrow it further, or press “All years” to zoom out.` : "Drag across the bars to choose a period — the timeline will zoom in";
    document.getElementById("tl-reset").hidden = !isFinite(state.y0);
    const empty = document.getElementById("empty"); if (empty) empty.hidden = n > 0;
    const filtered = !all || isFinite(state.y0) || state.country || state.hits || state.focus;
    document.getElementById("resetall").classList.toggle("lit", !!filtered);
    paintTimeline();
    layout();
    if (final) writeUrl();
  }

  /* ---------- shareable links: the current filters live in the address (?t=…&from=…&to=…&c=…&q=…&show=…) ---------- */
  function writeUrl() {
    const p = new URLSearchParams();
    if (active.size !== Object.keys(THEMES).length) p.set("t", [...active].join(","));
    if (isFinite(state.y0)) { p.set("from", state.y0); p.set("to", state.y1); }
    if (state.country) p.set("c", state.country);
    if (qIn.value.trim()) p.set("q", qIn.value.trim());
    if (state.focus && state.focus.key) p.set("show", state.focus.key);
    const qs = p.toString().replace(/%2C/g, ",").replace(/%3A/g, ":");
    try { history.replaceState(history.state, "", location.pathname + (qs ? "?" + qs : "") + location.hash); } catch (_) { }
  }
  function readUrl() {
    const p = new URLSearchParams(location.search);
    if (p.get("t")) { const ts = p.get("t").split(",").filter(t => THEMES[t]); if (ts.length) { active.clear(); ts.forEach(t => active.add(t)); } }
    if (p.get("from") && p.get("to")) { state.y0 = +p.get("from"); state.y1 = +p.get("to"); }
    if (p.get("q")) { qIn.value = p.get("q"); runSearch(qIn.value); }
    return { country: p.get("c"), show: p.get("show") };
  }
  const startUrl = readUrl();
  drawOverview();
  refresh(false);
  if (startUrl.country && counts.some(([c]) => c === startUrl.country)) setCountry(startUrl.country);
  if (state.hits) doSearch();

  /* ---------- focus mode: show a Moment, Thread or Pathway on the map ---------- */
  const fbar = document.getElementById("focusbar");
  let playTimer = null;
  function setFocus(f) {
    stopPlay();
    if (!f) { state.focus = null; fbar.hidden = true; refresh(); svg.transition().duration(600).call(zoom.transform, d3.zoomIdentity); return; }
    state.focus = { ...f, ids: new Set(f.seq), order: new Map(f.seq.map((id, i) => [id, i])), n: null };
    fbar.hidden = false;
    fbar.innerHTML = `<div class="fb-txt"><small>${esc(f.kind)}</small><b>${esc(f.title)}</b><span class="fb-cap" aria-live="polite">${f.seq.length} stories${f.arcs ? " · the lines show the order" : ""}</span></div>
      <div class="fb-btns"><button type="button" class="fb-play">▶ Play</button>${f.link ? `<button type="button" class="fb-read">Read about it</button>` : ""}<button type="button" class="fb-x" aria-label="Show all stories">✕ All stories</button></div>`;
    fbar.querySelector(".fb-play").onclick = () => playTimer ? stopPlay(true) : play();
    if (f.link) fbar.querySelector(".fb-read").onclick = () => go(f.link);
    fbar.querySelector(".fb-x").onclick = () => setFocus(null);
    refresh();
    const items = f.seq.map(id => byId[id]).filter(Boolean);
    if (items.length) { const x0 = d3.min(items, o => o.x), x1 = d3.max(items, o => o.x), y0 = d3.min(items, o => o.y), y1 = d3.max(items, o => o.y); const hgt = Math.max(y1 - y0, 20); zoomBox(x0 - 20, y0 - hgt * 0.45 - 30, x1 + 20, y1 + 20, 0.82); }
  }
  function play() {
    const f = state.focus; if (!f) return;
    const btn = fbar.querySelector(".fb-play"), cap = fbar.querySelector(".fb-cap");
    btn.textContent = "❚❚ Pause";
    f.n = 0; refresh(false);
    const step = () => {
      if (!state.focus) return stopPlay();
      f.n++; refresh(false);
      const e = byId[f.seq[f.n - 1]];
      if (e) { cap.textContent = `${f.dates && f.dates[e.id] ? f.dates[e.id] + " · " : ""}${e.title}`; pins.classed("on", p => p === e); }
      if (f.n >= f.seq.length) { stopPlay(); setTimeout(() => { if (state.focus === f) { pins.classed("on", false); } }, 2500); }
    };
    step(); playTimer = setInterval(step, 1600);
  }
  function stopPlay(keepPartial) {
    if (playTimer) { clearInterval(playTimer); playTimer = null; }
    const btn = fbar && fbar.querySelector(".fb-play"); if (btn) btn.textContent = "▶ Play";
    if (state.focus && !keepPartial) { state.focus.n = null; }
    if (state.focus) refresh(false);
  }

  /* ---------- story view ---------- */
  const view = document.getElementById("view"), vc = document.getElementById("v-content");
  let current = null;

  function renderStory(e) {
    const i = EVENTS.indexOf(e), prev = EVENTS[i - 1], next = EVENTS[i + 1];
    const fn = html => html.replace(/\[(\d+)\]/g, (_, n) => `<sup class="fn"><button data-fn="${n}" aria-label="Source ${n}">${n}</button></sup>`);
    const chap = (n, id, inner, cls = "") => `<section class="chapter ${cls}" id="ch-${id}"><div class="num">${String(n).padStart(2, "0")}</div><h2>${SECTIONS[n - 1][1]}</h2>${inner}</section>`;
    const people = `<div class="people-acc">${e.people.length > 2 ? `<button type="button" class="pp-all" aria-expanded="false">Open all</button>` : ""}<ul class="pp-acc">${e.people.map(p => `<li><details><summary>${p.img ? `<span class="pp-face" role="img" aria-label="${esc(MEDIA[p.img].cap)}" style="${bg(p.img, 160)}"></span>` : `<span class="pp-face pp-dot" aria-hidden="true"></span>`}<span class="pp-txt"><b>${p.n}</b><span class="pp-prev">${String(p.r || "").replace(/<[^>]+>/g, "")}</span></span><span class="pp-chev" aria-hidden="true"></span></summary><div class="pp-more">${p.img ? `<div class="pp-big" role="img" aria-label="${esc(MEDIA[p.img].cap)}" style="${bg(p.img, 400)}"></div>` : ""}<p>${p.r}</p></div></details></li>`).join("")}</ul></div>
      ${e.people.some(p => p.img) ? `<p class="credit" style="margin-top:12px">Portraits: ${e.people.filter(p => p.img).map(p => `${esc(p.n)} — ${credit(MEDIA[p.img])}`).join("; ")}.</p>` : ""}`;
    const sources = `<div class="sources" id="src-${e.id}"><h3>Sources for this section</h3><ol>${e.sources.map(([t, u], j) => `<li id="s-${e.id}-${j + 1}">${t}${u ? ` <a href="${u}" target="_blank" rel="noopener">Link ↗</a>` : ""}</li>`).join("")}</ol></div>`;
    const happened = `<div class="verify"><span>✓</span><div><b>Sourced account.</b> Every factual claim and quotation in this section is linked to a numbered source. Click a red number to see it.</div></div>
      <div class="prose">${fn(e.happened)}</div>
      ${(e.video || []).map(v => figure(v)).join("")}
      ${e.gallery && e.gallery.length ? `<div class="gallery">${e.gallery.map(gk => figure(gk, 800)).join("")}</div>` : ""}
      ${sources}`;
    const similar = `<div class="similar">${e.similar.map(s => s.id && byId[s.id]
      ? `<button class="sim int" data-go="${s.id}"><small>On this site · ${yr(byId[s.id].year)}</small><b>${esc(byId[s.id].title)}</b><span>${esc(byId[s.id].teaser)}</span></button>`
      : `<a class="sim" href="${s.url}" target="_blank" rel="noopener"><small>Elsewhere ↗</small><b>${s.name}</b><span>${s.text}</span></a>`).join("")}</div>`;
    const more = `<ul class="more">${e.more.map(([t, l, u]) => `<li><span class="ty">${TYPES[t] || t}</span><span>${u ? `<a href="${u}" target="_blank" rel="noopener">${l}</a>` : l}</span></li>`).join("")}</ul>`;
    const hm = MEDIA[e.hero];
    const ongoing = e.ongoing ? `<aside class="ongoing" aria-label="Ongoing situation"><div class="wrap"><div class="og-in"><div class="og-head"><span class="og-dot" aria-hidden="true"></span><b>Ongoing situation</b><span class="og-asof">Last reviewed ${esc(e.ongoing.asOf)}</span></div><div class="prose">${fn(e.ongoing.text)}</div>${(e.ongoing.watch || []).length ? `<p class="og-wl">Still unresolved:</p><ul>${e.ongoing.watch.map(w => `<li>${w}</li>`).join("")}</ul>` : ""}<p class="og-note">This is recent history. Accounts, casualty figures and outcomes may change as more evidence emerges.</p></div></div></aside>` : "";

    const H = window.FB && FB.hooks ? FB.hooks : {};
    const banner = H.storyBanner ? H.storyBanner(e) : "";
    const tools = H.storyTools ? H.storyTools(e) : "";
    const lookClose = H.sourceBox ? H.sourceBox(e) : "";
    const voices = H.voicesBox ? H.voicesBox(e) : "";
    vc.innerHTML = `${banner}
      <header class="s-hero"><div class="wrap">
        <div><div class="tag">${icon(e.theme)}${THEMES[e.theme]}${e.ongoing ? ` <span class="recent-tag">Recent history</span>` : ""}</div><h1 id="s-title">${esc(e.title)}</h1><p class="teaser">${esc(e.teaser)}</p>
          <dl class="facts"><div><dt>When</dt><dd>${esc(e.date)}</dd></div><div><dt>Where</dt><dd>${esc(e.place)}</dd></div></dl></div>
        ${hm ? `<figure class="media"><div class="ph"><img src="${fileUrl(hm.f, 1200)}" alt="${esc(hm.cap)}" onerror="this.closest('figure').classList.add('noimg')"></div><figcaption>${esc(hm.cap)} ${credit(hm)}</figcaption></figure>` : ""}
      </div></header>${ongoing}${tools}
      <div class="s-body"><div class="wrap">
        <nav class="toc" aria-label="Sections"><ol>${SECTIONS.map(([id, t]) => `<li><a href="#" data-ch="${id}">${t}</a></li>`).join("")}</ol></nav>
        <article>
          ${chap(1, "background", `<div class="prose">${fn(e.background)}</div>`)}
          ${chap(2, "people", people + voices)}
          ${chap(3, "happened", happened)}
          ${chap(4, "next", `<div class="prose">${fn(e.next)}</div>`)}
          ${e.debates ? chap(5, "debates", `<div class="debate-note">Different people have understood this event in different ways. This section sets out how it was seen at the time, where historians disagree, and the difficult questions it raises.</div><div class="prose">${fn(e.debates)}</div>`) : ""}
          ${e.evidence || lookClose ? chap(6, "evidence", `${e.evidence ? `<div class="prose">${fn(e.evidence)}</div>` : ""}${lookClose}`) : ""}
          ${e.memory ? chap(7, "memory", `<div class="prose">${fn(e.memory)}</div>`) : ""}
          <div class="why-box">${chap(8, "why", `<div class="prose">${fn(e.why)}</div>`)}</div>
          ${e.questions ? `<aside class="questions" aria-label="Questions to think about"><h3>Questions to think about</h3><ol>${e.questions.map(q => `<li>${q}</li>`).join("")}</ol></aside>` : ""}
          ${chap(9, "similar", similar)}
          ${chap(10, "more", more)}
          <div class="pager">
            <button class="pv" ${prev ? "" : "disabled"}><small>← Earlier · ${prev ? yr(prev.year) : ""}</small><b>${prev ? esc(prev.title) : ""}</b></button>
            <button class="nx" ${next ? "" : "disabled"}><small>Later · ${next ? yr(next.year) : ""} →</small><b>${next ? esc(next.title) : ""}</b></button>
          </div>
        </article>
      </div></div>`;
    const ppAll = vc.querySelector(".pp-all");
    if (ppAll) ppAll.onclick = () => { const open = ppAll.getAttribute("aria-expanded") !== "true"; vc.querySelectorAll(".pp-acc details").forEach(d => d.open = open); ppAll.setAttribute("aria-expanded", open); ppAll.textContent = open ? "Close all" : "Open all"; };
    vc.querySelector(".pv").onclick = () => prev && go(prev.id);
    vc.querySelector(".nx").onclick = () => next && go(next.id);
    vc.querySelectorAll("[data-go]").forEach(b => b.onclick = () => go(b.dataset.go));
    vc.querySelectorAll(".toc a").forEach(a => a.onclick = ev => { ev.preventDefault(); scrollToEl(document.getElementById("ch-" + a.dataset.ch)); });
    vc.querySelectorAll("button[data-fn]").forEach(b => b.onclick = () => {
      const li = document.getElementById(`s-${e.id}-${b.dataset.fn}`); if (!li) return;
      scrollToEl(li, 160); li.classList.add("flash"); setTimeout(() => li.classList.remove("flash"), 1600);
    });
    document.getElementById("v-prev").style.visibility = prev ? "visible" : "hidden";
    document.getElementById("v-next").style.visibility = next ? "visible" : "hidden";
    document.title = `${e.title} — From Below`;
    current = e; view.scrollTop = 0; spy();
    if (H.afterStory) H.afterStory(e, vc);
  }
  function scrollToEl(el, off = 70) { view.scrollTo({ top: el.getBoundingClientRect().top + view.scrollTop - off, behavior: "smooth" }); }
  function spy() {
    if (!current) return;
    let cur = "background";
    vc.querySelectorAll(".chapter").forEach(s => { if (s.getBoundingClientRect().top < 200) cur = s.id.slice(3); });
    vc.querySelectorAll(".toc a").forEach(a => a.classList.toggle("cur", a.dataset.ch === cur));
  }
  view.addEventListener("scroll", () => { spy(); topCheck(); }, { passive: true });

  function renderCredits() {
    const used = {};
    EVENTS.forEach(e => {
      const keys = [e.hero, ...(e.gallery || []), ...(e.video || []), ...e.people.filter(p => p.img).map(p => p.img)];
      keys.forEach(k => { if (k && MEDIA[k]) (used[k] = used[k] || []).push(e.title); });
    });
    vc.innerHTML = `<div class="credits-body"><div class="wrap">
      <div class="eyebrow" style="color:var(--red)">Credits & licences</div>
      <h1 id="s-title">Credits</h1>
      <p>The text of this site is written for From Below and may be reused under the <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">Creative Commons Attribution-ShareAlike 4.0</a> licence. Quotations remain the words of the people quoted and are reproduced with attribution for the purposes of history, criticism and education.</p>
      <p>All images and videos are hosted on Wikimedia Commons and are either in the public domain or available under the free licence listed below. Click any file name to see its full description and licence on Commons. The world map uses Natural Earth data via <a href="https://github.com/topojson/world-atlas" target="_blank" rel="noopener">world-atlas</a> (public domain), drawn with <a href="https://d3js.org" target="_blank" rel="noopener">D3</a> (ISC licence).</p>
      <h2>Images and video</h2>
      <table class="ctable"><thead><tr><th>File</th><th>Creator</th><th>Licence</th><th>Used in</th></tr></thead><tbody>
      ${Object.keys(used).map(k => { const m = MEDIA[k]; return `<tr><td><a href="${pageUrl(m.f)}" target="_blank" rel="noopener">${esc(m.f)}</a></td><td>${esc(m.by)}</td><td>${m.lu ? `<a href="${m.lu}" target="_blank" rel="noopener">${esc(m.lic)}</a>` : esc(m.lic)}</td><td>${[...new Set(used[k])].map(esc).join(", ")}</td></tr>`; }).join("")}
      </tbody></table></div></div>`;
    document.getElementById("v-prev").style.visibility = "hidden";
    document.getElementById("v-next").style.visibility = "hidden";
    document.title = "Credits — From Below";
    current = null; view.scrollTop = 0;
  }

  /* ---------- routing (#event-id, #credits) ---------- */
  function go(id) { if (location.hash !== "#" + id) location.hash = id; else route(); }
  function home() {
    try { history.pushState("", document.title, location.pathname + location.search); } catch (_) { location.hash = ""; }
    route();
  }
  function route() {
    const id = location.hash.slice(1);
    const [kind, arg] = id.split("/");
    if (window.FB && FB.hooks.leaveView) FB.hooks.leaveView();
    if (byId[id]) { renderStory(byId[id]); open(); }
    else if (id === "credits") { renderCredits(); open(); }
    else if (window.FB && FB.routes[kind] && FB.routes[kind](arg ? decodeURIComponent(arg) : "")) { current = null; view.scrollTop = 0; open(); }
    else {
      view.classList.remove("open"); document.body.style.overflow = ""; current = null; topCheck();
      document.title = "From Below — an atlas of radical history";
      if (["about", "stories", "explore"].includes(id)) { const el = document.getElementById(id); if (el) el.scrollIntoView(); }
    }
  }
  function open() { toTop.hidden = true; view.classList.add("open"); document.body.style.overflow = "hidden"; hideTip(); setTimeout(() => document.getElementById("v-close").focus({ preventScroll: true }), 60); }
  const trail = [location.hash];                     // in-site history, so "Back" never leaves the site
  window.addEventListener("hashchange", () => {
    if (trail.length > 1 && trail[trail.length - 2] === location.hash) trail.pop(); else trail.push(location.hash);
    backBtn.hidden = false;
    route();
  });
  const backBtn = document.getElementById("v-back");
  backBtn.onclick = () => { if (trail.length > 1) history.back(); else home(); };
  document.getElementById("v-close").onclick = home;
  document.getElementById("v-home").onclick = home;
  document.getElementById("v-prev").onclick = () => { const i = EVENTS.indexOf(current); if (i > 0) go(EVENTS[i - 1].id); };
  document.getElementById("v-next").onclick = () => { const i = EVENTS.indexOf(current); if (i > -1 && i < EVENTS.length - 1) go(EVENTS[i + 1].id); };
  document.addEventListener("keydown", ev => { if (ev.key === "Escape" && view.classList.contains("open")) home(); });

  /* ---------- shared toolkit for assets/js/features.js ---------- */
  function showPage(html, title) {
    vc.innerHTML = html;
    document.getElementById("v-prev").style.visibility = "hidden";
    document.getElementById("v-next").style.visibility = "hidden";
    document.title = `${title} — From Below`;
    vc.querySelectorAll("[data-go]").forEach(b => b.onclick = () => go(b.dataset.go));
  }
  window.FB = {
    EVENTS, byId, THEMES, MEDIA, ICONS, COLOURS, SECTIONS, state, active,
    icon, badge, yr, esc, bg, figure, credit, fileUrl, pageUrl,
    go, home, refresh, setFocus, play, showPage, toast, scrollToEl, view, vc, countries, cname,
    get current() { return current; },
    showOnMap(f) { home(); setTimeout(() => { setFocus(f); document.getElementById("mapbox").scrollIntoView({ behavior: "smooth", block: "center" }); if (f.autoplay) setTimeout(play, 900); }, 60); },
    routes: {}, hooks: {}
  };
  function init() {                                    // runs once every script (including features.js) has loaded
    route();
    if (startUrl.show && FB.hooks.applyShow) FB.hooks.applyShow(startUrl.show);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else setTimeout(init, 0);
})();
