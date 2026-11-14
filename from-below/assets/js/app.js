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
    rights:  "Human rights"
  };
  const SECTIONS = [
    ["background", "What is the background to this event?"],
    ["people", "Who were the key people?"],
    ["happened", "What happened?"],
    ["next", "What happened next?"],
    ["why", "Why does it matter?"],
    ["similar", "What other events are like this?"],
    ["more", "Where can I find out more?"]
  ];
  const TYPES = { read: "Read", online: "Online", visit: "Visit", watch: "Watch", listen: "Listen" };
  const MEDIA = window.MEDIA;
  const EVENTS = window.EVENTS.slice().sort((a, b) => a.year - b.year);
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

  /* ---------- map ---------- */
  const W = 960, H = 470;
  const svg = d3.select("#map");
  const proj = d3.geoNaturalEarth1().fitExtent([[6, 6], [W - 6, H + 60]], { type: "Sphere" });
  const path = d3.geoPath(proj);
  const countries = topojson.feature(window.WORLD, window.WORLD.objects.countries).features.filter(f => f.id !== "010");
  const g = svg.append("g");
  g.append("path").attr("class", "grat").attr("d", path(d3.geoGraticule10()));
  g.append("g").selectAll("path").data(countries).join("path").attr("class", "country").attr("d", path);
  EVENTS.forEach(e => { const p = proj([e.lon, e.lat]); e.x = p[0]; e.y = p[1]; });
  const active = new Set(Object.keys(THEMES));
  const leaders = g.append("g");
  const pins = g.append("g").selectAll("g").data(EVENTS).join("g")
    .attr("class", "pin").attr("tabindex", 0).attr("role", "link")
    .attr("aria-label", d => `${d.title}, ${d.place}, ${d.date}`);
  pins.append("circle").attr("class", "halo");
  pins.append("circle").attr("class", "dot");

  let k = 1;
  function layout() {
    const vis = EVENTS.filter(e => active.has(e.theme));
    EVENTS.forEach(e => { e.dx = e.x; e.dy = e.y; });
    const used = new Set(), th = 18 / k;
    vis.forEach(e => {
      if (used.has(e.id)) return;
      const grp = vis.filter(o => !used.has(o.id) && Math.hypot(o.x - e.x, o.y - e.y) < th);
      grp.forEach(o => used.add(o.id));
      if (grp.length > 1) {
        const cx = d3.mean(grp, o => o.x), cy = d3.mean(grp, o => o.y), r = 14 / k;
        grp.forEach((o, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / grp.length; o.dx = cx + r * Math.cos(a); o.dy = cy + r * Math.sin(a); });
      }
    });
    const rr = 7 / k;
    pins.attr("transform", d => `translate(${d.dx},${d.dy})`);
    pins.selectAll("circle").attr("r", rr);
    const ld = vis.filter(e => Math.abs(e.dx - e.x) + Math.abs(e.dy - e.y) > 1e-6);
    leaders.selectAll("line").data(ld, d => d.id).join("line").attr("class", "leader")
      .attr("x1", d => d.x).attr("y1", d => d.y).attr("x2", d => d.dx).attr("y2", d => d.dy);
    leaders.selectAll("circle").data(ld, d => d.id).join("circle").attr("class", "anchor")
      .attr("cx", d => d.x).attr("cy", d => d.y).attr("r", 2 / k);
  }
  const zoom = d3.zoom().scaleExtent([1, 14]).translateExtent([[0, 0], [W, H]])
    .on("zoom", ev => { k = ev.transform.k; g.attr("transform", ev.transform); layout(); hideTip(); });
  svg.call(zoom);
  d3.select("#zin").on("click", () => svg.transition().duration(350).call(zoom.scaleBy, 1.8));
  d3.select("#zout").on("click", () => svg.transition().duration(350).call(zoom.scaleBy, 1 / 1.8));
  d3.select("#zreset").on("click", () => svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity));

  const tip = document.getElementById("tip"), box = document.getElementById("mapbox");
  function showTip(d, el) {
    tip.innerHTML = `<div class="tip-img" style="${bg(d.hero, 600)}"></div><div class="tip-body"><div class="t-meta">${d.year} · ${THEMES[d.theme]}</div><h3>${esc(d.title)}</h3><p>${esc(d.teaser)}</p><div class="go">Read the full story →</div></div>`;
    const b = box.getBoundingClientRect(), r = el.getBoundingClientRect();
    let x = r.left - b.left + r.width / 2 + 16;
    if (x + 310 > b.width) x = r.left - b.left - 316;
    tip.classList.add("show");
    const h = tip.offsetHeight;
    const y = Math.max(10, Math.min(r.top - b.top - h / 2, b.height - h - 10));
    tip.style.left = Math.max(10, x) + "px"; tip.style.top = y + "px";
    pins.classed("on", p => p === d);
  }
  function hideTip() { tip.classList.remove("show"); pins.classed("on", false); }
  pins.on("mouseenter focus", function (ev, d) { showTip(d, this); })
    .on("mouseleave blur", hideTip)
    .on("click", (ev, d) => { ev.stopPropagation(); go(d.id); })
    .on("keydown", (ev, d) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); go(d.id); } });

  /* ---------- filters + cards ---------- */
  const fl = document.getElementById("filters");
  const allBtn = document.createElement("button");
  allBtn.className = "chip"; allBtn.textContent = "All stories"; fl.appendChild(allBtn);
  const chips = {};
  Object.entries(THEMES).forEach(([key, label]) => {
    const n = EVENTS.filter(e => e.theme === key).length;
    const b = document.createElement("button");
    b.className = "chip"; b.innerHTML = `${label}<span class="n">${n}</span>`;
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

  const cardsEl = document.getElementById("cards");
  EVENTS.forEach(e => {
    const c = document.createElement("button");
    c.className = "card"; c.dataset.theme = e.theme;
    c.innerHTML = `<div class="c-img" style="${bg(e.hero, 600)}"><span class="c-yr">${e.year}</span></div>
      <div class="c-body"><span class="c-theme">${THEMES[e.theme]}</span><h3>${esc(e.title)}</h3><span class="c-pl">${esc(e.place)}</span><p>${esc(e.teaser)}</p></div>`;
    c.onclick = () => go(e.id);
    c.onmouseenter = () => pins.classed("on", p => p === e);
    c.onmouseleave = () => pins.classed("on", false);
    cardsEl.appendChild(c);
  });
  function refresh() {
    const all = active.size === Object.keys(THEMES).length;
    allBtn.setAttribute("aria-pressed", all);
    Object.entries(chips).forEach(([t, b]) => b.setAttribute("aria-pressed", !all && active.has(t)));
    pins.classed("dim", d => !active.has(d.theme));
    cardsEl.querySelectorAll(".card").forEach(c => c.classList.toggle("hide", !active.has(c.dataset.theme)));
    const n = EVENTS.filter(e => active.has(e.theme)).length;
    document.getElementById("count").textContent = `${n} of ${EVENTS.length} stories · ${EVENTS[0].year}–${EVENTS[EVENTS.length - 1].year}`;
    layout();
  }
  refresh();

  /* ---------- story view ---------- */
  const view = document.getElementById("view"), vc = document.getElementById("v-content");
  let current = null;

  function renderStory(e) {
    const i = EVENTS.indexOf(e), prev = EVENTS[i - 1], next = EVENTS[i + 1];
    const fn = html => html.replace(/\[(\d+)\]/g, (_, n) => `<sup class="fn"><button data-fn="${n}" aria-label="Source ${n}">${n}</button></sup>`);
    const chap = (n, id, inner, cls = "") => `<section class="chapter ${cls}" id="ch-${id}"><div class="num">${String(n).padStart(2, "0")}</div><h2>${SECTIONS[n - 1][1]}</h2>${inner}</section>`;
    const people = `<ul class="people">${e.people.map(p => `<li class="person ${p.img ? "has-img" : ""}">${p.img ? `<div class="p-img" role="img" aria-label="${esc(MEDIA[p.img].cap)}" style="${bg(p.img, 400)}"></div>` : ""}<div class="p-body"><h3>${p.n}</h3><p>${p.r}</p></div></li>`).join("")}</ul>
      ${e.people.some(p => p.img) ? `<p class="credit" style="margin-top:12px">Portraits: ${e.people.filter(p => p.img).map(p => `${esc(p.n)} — ${credit(MEDIA[p.img])}`).join("; ")}.</p>` : ""}`;
    const sources = `<div class="sources" id="src-${e.id}"><h3>Sources for this section</h3><ol>${e.sources.map(([t, u], j) => `<li id="s-${e.id}-${j + 1}">${t}${u ? ` <a href="${u}" target="_blank" rel="noopener">Link ↗</a>` : ""}</li>`).join("")}</ol></div>`;
    const happened = `<div class="verify"><span>✓</span><div><b>Sourced account.</b> Every factual claim and quotation in this section is linked to a numbered source. Click a red number to see it.</div></div>
      <div class="prose">${fn(e.happened)}</div>
      ${(e.video || []).map(v => figure(v)).join("")}
      ${e.gallery && e.gallery.length ? `<div class="gallery">${e.gallery.map(gk => figure(gk, 800)).join("")}</div>` : ""}
      ${sources}`;
    const similar = `<div class="similar">${e.similar.map(s => s.id && byId[s.id]
      ? `<button class="sim int" data-go="${s.id}"><small>On this site · ${byId[s.id].year}</small><b>${esc(byId[s.id].title)}</b><span>${esc(byId[s.id].teaser)}</span></button>`
      : `<a class="sim" href="${s.url}" target="_blank" rel="noopener"><small>Elsewhere ↗</small><b>${s.name}</b><span>${s.text}</span></a>`).join("")}</div>`;
    const more = `<ul class="more">${e.more.map(([t, l, u]) => `<li><span class="ty">${TYPES[t] || t}</span><span>${u ? `<a href="${u}" target="_blank" rel="noopener">${l}</a>` : l}</span></li>`).join("")}</ul>`;
    const hm = MEDIA[e.hero];

    vc.innerHTML = `
      <header class="s-hero"><div class="wrap">
        <div><div class="tag">${THEMES[e.theme]}</div><h1 id="s-title">${esc(e.title)}</h1><p class="teaser">${esc(e.teaser)}</p>
          <dl class="facts"><div><dt>When</dt><dd>${esc(e.date)}</dd></div><div><dt>Where</dt><dd>${esc(e.place)}</dd></div></dl></div>
        ${hm ? `<figure class="media"><div class="ph"><img src="${fileUrl(hm.f, 1200)}" alt="${esc(hm.cap)}" onerror="this.closest('figure').classList.add('noimg')"></div><figcaption>${esc(hm.cap)} ${credit(hm)}</figcaption></figure>` : ""}
      </div></header>
      <div class="s-body"><div class="wrap">
        <nav class="toc" aria-label="Sections"><ol>${SECTIONS.map(([id, t]) => `<li><a href="#" data-ch="${id}">${t}</a></li>`).join("")}</ol></nav>
        <article>
          ${chap(1, "background", `<div class="prose">${e.background}</div>`)}
          ${chap(2, "people", people)}
          ${chap(3, "happened", happened)}
          ${chap(4, "next", `<div class="prose">${e.next}</div>`)}
          <div class="why-box">${chap(5, "why", `<div class="prose">${e.why}</div>`)}</div>
          ${chap(6, "similar", similar)}
          ${chap(7, "more", more)}
          <div class="pager">
            <button class="pv" ${prev ? "" : "disabled"}><small>← Earlier · ${prev ? prev.year : ""}</small><b>${prev ? esc(prev.title) : ""}</b></button>
            <button class="nx" ${next ? "" : "disabled"}><small>Later · ${next ? next.year : ""} →</small><b>${next ? esc(next.title) : ""}</b></button>
          </div>
        </article>
      </div></div>`;
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
  }
  function scrollToEl(el, off = 70) { view.scrollTo({ top: el.getBoundingClientRect().top + view.scrollTop - off, behavior: "smooth" }); }
  function spy() {
    if (!current) return;
    let cur = "background";
    vc.querySelectorAll(".chapter").forEach(s => { if (s.getBoundingClientRect().top < 200) cur = s.id.slice(3); });
    vc.querySelectorAll(".toc a").forEach(a => a.classList.toggle("cur", a.dataset.ch === cur));
  }
  view.addEventListener("scroll", spy, { passive: true });

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
    if (byId[id]) { renderStory(byId[id]); open(); }
    else if (id === "credits") { renderCredits(); open(); }
    else {
      view.classList.remove("open"); document.body.style.overflow = ""; current = null;
      document.title = "From Below — an atlas of radical history";
      if (id === "about" || id === "stories") { const el = document.getElementById(id); if (el) el.scrollIntoView(); }
    }
  }
  function open() { view.classList.add("open"); document.body.style.overflow = "hidden"; hideTip(); setTimeout(() => document.getElementById("v-close").focus({ preventScroll: true }), 60); }
  window.addEventListener("hashchange", route);
  document.getElementById("v-close").onclick = home;
  document.getElementById("v-home").onclick = home;
  document.getElementById("v-prev").onclick = () => { const i = EVENTS.indexOf(current); if (i > 0) go(EVENTS[i - 1].id); };
  document.getElementById("v-next").onclick = () => { const i = EVENTS.indexOf(current); if (i > -1 && i < EVENTS.length - 1) go(EVENTS[i + 1].id); };
  document.addEventListener("keydown", ev => { if (ev.key === "Escape" && view.classList.contains("open")) home(); });
  route();
})();
