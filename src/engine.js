/* ================= THE VAULT ENGINE 1.1 =================
   Cases live in src/cases/*.js and push themselves onto CASES.
   Investigation runs in stages; leads cost time (scored against par);
   claims are judged Supported / Contradicted / Can't tell. */
const KEY = "the-vault-v11";
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const byId = id => CASES.find(c => c.id === id);
const STATUS = { supported: "Supported", contradicted: "Contradicted", unresolved: "Can't tell" };

function freshCase(c) {
  return { stage: 0, found: Object.fromEntries((c.stages[0].start || []).map(k => [k, true])), seen: {}, leads: {}, claims: {},
    evMiss: 0, opened: {}, grp: Object.keys(c.groups)[0], filter: "All", pins: { V: { x: 640, y: 380 } }, strings: [], notes: "",
    verdict: null, acc: { answers: {}, ev: [] } };
}
function fresh() { return { cur: null, tab: "brief", c: {} }; }
let S = fresh();
let ui = { modal: null, picking: null, connect: false, sel: null, justClaim: null, confirmReset: false, confirmAccuse: false, justLead: null };

function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
function load() { try { const r = localStorage.getItem(KEY); if (r) { const d = JSON.parse(r); if (d && d.c) S = Object.assign(fresh(), d); } } catch (e) {} }

const C = () => byId(S.cur);
function CS() { const c = C(); if (!S.c[c.id]) S.c[c.id] = freshCase(c); return S.c[c.id]; }
const EV = k => C().evidence[k];
const foundIds = () => Object.keys(C().evidence).filter(k => CS().found[k]);
const totalEv = () => Object.keys(C().evidence).length;
const allClaims = c => Object.values(c.groups).flatMap(g => g.claims);
const lastStage = c => c.stages.length - 1;
const leadsUsed = cs => Object.keys(cs.leads).length;
function claimVisible(cl, cs) { return (cl.stage || 0) <= cs.stage && (!cl.needs || cs.found[cl.needs]) && (!cl.needsClaim || cs.claims[cl.needsClaim]); }
const claimsDone = cs => Object.keys(cs.claims).length;
const claimsRight = cs => Object.values(cs.claims).filter(x => x.ok).length;

function toast(html) { const t = document.createElement("div"); t.className = "toast"; t.innerHTML = html; $("#toasts").appendChild(t); setTimeout(() => t.remove(), 3800); }
function unlock(ids, quiet) { (ids || []).forEach(id => { const cs = CS(); if (!cs.found[id]) { cs.found[id] = true; if (!quiet) toast(`New evidence: <b>${EV(id).no} · ${esc(EV(id).title)}</b>`); } }); }
function hm(t) { if (typeof t === "number") return t; const [h, m] = t.split(":").map(Number); return (h < 12 ? h + 24 : h) * 60 + m; }

/* ---------- scoring ---------- */
function score(c, cs, acc) {
  const rows = []; let pts = 0;
  c.questions.forEach((q, i) => {
    const w = i === 0 ? 100 : 30; const ok = acc.answers[q.id] === q.answer;
    rows.push([i === 0 ? "Main question" : q.short || "Second question", ok ? w : 0]); pts += ok ? w : 0;
  });
  const sc = acc.ev.filter(x => c.strong.includes(x)).length; rows.push([`Strong evidence (${sc}/3)`, sc * 10]); pts += sc * 10;
  const right = claimsRight(cs), wrong = claimsDone(cs) - right, total = allClaims(c).length;
  rows.push([`Claims judged correctly (${right}/${total})`, right * 5]); pts += right * 5;
  if (wrong) { rows.push([`Wrong calls on claims (${wrong})`, -wrong * 5]); pts -= wrong * 5; }
  const miss = Math.min(cs.evMiss, 10); if (miss) { rows.push([`Evidence that didn't fit (${cs.evMiss})`, -miss]); pts -= miss; }
  const used = leadsUsed(cs), eff = Math.max(0, 20 - 5 * Math.max(0, used - c.par));
  rows.push([`Investigation: ${used} leads followed (par ${c.par})`, eff]); pts += eff;
  pts = Math.max(0, pts);
  const max = 100 + 30 * (c.questions.length - 1) + 30 + 5 * total + 20;
  const k = acc.answers[c.questions[0].id] === c.questions[0].answer, p = pts / max;
  const rank = !k ? "Case collapsed" : p >= .9 ? "Chief Inspector" : p >= .75 ? "Inspector" : p >= .6 ? "Detective Sergeant" : "Detective Constable";
  return { pts, max, rows, rank, correct: k };
}

