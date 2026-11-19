function start(data) { if (data && data.c) { S = Object.assign(fresh(), data); } else load(); if (S.cur && !byId(S.cur)) S.cur = null; render(); }
try { window.claude?.hot?.snapshot(() => S); } catch (e) {}
window.claude?.hot?.ready ? window.claude.hot.ready(start) : start(window.claude?.hot?.data ?? {});
