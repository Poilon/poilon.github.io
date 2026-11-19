(() => {
  "use strict";
  const link = document.getElementById("go");
  const destination = new URL(link.href);
  destination.search = location.search;
  destination.hash = location.hash;
  link.href = destination.href;
  location.replace(destination.href);
})();