/* ---------- case select ---------- */
function vSelect() {
  const closed = CASES.filter(c => S.c[c.id]?.verdict), solved = closed.filter(c => score(c, S.c[c.id], S.c[c.id].verdict).correct);
  $("#head").innerHTML = `<div class="docket-line"><span>EVIDENCE ROOM</span><span>CASES ON FILE: <b>${CASES.length}</b></span><span>CLOSED: <b>${closed.length}</b></span><span>SOLVED: <b>${solved.length}</b></span><span>VERSION <b>1.1</b></span></div>
  <h1 class="title flicker">The<br><span>Vault</span></h1>
  <p class="sub">Pick a docket. Follow leads, weigh every claim against the evidence, and make your call. Original whodunits set in South Africa, plus real cases from South Africa and abroad.</p>`;
  $("#tabs").innerHTML = ""; $("#tabs").style.display = "none"; $("#mainwrap").style.display = "none"; $("#select").style.display = "";
  const groupOf = c => c.real ? "real" : "fic";
  const card = c => {
    const cs = S.c[c.id]; let st = "Not opened", cls = "", stamp = "";
    if (cs) {
      if (cs.verdict) { const r = score(c, cs, cs.verdict); cls = r.correct ? "win" : "lose"; st = r.correct ? `Solved · ${r.pts}/${r.max} · ${r.rank}` : `Wrong call · ${r.pts}/${r.max}`; stamp = `<span class="solved-stamp ${cls}">${r.correct ? "Solved" : "Failed"}</span>`; }
      else st = `In progress · stage ${cs.stage + 1}/${c.stages.length} · ${Object.keys(cs.found).length}/${Object.keys(c.evidence).length} evidence`;
    }
    return `<button type="button" class="folder" data-act="open-case" data-v="${c.id}">${stamp}<span class="fno">${c.no}</span>
      <h2>${esc(c.title)}</h2><span class="where">${esc(c.place)} · ${esc(c.when)}</span>
      <span class="tags"><span class="tg ${c.real ? "real" : "fic"}">${c.real ? "Real case" : c.training ? "Fiction · training" : "Fiction · whodunit"}</span><span class="tg">${c.kind}</span>${c.isNew ? '<span class="tg new">New</span>' : ""}</span>
      <span class="bl">${esc(c.blurb)}</span><span class="status ${cls}">${st}</span></button>`;
  };
  $("#select").innerHTML = `<div class="notice"><p>The real cases involve the murder of real people, including children. They're told without graphic detail, every fact is taken from court records and news reports, and sources are listed at the end of each case. In real cases the claims you weigh are the real arguments made by police, prosecutors and defence, and no real innocent person is ever presented as a suspect.</p></div>
  <h2 class="shelf">Original whodunits</h2><div class="cases">${CASES.filter(c => !c.real).map(card).join("")}</div>
  <h2 class="shelf">Real cases</h2><div class="cases">${CASES.filter(c => c.real).map(card).join("")}</div>`;
}

/* ---------- case header ---------- */
const TABS = [["brief", "Briefing"], ["leads", "Leads"], ["evidence", "Evidence"], ["statements", "Claims"], ["board", "Board"], ["timeline", "Timeline"], ["accuse", "Verdict"]];
function renderHead() {
  const c = C(), cs = CS(); const unseen = foundIds().filter(k => !cs.seen[k]).length;
  const openClaims = allClaims(c).filter(cl => claimVisible(cl, cs) && !cs.claims[cl.id]).length;
  $("#head").innerHTML = `<button type="button" class="back" data-act="home">← All cases</button>
  <div class="docket-line"><span>CASE ${c.no}</span><span>${esc(c.docket)}</span><span>${esc(c.when)}</span></div>
  <h1 class="title">${esc(c.title)}</h1><p class="sub">${esc(c.blurb)}</p>
  <div class="stats"><span class="chip">${c.real ? "Real case" : "Fiction"}</span><span class="chip">Stage <b>${cs.stage + 1}/${c.stages.length}</b> · ${esc(c.stages[cs.stage].label)}</span>
  <span class="chip">Evidence <b>${foundIds().length}/${totalEv()}</b></span><span class="chip">Leads <b>${leadsUsed(cs)}</b> · par ${c.par}</span>
  <span class="chip">Claims <b>${claimsRight(cs)}</b> right · ${claimsDone(cs) - claimsRight(cs)} wrong</span>
  ${cs.verdict ? `<span class="chip hot">Case closed</span>` : unseen ? `<span class="chip hot">${unseen} unread</span>` : ""}</div>`;
  $("#tabs").style.display = "";
  $("#tabs").innerHTML = TABS.map(([k, l]) => {
    const dot = (k === "evidence" && unseen) || (k === "statements" && openClaims) ? '<span class="dot"></span>' : "";
    return `<button class="tab" role="tab" data-act="tab" data-v="${k}" aria-selected="${S.tab === k}">${l}${dot}</button>`;
  }).join("");
}

