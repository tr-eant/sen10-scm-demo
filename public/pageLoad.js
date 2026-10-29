/**
 * stampBuildTimestamp
 * ------------------
 * A unique page-load function that stamps the current date/time into a
 * visible <footer id="build-stamp"> element so visitors can see when the
 * page was last loaded.  This also serves as proof that the JS pipeline
 * (lint → test → deploy) is fully operational.
 */
function stampBuildTimestamp() {
  const el = document.getElementById('build-stamp');
  if (!el) {
    return null;
  }
  const now = new Date();
  const stamp = `Page loaded on: ${now.toLocaleString()}`;
  el.textContent = stamp;
  return stamp;
}

/* ---------- wire it up on page load ---------- */
if (typeof document !== 'undefined' && document.addEventListener) {
  document.addEventListener('DOMContentLoaded', stampBuildTimestamp);
}

/* ---------- export for Jest testing ---------- */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { stampBuildTimestamp };
}
