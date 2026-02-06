(function () {
  const banners = [
    {
      href: "https://klik.top/idmx21",
      src: "https://cdn.jsdelivr.net/gh/styleesheet/lukynecia@main/img/lukycinema/IMG_20260206_100222.png",
      alt: "DEWASPORT88"
    }
  ];

  if (!banners.length) return;

  const scriptEl = document.currentScript;
  if (!scriptEl || !scriptEl.parentNode) return;

  const linkEl = document.createElement("a");
  const imgEl  = document.createElement("img");

  linkEl.target = "_blank";
  linkEl.rel    = "nofollow noopener noreferrer";
  imgEl.loading = "lazy";
  imgEl.decoding = "async";
  imgEl.width  = 300;
  imgEl.height = 300;

  const storageKey = "indomax21_banner_index";

  function getLastIndex() {
    try {
      const raw = localStorage.getItem(storageKey);
      const num = parseInt(raw, 10);
      if (!Number.isFinite(num)) return -1;
      if (num < 0 || num >= banners.length) return -1;
      return num;
    } catch {
      return -1;
    }
  }

  function setLastIndex(val) {
    try {
      localStorage.setItem(storageKey, String(val));
    } catch {
      // ignore
    }
  }

  const lastIndex   = getLastIndex();
  const currentIndex = (lastIndex + 1) % banners.length;
  setLastIndex(currentIndex);

  function showBanner(index) {
    const b = banners[index];
    if (!b) return;
    linkEl.href  = b.href;
    imgEl.src    = b.src;
    imgEl.alt    = b.alt || "";
  }

  linkEl.appendChild(imgEl);
  scriptEl.parentNode.insertBefore(linkEl, scriptEl);
  scriptEl.parentNode.removeChild(scriptEl);

  showBanner(currentIndex);
})();