/* ---------- views ---------- */
function vBrief() {
  const c = C(), cs = CS();
  return `${c.real ? `<div class="realbar"><b>Real case</b><span>${esc(c.note)}</span></div>` : `<div class="realbar"><b>${c.training ? "Training case" : "Original whodunit"}</b><span>${esc(c.note)}</span></div>`}
  <div class="cols"><div>
  <span class="kicker">Case summary · ${esc(c.place)}</span><h2>${esc(c.title)}</h2>
  <div class="typed" style="margin-top:12px">${c.brief}</div>
  <hr class="rule"><span class="kicker">How to work the case</span>
  <ol class="typed" style="padding-left:20px;margin:8px 0 0">
    <li><b>Leads</b>: the case unfolds in ${c.stages.length} stages. Follow leads to turn up evidence. Every lead costs time, and par for this case is ${c.par}. Some leads are dead ends.</li>
    <li><b>Evidence</b>: read every item. Some evidence points to more.</li>
    <li><b>Claims</b>: judge each one <b>Supported</b>, <b>Contradicted</b> or <b>Can't tell</b>. To call it supported or contradicted, attach the evidence. A wrong call is final, so don't guess too early.</li>
    <li><b>Board</b> and <b>Timeline</b>: pin, connect and order what you know.</li>
    <li><b>Verdict</b>: once you reach the final stage, make your call. One shot.</li></ol>
  ${c.real ? `<p class="hint" style="margin-top:12px">Leads are a game device that controls the order you find the real evidence. Dead ends don't describe what police actually did.</p>` : ""}
  <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:18px"><button class="btn red" data-act="tab" data-v="leads">Start investigating</button></div>
  </div><div>
  <span class="kicker">Detective's notebook</span><p class="hint" style="margin:4px 0 8px">Your own notes for this case. Kept in this browser.</p>
  <textarea id="notes" aria-label="Notes" placeholder="What doesn't add up?">${esc(cs.notes)}</textarea>
  <hr class="rule"><span class="kicker">The questions you'll answer</span><ul class="typed" style="font-size:15px;margin:6px 0 0;padding-left:18px">${c.questions.map(q => `<li>${esc(q.label)}</li>`).join("")}</ul>
  </div></div>`;
}

function vLeads() {
  const c = C(), cs = CS(); const used = leadsUsed(cs);
  const stageBlock = (st, i) => {
    const leads = st.leads.map(l => {
      const done = cs.leads[l.id];
      return `<div class="lead ${done ? "done" : ""}">
        <div><div class="lt">${esc(l.label)}</div>${l.hint ? `<div class="lh">${esc(l.hint)}</div>` : ""}
        ${done ? `<div class="lr ${ui.justLead === l.id ? "flash" : ""}">${esc(l.result)}${(l.reveals || []).length ? ` <b>Found: ${l.reveals.map(k => EV(k).no + " · " + esc(EV(k).title)).join(", ")}.</b>` : ""}</div>` : ""}</div>
        ${done ? `<span class="lchk">Followed</span>` : `<button class="btn small" data-act="lead" data-v="${l.id}" ${cs.verdict ? "disabled" : ""}>Follow</button>`}</div>`;
    }).join("");
    return `<section class="stage ${i === cs.stage ? "cur" : ""}"><div class="stage-h"><span class="sno">Stage ${i + 1}</span><h3>${esc(st.label)}</h3></div>
      ${st.intro ? `<p class="typed" style="font-size:15px;margin:6px 0 10px">${st.intro}</p>` : ""}<div class="leads">${leads}</div></section>`;
  };
  const next = c.stages[cs.stage + 1];
  return `<span class="kicker">Leads · ${used} followed · par ${c.par}</span><h2>Where do you look next?</h2>
  <p class="hint">Each lead you follow costs time. Finish at or under par for full marks. Earlier stages stay open, so you can go back.</p>
  ${c.stages.slice(0, cs.stage + 1).map(stageBlock).reverse().join("")}
  <div class="advance">${next ? `<div><b>Next: ${esc(next.label)}</b><br><span class="hint">${esc(next.teaser || "Move the investigation forward. New evidence and claims will open up.")}</span></div><button class="btn red" data-act="advance">Move to stage ${cs.stage + 2}</button>`
    : `<div><b>Final stage reached.</b><br><span class="hint">Judge the remaining claims, then make your call.</span></div><button class="btn red" data-act="tab" data-v="accuse">Go to verdict</button>`}</div>`;
}

function vEvidence() {
  const c = C(), cs = CS(); const cats = ["All", ...new Set(Object.values(c.evidence).map(e => e.cat))];
  const items = Object.entries(c.evidence).filter(([k, e]) => cs.found[k] && (cs.filter === "All" || e.cat === cs.filter));
  const hidden = totalEv() - foundIds().length;
  return `<span class="kicker">Evidence locker</span><h2>${foundIds().length} of ${totalEv()} items recovered</h2>
  <div class="filter" role="group" aria-label="Filter evidence">${cats.map(x => `<button type="button" data-act="filter" data-v="${x}" aria-pressed="${cs.filter === x}">${x}</button>`).join("")}</div>
  <div class="ev-grid">${items.map(([k, e]) => `<button type="button" class="ev" data-act="open-ev" data-v="${k}">${!cs.seen[k] ? '<span class="new">NEW</span>' : ""}<span class="no">${e.no}</span><span class="t">${esc(e.title)}</span><span class="s">${esc(e.short)}</span></button>`).join("")}
  ${cs.filter === "All" && hidden ? `<div class="ev locked"><span class="no">+${hidden}</span><span class="t">Not yet recovered</span><span class="s">Follow leads and read what you have.</span></div>` : ""}</div>`;
}
function evModal(k) {
  const e = EV(k), cs = CS(); const pinned = !!cs.pins[k];
  return `<div class="scrim" data-act="close-scrim"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="mt">
  <button class="close" data-act="close" aria-label="Close">×</button>
  <div class="tagline"><span class="no">${e.no}</span><h2 id="mt" style="font-family:var(--display);font-size:28px;text-transform:uppercase">${esc(e.title)}</h2></div>
  <div class="meta">${esc(e.cat)} · ${esc(e.meta)}</div><div class="body">${e.body}</div>
  <div class="actions"><button class="btn" data-act="pin" data-v="${k}" ${pinned ? "disabled" : ""}>${pinned ? "Pinned to board" : "Pin to board"}</button><button class="btn" data-act="close">Close</button></div></div></div>`;
}

function vStatements() {
  const c = C(), cs = CS(); const gk = c.groups[cs.grp] ? cs.grp : Object.keys(c.groups)[0]; const g = c.groups[gk];
  const vis = k => c.groups[k].claims.filter(cl => claimVisible(cl, cs));
  const list = Object.entries(c.groups).map(([k, x]) => {
    const v = vis(k), open = v.filter(cl => !cs.claims[cl.id]).length;
    return `<button type="button" class="sus" data-act="grp" data-v="${k}" aria-pressed="${gk === k}">
    <span class="mono-badge" style="font-size:${x.init.length > 2 ? 16 : 22}px">${esc(x.init)}</span><span><span class="n">${esc(x.name)}</span><br><span class="r">${esc(x.role)}</span>${v.length ? `<br><span class="lies">${open ? open + " to judge" : "all judged"}</span>` : ""}</span></button>`;
  }).join("");
  const claims = vis(gk).map(cl => {
    const done = cs.claims[cl.id]; let inner = `<div class="q">Q: ${esc(cl.q)}</div><div class="a">"${esc(cl.a)}"</div>`;
    if (done) {
      const right = done.ok;
      inner += `<div class="reply"><span class="stamp ${ui.justClaim === cl.id ? "anim" : ""} ${right ? "ok" : ""}">${right ? STATUS[cl.truth] : "Wrong call"}</span>
        ${right ? "" : `<div class="q">You said: ${STATUS[done.status]}. The record says: ${STATUS[cl.truth]}.</div>`}
        ${done.ev ? `<div class="q">Evidence: ${EV(done.ev).no} · ${esc(EV(done.ev).title)}</div>` : ""}${esc(cl.reply || "")}</div>`;
    } else if (ui.picking && ui.picking.id === cl.id) {
      inner += `<div class="reply"><div class="q">Which evidence shows it's ${ui.picking.status === "supported" ? "true" : "false"}?</div><div class="picker">${foundIds().map(k => `<button type="button" data-act="pick-ev" data-v="${k}"><span class="no">${EV(k).no}</span>${esc(EV(k).title)}</button>`).join("")}</div><div class="row"><button class="btn small" data-act="cancel-pick">Back</button></div></div>`;
    } else {
      inner += `<div class="row judge"><button class="btn small" data-act="judge" data-v="${cl.id}" data-s="supported" ${cs.verdict ? "disabled" : ""}>Supported</button><button class="btn small" data-act="judge" data-v="${cl.id}" data-s="contradicted" ${cs.verdict ? "disabled" : ""}>Contradicted</button><button class="btn small" data-act="judge" data-v="${cl.id}" data-s="unresolved" ${cs.verdict ? "disabled" : ""}>Can't tell</button></div>`;
    }
    return `<div class="stmt ${done ? (done.ok ? "okc" : "lie") : ""}">${inner}</div>`;
  }).join("") || `<p class="typed">Nothing on record yet. Move the investigation forward.</p>`;
  const pk = "S:" + gk;
  return `<span class="kicker">${c.real ? "Claims on record" : "Interview room"}</span><h2>Weigh every claim</h2>
  <p class="hint">Some claims are true, some are lies, and some can't be settled by the evidence. A wrong call is final.</p>
  <div class="suspects">${list}</div>
  <div class="profile"><span class="mono-badge" style="font-size:${g.init.length > 2 ? 24 : 38}px">${esc(g.init)}</span><div><h3 style="font-family:var(--display);font-size:26px;text-transform:uppercase">${esc(g.name)}</h3>
  <div class="kicker">${esc(g.role)}</div><p style="margin:6px 0 8px">${esc(g.bio)}</p>
  <button class="btn small" data-act="pin" data-v="${pk}" ${cs.pins[pk] ? "disabled" : ""}>${cs.pins[pk] ? "Pinned to board" : "Pin to board"}</button></div></div>
  <div class="typed">${claims}</div>`;
}

