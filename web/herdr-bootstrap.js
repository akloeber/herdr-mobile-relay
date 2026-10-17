const e = new URL(window.__HERDR_ENTRY__ || "/builds/0.22.10-409-ae303958c5feb126/index.html", location);
  e.search = location.search;
  e.hash = location.hash;
  location.replace(e);
