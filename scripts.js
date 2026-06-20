(function () {
  function openTargetSource() {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (target && target.tagName.toLowerCase() === "details") {
      target.open = true;
    }
  }

  window.addEventListener("hashchange", openTargetSource);
  openTargetSource();
})();