function cardInfo(id) {
  const c = C();
  if (id === "V") return { cls: "victim", ...c.victim };
  if (id.startsWith("S:")) { const g = c.groups[id.slice(2)]; return { cls: "photo", no: g.init, t: g.name, s: g.role }; }
  const e = c.evidence[id]; return { cls: "", no: e.no, t: e.title, s: e.short };
}
function vBoard() {
  const c = C(), cs = CS();
  const cards = Object.entries(cs.pins).map(([id, p]) => { const x = cardInfo(id);
    return `<div class="pc ${x.cls} ${ui.sel === id ? "sel" : ""}" data-pin="${esc(id)}" style="left:${p.x}px;top:${p.y}px"><span class="pin"></span>${id !== "V" ? `<button class="x" data-act="unpin" data-v="${esc(id)}" aria-label="Remove from board">×</button>` : ""}
    <div class="no">${esc(x.no)}</div><div class="t">${esc(x.t)}</div><div>${esc(x.s)}</div></div>`; }).join("");
  const unpinned = [...foundIds(), ...Object.keys(c.groups).map(k => "S:" + k)].filter(id => !cs.pins[id]);
  return `<span class="kicker">Investigation board</span><h2>Pin it. Tie it. See it.</h2>
  <div class="board-bar"><button class="btn ${ui.connect ? "red" : ""}" data-act="connect">${ui.connect ? "Tying string… click two cards" : "Tie red string"}</button>
  <select id="addpin" aria-label="Pin an item" style="font:inherit;padding:6px;border-radius:3px;border:1px solid #b29f78;background:#fbf5e6;color:var(--paper-ink);max-width:260px">
  <option value="">Pin an item…</option>${unpinned.map(id => `<option value="${esc(id)}">${esc(cardInfo(id).no + " · " + cardInfo(id).t)}</option>`).join("")}</select>
  <span class="hint">Drag cards to arrange them. Click a string to cut it.</span></div>
  <div class="board-wrap" id="bw"><div class="board" id="board"><svg id="strings"></svg>${cards}</div></div>`;
}
function drawStrings() { const svg = $("#strings"); if (!svg) return; const cs = CS();
  svg.innerHTML = cs.strings.map(([a, b], i) => { const pa = cs.pins[a], pb = cs.pins[b]; if (!pa || !pb) return ""; return `<line data-i="${i}" x1="${pa.x + 88}" y1="${pa.y + 2}" x2="${pb.x + 88}" y2="${pb.y + 2}"/>`; }).join(""); }

