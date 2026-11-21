/* Spoony 2.0 - démonstration interne. Moteur de l'application fictive. */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const fmt = (n, d = 0) => n.toLocaleString("fr-FR", { minimumFractionDigits: d, maximumFractionDigits: d });
  const now = () => new Date();
  const hms = (d = now()) => d.toLocaleTimeString("fr-FR") + "," + String(d.getMilliseconds()).padStart(3, "0");

  /* ---------- Icônes ---------- */
  const ICONS = {
    factory: '<path d="M3 21V9l6 4V9l6 4V5h6v16z"/><path d="M7 17h2M12 17h2M17 17h2"/>',
    building: '<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M11 21v-3h2v3"/>',
    escalator: '<path d="M3 19h4l9-11h5"/><path d="M3 15h3l9-11h6"/><circle cx="9" cy="6" r="1.5"/>',
    solar: '<path d="M4 15l2-8h12l2 8z"/><path d="M5 11h14M10 7l-1 8M14 7l1 8M12 15v5M8 20h8"/>',
    charger: '<rect x="4" y="3" width="10" height="18" rx="1.5"/><path d="M14 9h2a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V8l-2-2"/><path d="M9 7l-2 4h4l-2 4"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
    recycle: '<path d="M7 19H4l3.5-6M17 19h3l-3.5-6M12 4l-2 3.5M12 4l2 3.5"/><path d="M8 19h8M9.5 9.5L7 13M14.5 9.5L17 13"/>',
    mountain: '<path d="M2 20l7-12 4 6 3-4 6 10z"/><path d="M9 8l2 3"/>',
    kiln: '<rect x="3" y="9" width="18" height="6" rx="3"/><path d="M6 15v4M18 15v4M8 9V5h3v4"/>',
    paper: '<circle cx="7" cy="12" r="4"/><circle cx="17" cy="12" r="4"/><path d="M7 8h10M7 16h10"/>',
    steel: '<path d="M3 17h18M5 17V9h14v8"/><circle cx="9" cy="13" r="2"/><circle cx="15" cy="13" r="2"/>',
    water: '<path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/><path d="M9 15a3 3 0 0 0 3 3"/>',
    food: '<path d="M6 3v8a3 3 0 0 0 6 0V3M9 3v18M17 3c-2 2-2 7 0 9v9"/>',
    train: '<rect x="5" y="3" width="14" height="13" rx="3"/><path d="M5 10h14M8 20l2-4M16 20l-2-4"/><circle cx="9" cy="13" r=".8"/><circle cx="15" cy="13" r=".8"/>',
    port: '<path d="M4 21V5h4l10 4v4"/><path d="M8 5v16M14 13v4M11 17h6M2 21h20"/>'
  };
  const icon = (k) => '<svg viewBox="0 0 24 24">' + (ICONS[k] || ICONS.gear) + "</svg>";

  /* ---------- Rendu des kiosques ---------- */
  function renderKiosks() {
    const t = $("#k-themes"), s = $("#k-secteurs");
    SCENARIOS.forEach((sc) => {
      const c = document.createElement("article");
      c.className = "fiche";
      const isT = sc.kiosk === "theme";
      const second = isT
        ? `<a class="lk ghost" href="img/rollup-industrie-tertiaire.jpg" target="_blank" rel="noopener">Kakémono</a>`
        : `<a class="lk ghost" href="${sc.pdf}" target="_blank" rel="noopener">Plaquette PDF</a>`;
      c.innerHTML = `<div class="f-head"><img class="f-logo" src="img/logo-dotvision.png" alt="DotVision"><div class="f-ref"><b>${isT ? "THÈME" : "FICHE SECTEUR " + sc.num}</b><span>Spoony 2.0 par DotVision</span></div></div>
        <div class="f-band">${isT ? sc.vector : "Sous-comptage et pilotage énergétique"}</div>
        <h3>${sc.title}</h3><p class="f-tag">${sc.tagline}</p>
        <div class="f-img"><img src="${sc.img}" alt="${sc.title}"><span class="f-play">▶</span></div>
        ${sc.fact ? `<p class="f-fact">${sc.fact}</p>` : `<p class="f-fact">Point d'entrée : ${sc.entry}</p>`}
        <div class="f-links"><button class="lk gold">Voir l'animation</button>${second}</div>`;
      $(".lk.gold", c).addEventListener("click", () => openApp(sc.id));
      $(".f-img", c).addEventListener("click", () => openApp(sc.id));
      (isT ? t : s).appendChild(c);
    });
  }

  /* ---------- Bandeaux défilants (kiosques) ---------- */
  function initCarousels() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelectorAll("[data-carousel]").forEach((box) => {
      const tr = box.querySelector(".track");
      let paused = false;
      const step = () => (tr.firstElementChild ? tr.firstElementChild.getBoundingClientRect().width + 16 : 300);
      const next = () => {
        if (tr.scrollLeft + tr.clientWidth >= tr.scrollWidth - 4) tr.scrollTo({ left: 0, behavior: "smooth" });
        else tr.scrollBy({ left: step(), behavior: "smooth" });
      };
      box.querySelector(".car-prev").addEventListener("click", () => tr.scrollBy({ left: -step(), behavior: "smooth" }));
      box.querySelector(".car-next").addEventListener("click", next);
      box.addEventListener("mouseenter", () => (paused = true));
      box.addEventListener("mouseleave", () => (paused = false));
      box.addEventListener("focusin", () => (paused = true));
      box.addEventListener("focusout", () => (paused = false));
      tr.addEventListener("touchstart", () => (paused = true), { passive: true });
      tr.addEventListener("touchend", () => (paused = false));
      if (!reduce) setInterval(() => { if (!paused && !document.hidden) next(); }, 4500);
    });
  }

  /* ---------- État de l'application ---------- */
  const N = 140;
  let S = null, timer = null;

  function baseLoad(t, i, tick) {
    const w = { convoyeur: 0.55, compresseur: 0.72, pompe: 0.7, ventilateur: 0.68, broyeur: 0.82, machine: 0.6, robot: 0.45,
      cvc: 0.58, eclairage: 0.75, escalator: 0.5, ascenseur: 0.3, porte: 0.25, pv: 0.66, borne: 0.48, charge: 0.6, reseau: 0.35,
      four: 0.7, it: 0.8, cuisine: 0.4, chauffage: 0.62 }[t] || 0.6;
    const wave = 0.07 * Math.sin((tick + i * 17) / 9) + 0.04 * Math.sin((tick + i * 5) / 3.1);
    const burst = (t === "ascenseur" || t === "porte" || t === "robot") ? (Math.sin(tick * 1.7 + i) > 0.55 ? 0.45 : 0) : 0;
    return Math.max(0.02, w + wave + burst + (Math.random() - 0.5) * 0.05);
  }

  function openApp(id) {
    const sc = SCENARIOS.find((x) => x.id === id);
    S = {
      sc, sel: 0, tick: 0,
      series: sc.departs.map(() => []),
      drift: sc.departs.map(() => 1), driftTarget: sc.departs.map(() => 1),
      idle: sc.departs.map(() => 0), cut: 0,
      energy: sc.departs.reduce((a, d) => a + d.kw, 0) * 6.2,
      micro: 2, idles: 1, alerts: 0,
      events: [
        { t: "06:12:41,208", d: "120 ms", n: sc.departs.length, lvl: "warn", c: "Creux de tension réseau amont" },
        { t: "03:47:09,551", d: "60 ms", n: 2, lvl: "ok", c: "Micro-coupure sans arrêt machine" }
      ]
    };
    for (let k = 0; k < N; k++) step(true);
    $("#app-site").textContent = sc.site;
    $("#app-place").textContent = sc.place + " · " + sc.title;
    $("#feed").innerHTML = "";
    $$(".tabs button").forEach((b, i) => b.classList.toggle("on", i === 0));
    $$(".pane").forEach((p, i) => p.classList.toggle("on", i === 0));
    renderTree(); renderIso(); renderHarm(); renderEvents(); calc();
    $("#app").classList.add("open");
    document.body.style.overflow = "hidden";
    sc.alerts.forEach((a, i) => setTimeout(() => S && S.sc === sc && pushAlert(a.lvl, sc.departs[a.d].n, a.txt, a.reco), 900 + i * 2200));
    clearInterval(timer);
    timer = setInterval(() => { step(false); paint(); }, 650);
    paint();
  }
  function closeApp() {
    clearInterval(timer); S = null;
    $("#app").classList.remove("open");
    document.body.style.overflow = "";
  }

  function step(silent) {
    S.tick++;
    S.sc.departs.forEach((d, i) => {
      S.drift[i] += (S.driftTarget[i] - S.drift[i]) * 0.12;
      let l = baseLoad(d.t, i, S.tick);
      if (S.idle[i] > 0) { l = 0.18 + Math.random() * 0.03; S.idle[i]--; }
      let p = d.kw * l * S.drift[i];
      if (S.cut > 0) p = 0;
      const arr = S.series[i]; arr.push(p); if (arr.length > N) arr.shift();
      if (!silent && S.driftTarget[i] > 1 && !d._driftAlerted && S.drift[i] > 1.08) {
        d._driftAlerted = true;
        const pct = Math.round((S.driftTarget[i] - 1) * 100);
        pushAlert("crit", d.n, `Dérive de +${pct} % sur ${d.n} par rapport à la référence des 7 derniers jours, à production égale.`,
          "Contrôle mécanique au prochain arrêt planifié. L'automate garde la commande de l'équipement.");
        S.alerts++;
      }
    });
    if (S.cut > 0) S.cut--;
    if (!silent) S.energy += S.sc.departs.reduce((a, d, i) => a + S.series[i][S.series[i].length - 1], 0) * (0.65 / 3600) * 60;
  }

  /* ---------- Arbre des départs ---------- */
  function renderTree() {
    const t = $("#tree");
    t.innerHTML = `<div class="cab">TGBT · Armoire A1 · ${S.sc.departs.length} départs mesurés</div>` +
      S.sc.departs.map((d, i) => `<div class="dep${i === S.sel ? " on" : ""}" data-i="${i}"><span class="st" id="st${i}"></span><span class="nm">${d.n}</span><span class="pw" id="pw${i}">-</span></div>`).join("") +
      `<div class="principle">+ 4 compteurs existants remontés par passerelle Modbus, sans remplacement.</div>`;
    $$(".dep", t).forEach((el) => el.addEventListener("click", () => {
      S.sel = +el.dataset.i;
      $$(".dep", t).forEach((x) => x.classList.toggle("on", x === el));
      renderHarm(); paint();
    }));
  }

  /* ---------- Rendu temps réel ---------- */
  function paint() {
    if (!S) return;
    const sc = S.sc, last = S.series.map((a) => a[a.length - 1]);
    const total = last.reduce((a, b) => a + b, 0);
    last.forEach((p, i) => {
      const d = sc.departs[i], el = $("#pw" + i), st = $("#st" + i);
      if (!el) return;
      el.textContent = p >= 1000 ? fmt(p / 1000, 2) + " MW" : fmt(p, p < 10 ? 1 : 0) + " kW";
      st.className = "st" + (S.drift[i] > 1.06 ? " crit" : S.idle[i] > 0 ? " idle" : sc.alerts.some((a) => a.d === i && a.lvl !== "info") ? " warn" : "");
    });
    $("#k-power").innerHTML = (total >= 1000 ? fmt(total / 1000, 2) + "<em>MW</em>" : fmt(total) + "<em>kW</em>");
    $("#k-energy").innerHTML = (S.energy >= 10000 ? fmt(S.energy / 1000, 1) + "<em>MWh</em>" : fmt(S.energy) + "<em>kWh</em>");
    const avgDrift = S.drift.reduce((a, b) => a + b, 0) / S.drift.length;
    const ipe = sc.ipe.base * avgDrift;
    $("#k-ipe").innerHTML = fmt(ipe, ipe < 1 ? 3 : ipe < 20 ? 2 : 0) + "<em>" + sc.ipe.unit + "</em>";
    $("#k-ipe-l").textContent = sc.ipe.label;
    const dIpe = (avgDrift - 1) * 100;
    $("#k-ipe-d").className = "delta " + (dIpe > 0.5 ? "up" : "down");
    $("#k-ipe-d").textContent = (dIpe > 0.5 ? "+" + fmt(dIpe, 1) + " % vs référence" : "dans la référence");
    $("#k-micro").textContent = S.micro;
    $("#k-idle").textContent = S.idles;
    $("#k-alerts").textContent = $$("#feed .item").length;
    drawChart();
    const p = last[S.sel], d = sc.departs[S.sel];
    const U = d.kw >= 500 ? 6000 : 400, I = (p * 1000) / (Math.sqrt(3) * U * 0.88);
    const imb = sc.alerts.some((a) => a.d === S.sel && /phase/i.test(a.txt)) ? 0.12 : 0.02;
    $("#ph1").textContent = fmt(I * (1 + imb), 0) + " A";
    $("#ph2").textContent = fmt(I * (1 - imb / 2), 0) + " A";
    $("#ph3").textContent = fmt(I * (1 - imb / 2), 0) + " A";
    $("#selname").textContent = d.n;
  }

  function drawChart() {
    const c = $("#chart"), dpr = window.devicePixelRatio || 1;
    const W = c.clientWidth, H = c.clientHeight;
    if (c.width !== W * dpr) { c.width = W * dpr; c.height = H * dpr; }
    const g = c.getContext("2d"); g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, W, H);
    const arr = S.series[S.sel], d = S.sc.departs[S.sel];
    const max = d.kw * 1.45, pad = 34;
    const x = (i) => pad + (i / (N - 1)) * (W - pad - 8), y = (v) => H - 22 - (v / max) * (H - 40);
    g.strokeStyle = "rgba(104,174,223,.10)"; g.lineWidth = 1; g.fillStyle = "#56708F"; g.font = "11px Inter,system-ui";
    for (let k = 0; k <= 4; k++) {
      const v = (max / 4) * k, yy = y(v);
      g.beginPath(); g.moveTo(pad, yy); g.lineTo(W - 8, yy); g.stroke();
      g.fillText(v >= 1000 ? fmt(v / 1000, 1) + "M" : fmt(v), 2, yy + 4);
    }
    const ref = d.kw * 0.62;
    g.fillStyle = "rgba(60,203,140,.07)";
    g.fillRect(pad, y(ref * 1.12), W - pad - 8, y(ref * 0.88) - y(ref * 1.12));
    g.setLineDash([4, 4]); g.strokeStyle = "rgba(60,203,140,.45)";
    g.beginPath(); g.moveTo(pad, y(ref)); g.lineTo(W - 8, y(ref)); g.stroke(); g.setLineDash([]);
    const grad = g.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, "rgba(104,174,223,.35)"); grad.addColorStop(1, "rgba(104,174,223,0)");
    g.beginPath(); arr.forEach((v, i) => (i ? g.lineTo(x(i), y(v)) : g.moveTo(x(i), y(v))));
    g.lineTo(x(arr.length - 1), H - 22); g.lineTo(x(0), H - 22); g.closePath(); g.fillStyle = grad; g.fill();
    g.beginPath(); arr.forEach((v, i) => (i ? g.lineTo(x(i), y(v)) : g.moveTo(x(i), y(v))));
    g.strokeStyle = "#68AEDF"; g.lineWidth = 2; g.stroke();
    arr.forEach((v, i) => { if (v === 0) { g.fillStyle = "#FF5D5D"; g.fillRect(x(i) - 1.5, 10, 3, H - 32); } });
    const lv = arr[arr.length - 1];
    g.beginPath(); g.arc(x(arr.length - 1), y(lv), 4, 0, 7); g.fillStyle = "#F2B632"; g.fill();
    g.fillStyle = "#56708F"; g.fillText("- 90 s", pad, H - 6); g.fillText("maintenant", W - 70, H - 6);
  }

  /* ---------- Alertes de l'agent ---------- */
  function pushAlert(lvl, dep, txt, reco) {
    const f = $("#feed"), it = document.createElement("div");
    it.className = "item " + lvl;
    const lab = { crit: "Priorité haute", warn: "À traiter", info: "Optimisation" }[lvl];
    it.innerHTML = `<div class="t"><span>${hms().slice(0, 8)} · ${dep}</span><span>${lab}</span></div><p>${txt}</p>
      <div class="reco"><b>Recommandation :</b> ${reco}</div>
      <div class="act"><button class="ok">Valider</button><button>Plus tard</button></div>`;
    $$(".act button", it).forEach((b, k) => b.addEventListener("click", () => {
      $(".act", it).outerHTML = k === 0 ? `<div class="done">Validé par l'opérateur · ordre de travail créé dans la GMAO</div>` : `<div class="done" style="color:#8FA6C8">Reporté au prochain point d'équipe</div>`;
    }));
    f.prepend(it);
  }

  /* ---------- Simulations ---------- */
  const SIM = {
    drift() {
      const i = S.sel; S.sc.departs[i]._driftAlerted = false;
      S.driftTarget[i] = 1.14 + Math.random() * 0.08;
      toast("Dérive injectée sur " + S.sc.departs[i].n + ". Spoony la repère en quelques secondes.");
    },
    cut() {
      S.cut = 1; S.micro++;
      const ms = 80 + Math.round(Math.random() * 160), t = hms();
      S.events.unshift({ t, d: ms + " ms", n: S.sc.departs.length, lvl: "crit", c: "Micro-coupure, redémarrage de la ligne requis" });
      renderEvents();
      pushAlert("crit", "Tous départs", `Micro-coupure de ${ms} ms horodatée à ${t}, ${S.sc.departs.length} départs touchés.`,
        "Croiser avec le journal du distributeur et chiffrer l'arrêt induit dans l'onglet Coût d'arrêt.");
    },
    idle() {
      let i = S.sc.departs.findIndex((d) => d.t === "convoyeur");
      if (i < 0) i = S.sel;
      S.idle[i] = 14; S.idles++;
      pushAlert("info", S.sc.departs[i].n, `${S.sc.departs[i].n} tourne à vide : 18 % de sa puissance nominale, aucune charge détectée.`,
        "Arrêt automatique après 5 minutes sans charge, à paramétrer dans l'automate.");
    },
    phase() {
      const d = S.sc.departs[S.sel];
      pushAlert("info", d.n, `Inversion des phases L2 et L3 détectée à la pose sur ${d.n}.`,
        "Correction appliquée par le boîtier, sans retour de l'électricien sur site.");
      toast("Erreur de câblage corrigée par le boîtier : la pose reste valide.");
    }
  };

  /* ---------- Onglet ISO 50001 ---------- */
  function renderIso() {
    const sc = S.sc;
    const tot = sc.departs.map((d, i) => ({ n: d.n, e: S.series[i].reduce((a, b) => a + b, 0) }));
    const sum = tot.reduce((a, b) => a + b.e, 0);
    tot.sort((a, b) => b.e - a.e);
    let cum = 0;
    $("#ues").innerHTML = tot.map((r) => {
      const pct = (r.e / sum) * 100, sig = cum < 80; cum += pct;
      return `<div class="bar${sig ? " sig" : ""}"><span class="lb">${r.n}</span><span class="tr"><i style="width:${pct * 1.6}%"></i></span><span class="v">${fmt(pct, 1)} %</span></div>`;
    }).join("");
    const days = Math.max(0, Math.ceil((new Date("2027-10-11") - now()) / 864e5));
    $("#iso-days").textContent = fmt(days);
    gauge($("#gauge"), 0.86);
  }
  function gauge(c, v) {
    const dpr = window.devicePixelRatio || 1, W = 120; c.width = W * dpr; c.height = W * dpr;
    const g = c.getContext("2d"); g.scale(dpr, dpr);
    g.lineWidth = 11; g.lineCap = "round";
    g.strokeStyle = "#0A1B37"; g.beginPath(); g.arc(60, 60, 48, 0.75 * Math.PI, 2.25 * Math.PI); g.stroke();
    g.strokeStyle = "#F2B632"; g.beginPath(); g.arc(60, 60, 48, 0.75 * Math.PI, (0.75 + 1.5 * v) * Math.PI); g.stroke();
    g.fillStyle = "#fff"; g.font = "700 22px Inter,system-ui"; g.textAlign = "center"; g.fillText(Math.round(v * 100) + " %", 60, 66);
    g.fillStyle = "#7F96B8"; g.font = "10px Inter,system-ui"; g.fillText("mesuré", 60, 82);
  }

  /* ---------- Onglet qualité réseau ---------- */
  function renderHarm() {
    const ranks = [3, 5, 7, 9, 11, 13], seed = S.sel + 1;
    const vals = ranks.map((r, k) => Math.max(0.4, (14 / r) * (0.7 + ((seed * (k + 3)) % 7) / 10)));
    $("#harm").innerHTML = ranks.map((r, k) => `<div class="bar"><span class="lb">Rang ${r}</span><span class="tr"><i style="width:${vals[k] * 4.5}%"></i></span><span class="v">${fmt(vals[k], 1)} %</span></div>`).join("");
    const thd = Math.sqrt(vals.reduce((a, b) => a + b * b, 0));
    $("#thd").textContent = fmt(thd, 1) + " %";
    $("#fp").textContent = fmt(0.82 + ((seed * 7) % 13) / 100, 2);
    $("#harm-dep").textContent = S.sc.departs[S.sel].n;
  }
  function renderEvents() {
    $("#events").innerHTML = `<table><tr><th>Horodatage</th><th>Durée</th><th>Départs</th><th>Statut</th></tr>` +
      S.events.slice(0, 7).map((e) => `<tr><td class="mono">${e.t}</td><td>${e.d}</td><td>${e.n}</td><td><span class="pill ${e.lvl}">${e.c}</span></td></tr>`).join("") + `</table>`;
  }

  /* ---------- Onglet coût d'arrêt ---------- */
  function calc() {
    const v = (id) => parseFloat(($("#" + id).value || "0").replace(",", ".")) || 0;
    const ch = v("c-heure"), na = v("c-nb"), du = v("c-duree"), an = v("c-antic") / 100;
    const exp = ch * na * du, evi = exp * an;
    $("#c-exp").textContent = fmt(exp) + " €";
    $("#c-evi").textContent = fmt(evi) + " €";
    const kwh = v("c-kwh"), prix = v("c-prix");
    $("#c-energie").textContent = fmt((kwh * prix) / 1000) + " €";
  }

  /* ---------- Divers ---------- */
  let tt;
  function toast(m) { const t = $("#toast"); t.textContent = m; t.classList.add("on"); clearTimeout(tt); tt = setTimeout(() => t.classList.remove("on"), 3200); }

  document.addEventListener("DOMContentLoaded", () => {
    renderKiosks();
    initCarousels();
    $("#close").addEventListener("click", closeApp);
    document.addEventListener("keydown", (e) => e.key === "Escape" && S && closeApp());
    $$(".tabs button").forEach((b, i) => b.addEventListener("click", () => {
      $$(".tabs button").forEach((x) => x.classList.toggle("on", x === b));
      $$(".pane").forEach((p, k) => p.classList.toggle("on", k === i));
      if (i === 1) renderIso();
      if (i === 0) paint();
    }));
    $$("[data-sim]").forEach((b) => b.addEventListener("click", () => SIM[b.dataset.sim]()));
    $$(".calc input").forEach((i) => i.addEventListener("input", calc));
    $("#iso-export").addEventListener("click", () => toast("Rapport des usages énergétiques significatifs généré (simulation)."));
    window.addEventListener("resize", () => S && paint());
  });
})();