function vTimeline() {
  const c = C(), cs = CS(); const ev = [];
  foundIds().forEach(k => (c.evidence[k].events || []).forEach(e => ev.push({ s: e.s !== undefined ? e.s : hm(e.t), t: e.t, x: e.x, src: k })));
  ev.sort((a, b) => a.s - b.s);
  const bands = (c.bands || []).filter(b => cs.found[b.needs]).map(b => ({ ...b, f: hm(b.from), to2: hm(b.to) }));
  const rows = ev.map(e => { const cl = bands.filter(b => e.s >= b.f && e.s <= b.to2).map(b => b.cls).join(" ");
    return `<div class="tl-row ${cl}"><div class="tm">${esc(e.t)}</div><div class="dot"></div><div>${esc(e.x)}<div class="src">Source: ${EV(e.src).no} · ${esc(EV(e.src).title)}</div></div></div>`; }).join("");
  const legend = bands.map(b => b.cls === "tod" ? `<span><i style="background:#e2552f33"></i>${esc(b.label)}</span>` : `<span><i style="background:repeating-linear-gradient(-45deg,#2b231833 0 4px,transparent 4px 8px)"></i>${esc(b.label)}</span>`).join("");
  return `<span class="kicker">Reconstruction</span><h2>What happened, in order</h2>
  ${legend ? `<div class="legend">${legend}</div>` : ""}
  <p class="hint">${ev.length} dated events from ${foundIds().length} pieces of evidence. Uncover more to fill the gaps.</p>
  <div class="tl">${rows || '<p class="typed">No dated events yet.</p>'}</div>`;
}

function vAccuse() {
  const c = C(), cs = CS();
  if (cs.verdict) { const r = score(c, cs, cs.verdict); const q0 = c.questions[0];
    return `<div class="verdict"><span class="kicker">${c.real ? "Your call vs. the real outcome" : "Verdict"}</span>
    <div class="big" style="color:${r.correct ? "var(--paper-ink)" : "var(--tag)"}">${r.correct ? (c.real ? "You got it right" : "Case closed") : (c.real ? "You got it wrong" : "Wrong person")}</div>
    <div class="score">${r.pts} / ${r.max} · ${r.rank}</div></div>
    <div class="breakdown">${r.rows.map(([a, b]) => `<div><span>${a}</span><span>${b > 0 ? "+" : ""}${b}</span></div>`).join("")}</div>
    <div class="breakdown">${c.questions.map(q => { const mine = q.options.find(o => o.id === cs.verdict.answers[q.id]), real = q.options.find(o => o.id === q.answer);
      return `<div class="qa"><span>${esc(q.label)}</span><span>You: ${esc(mine ? mine.label : "—")}${mine && mine.id === real.id ? " ✓" : `<br>Answer: ${esc(real.label)}`}</span></div>`; }).join("")}</div>
    <hr class="rule"><div class="story typed"><span class="kicker">${c.real ? "What the courts found" : "What really happened"}</span>${c.verdict}</div>
    ${c.memorial ? `<div class="memorial">${esc(c.memorial)}</div>` : ""}
    ${(c.sources || []).length ? `<div class="sources"><span class="kicker">Sources</span><ol>${c.sources.map(s => `<li><a href="${esc(s.u)}" target="_blank" rel="noopener">${esc(s.t)}</a></li>`).join("")}</ol></div>` : ""}
    <div style="display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin-top:22px"><button class="btn" data-act="replay">Replay this case</button><button class="btn red" data-act="home">Next case</button></div>`; }
  if (cs.stage < lastStage(c)) {
    return `<span class="kicker">Verdict</span><h2>Not yet</h2><p class="typed">The case isn't ready for a verdict. You're on stage ${cs.stage + 1} of ${c.stages.length}: <b>${esc(c.stages[cs.stage].label)}</b>. Move the investigation forward from the Leads tab.</p>
    <button class="btn red" data-act="tab" data-v="leads">Go to leads</button>`;
  }
  const a = cs.acc; const ready = c.questions.every(q => a.answers[q.id]) && a.ev.length === 3;
  const openClaims = allClaims(c).filter(cl => claimVisible(cl, cs) && !cs.claims[cl.id]).length;
  const radios = q => `<fieldset><legend>${esc(q.label)}</legend><div class="opts">${q.options.map(o => `<label class="opt"><input type="radio" name="q_${q.id}" value="${o.id}" ${a.answers[q.id] === o.id ? "checked" : ""}><span><b>${esc(o.label)}</b>${o.sub ? `<br><span class="hint">${esc(o.sub)}</span>` : ""}</span></label>`).join("")}</div></fieldset>`;
  return `<span class="kicker">${c.real ? "Make your call" : "Charge sheet"}</span><h2>${c.real ? "What happened?" : "Make your accusation"}</h2>
  <p class="hint">One attempt. You've recovered ${foundIds().length} of ${totalEv()} items.${openClaims ? ` ${openClaims} claim${openClaims > 1 ? "s are" : " is"} still unjudged, and they score points too.` : ""}</p>
  <form id="accform">${c.questions.map(radios).join("")}
  <fieldset><legend>Your three strongest pieces of evidence <span class="hint" style="font-family:var(--body);font-size:15px;text-transform:none">(${a.ev.length}/3 chosen)</span></legend><div class="opts">${foundIds().map(k => `<label class="opt"><input type="checkbox" name="ev" value="${k}" ${a.ev.includes(k) ? "checked" : ""} ${!a.ev.includes(k) && a.ev.length >= 3 ? "disabled" : ""}><span><b>${EV(k).no}</b> ${esc(EV(k).title)}</span></label>`).join("")}</div></fieldset>
  ${ui.confirmAccuse ? `<div class="stmt lie"><div class="a">This is final. Lock in your answers?</div><div class="row" style="gap:8px"><button type="button" class="btn" data-act="cancel-accuse">Not yet</button><button type="button" class="btn red" data-act="do-accuse">Lock it in</button></div></div>`
    : `<button type="button" class="btn red" data-act="accuse" ${ready ? "" : "disabled"}>${c.real ? "Lock in my answer" : "File charges"}</button>`}</form>`;
}

function resetModal() { return `<div class="scrim" data-act="close-scrim"><div class="modal" role="dialog" aria-modal="true"><h2 style="font-family:var(--display);text-transform:uppercase">Clear all progress?</h2>
<p>Every case, note and board will be reset.</p><div class="actions"><button class="btn" data-act="close">Keep going</button><button class="btn red" data-act="reset-all">Clear everything</button></div></div></div>`; }

/* ---------- render ---------- */
function render() {
  if (!S.cur) { vSelect(); $("#modal-root").innerHTML = ui.confirmReset ? resetModal() : ""; save(); return; }
  $("#select").style.display = "none"; $("#mainwrap").style.display = "";
  renderHead();
  $("#view").innerHTML = { brief: vBrief, leads: vLeads, evidence: vEvidence, statements: vStatements, board: vBoard, timeline: vTimeline, accuse: vAccuse }[S.tab]();
  $("#modal-root").innerHTML = ui.modal ? evModal(ui.modal) : (ui.confirmReset ? resetModal() : "");
  if (S.tab === "board") drawStrings();
  ui.justClaim = null; ui.justLead = null; save();
}
function openEvidence(k) { ui.modal = k; const cs = CS(); if (!cs.seen[k]) { cs.seen[k] = true; unlock(EV(k).reveals); } render(); setTimeout(() => { const x = document.querySelector(".modal .close"); x && x.focus(); }, 0); }
function pin(id) { const cs = CS(); const n = Object.keys(cs.pins).length;
  const spots = [[300, 120], [980, 120], [300, 560], [980, 560], [640, 90], [640, 680], [90, 330], [1200, 330], [120, 90], [1240, 90], [120, 720], [1240, 720], [470, 320], [830, 320], [470, 700], [830, 700], [90, 520], [1240, 520], [640, 820], [300, 820]];
  const p = spots[(n - 1) % spots.length]; cs.pins[id] = { x: p[0] + (n > 20 ? (n - 20) * 12 : 0), y: p[1] + (n > 20 ? (n - 20) * 12 : 0) }; toast(`Pinned <b>${esc(cardInfo(id).t)}</b> to the board`); }
function resetUi() { ui = { modal: null, picking: null, connect: false, sel: null, justClaim: null, confirmReset: false, confirmAccuse: false, justLead: null }; }
function toTop() { window.scrollTo({ top: 0 }); }
function findClaim(id) { return allClaims(C()).find(x => x.id === id); }
function lockClaim(cl, status, ev) {
  const cs = CS(); const ok = status === cl.truth;
  cs.claims[cl.id] = { status, ev: ev || null, ok }; ui.justClaim = cl.id; ui.picking = null;
  unlock(cl.unlocks);
  toast(ok ? `<b>Correct.</b> ${STATUS[cl.truth]}.` : `<b>Wrong call.</b> The record says: ${STATUS[cl.truth]}.`);
}

/* ---------- events ---------- */
document.addEventListener("click", e => {
  const el = e.target.closest("[data-act]"); if (!el) return; const a = el.dataset.act, v = el.dataset.v;
  if (a === "close-scrim" && e.target !== el) return;
  switch (a) {
    case "open-case": S.cur = v; S.tab = "brief"; CS(); resetUi(); render(); toTop(); break;
    case "home": S.cur = null; resetUi(); render(); toTop(); break;
    case "tab": S.tab = v; ui.picking = null; ui.confirmAccuse = false; render(); break;
    case "filter": CS().filter = v; render(); break;
    case "open-ev": openEvidence(v); break;
    case "close": case "close-scrim": ui.modal = null; ui.confirmReset = false; render(); break;
    case "pin": pin(v); render(); break;
    case "unpin": { const cs = CS(); delete cs.pins[v]; cs.strings = cs.strings.filter(([x, y]) => x !== v && y !== v); render(); break; }
    case "grp": { const cs = CS(); cs.grp = v; ui.picking = null; if (!cs.opened[v]) { cs.opened[v] = true; unlock(C().groups[v].onOpen); } render(); break; }
    case "lead": { const cs = CS(); const l = C().stages.flatMap(s => s.leads).find(x => x.id === v); if (!l || cs.leads[v]) break;
      cs.leads[v] = true; ui.justLead = v; unlock(l.reveals); if (!(l.reveals || []).length) toast(`<b>Dead end.</b> That lead cost you time.`); render(); break; }
    case "advance": { const c = C(), cs = CS(); if (cs.stage < lastStage(c)) { cs.stage++; const st = c.stages[cs.stage]; unlock(st.start, true);
      toast(`<b>Stage ${cs.stage + 1}: ${esc(st.label)}.</b> New leads and claims are open.`); render(); toTop(); } break; }
    case "judge": { const cl = findClaim(v); if (!cl || CS().claims[v]) break; const st = el.dataset.s;
      if (st === "unresolved") { lockClaim(cl, st, null); render(); } else { ui.picking = { id: v, status: st }; render(); } break; }
    case "pick-ev": { const cs = CS(); const cl = findClaim(ui.picking && ui.picking.id); if (!cl) break; const st = ui.picking.status;
      if (st !== cl.truth) { lockClaim(cl, st, v); }
      else if ((cl.ev || []).includes(v)) { lockClaim(cl, st, v); }
      else { cs.evMiss++; toast(`<b>That evidence doesn't show it.</b> Try another piece, or go back and choose differently.`); }
      render(); break; }
    case "cancel-pick": ui.picking = null; render(); break;
    case "connect": ui.connect = !ui.connect; ui.sel = null; render(); break;
    case "accuse": ui.confirmAccuse = true; render(); break;
    case "cancel-accuse": ui.confirmAccuse = false; render(); break;
    case "do-accuse": { const cs = CS(); cs.verdict = { answers: { ...cs.acc.answers }, ev: [...cs.acc.ev] }; ui.confirmAccuse = false; render(); toTop(); break; }
    case "replay": S.c[S.cur] = freshCase(C()); S.tab = "brief"; resetUi(); render(); toTop(); break;
    case "ask-reset": ui.confirmReset = true; render(); break;
    case "reset-all": S = fresh(); resetUi(); render(); toTop(); break;
  }
});
document.addEventListener("keydown", e => { if (e.key === "Escape" && (ui.modal || ui.confirmReset)) { ui.modal = null; ui.confirmReset = false; render(); } });
document.addEventListener("input", e => { if (e.target.id === "notes") { CS().notes = e.target.value; save(); } });
document.addEventListener("change", e => {
  if (e.target.id === "addpin" && e.target.value) { pin(e.target.value); render(); return; }
  if (e.target.closest("#accform")) { const fd = new FormData($("#accform")); const answers = {};
    C().questions.forEach(q => { const x = fd.get("q_" + q.id); if (x) answers[q.id] = x; });
    CS().acc = { answers, ev: fd.getAll("ev").slice(0, 3) }; ui.confirmAccuse = false; render(); }
});
let drag = null;
document.addEventListener("pointerdown", e => {
  const line = e.target.closest("#strings line"); if (line) { CS().strings.splice(+line.dataset.i, 1); drawStrings(); save(); return; }
  const card = e.target.closest(".pc"); if (!card || e.target.closest("button")) return; const id = card.dataset.pin;
  if (ui.connect) { if (!ui.sel) { ui.sel = id; card.classList.add("sel"); } else if (ui.sel !== id) { const cs = CS();
    if (!cs.strings.some(([a, b]) => (a === ui.sel && b === id) || (a === id && b === ui.sel))) cs.strings.push([ui.sel, id]); ui.sel = null; render(); } return; }
  e.preventDefault(); const p = CS().pins[id]; drag = { id, card, sx: e.clientX, sy: e.clientY, ox: p.x, oy: p.y }; card.setPointerCapture(e.pointerId); card.style.zIndex = 10;
});
document.addEventListener("pointermove", e => { if (!drag) return; const p = CS().pins[drag.id];
  p.x = Math.max(0, Math.min(1500 - 180, drag.ox + e.clientX - drag.sx)); p.y = Math.max(8, Math.min(950 - 120, drag.oy + e.clientY - drag.sy));
  drag.card.style.left = p.x + "px"; drag.card.style.top = p.y + "px"; drawStrings(); });
document.addEventListener("pointerup", () => { if (drag) { drag.card.style.zIndex = ""; drag = null; save(); } });
