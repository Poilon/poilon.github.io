(() => {
  "use strict";
  document.documentElement.classList.add("js");
  const nav = document.getElementById("siteNav");
  const toggle = document.querySelector("[data-nav-toggle]");
  const buttons = document.querySelectorAll("[data-lang-btn]");
  const supported = ["fr", "en"];
  let language = "fr";

  function updateToggleLabel() {
    const key = nav.classList.contains("is-open")
      ? "nav.toggleCloseLabel"
      : "nav.toggleOpenLabel";
    toggle.querySelector(".sr-only").textContent = translations[language][key];
  }

  function setLanguage(locale) {
    language = supported.includes(locale) ? locale : "fr";
    document.documentElement.lang = language;
    try {
      localStorage.setItem("poilon-lang", language);
    } catch {
      /* Storage can be disabled. */
    }
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = translations[language][el.dataset.i18n];
      if (!value) return;
      if (el.dataset.i18nHtml === "true") el.innerHTML = value;
      else el.textContent = value;
    });
    buttons.forEach((button) => {
      const active = button.dataset.lang === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.getElementById("year").textContent = new Date().getFullYear();
    nav.setAttribute(
      "aria-label",
      language === "fr" ? "Navigation principale" : "Main navigation",
    );
    document.title =
      language === "fr"
        ? "Poilon Software · Développement web & mobile"
        : "Poilon Software · Web & mobile development";
    document.querySelector('meta[name="description"]').content =
      language === "fr"
        ? "Applications web et mobiles, du développement à la mise en ligne. Découvrez ComptaCrypto, Carabin, Poum et Carbono."
        : "Web and mobile applications, from development to deployment. Explore ComptaCrypto, Carabin, Poum and Carbono.";
    updateToggleLabel();
  }

  function closeMenu(returnFocus = false) {
    nav.classList.remove("is-open");
    toggle.classList.remove("is-active");
    toggle.setAttribute("aria-expanded", "false");
    updateToggleLabel();
    if (returnFocus) toggle.focus();
  }
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-active", open);
    toggle.setAttribute("aria-expanded", String(open));
    updateToggleLabel();
  });
  nav
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", () => closeMenu()));
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target))
      closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open"))
      closeMenu(true);
  });
  document.addEventListener("focusin", (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target))
      closeMenu();
  });
  window
    .matchMedia("(min-width: 801px)")
    .addEventListener("change", () => closeMenu());
  buttons.forEach((button) =>
    button.addEventListener("click", () => setLanguage(button.dataset.lang)),
  );
  let initial = navigator.language.toLowerCase().startsWith("en") ? "en" : "fr";
  try {
    const stored = localStorage.getItem("poilon-lang");
    if (supported.includes(stored)) initial = stored;
  } catch {
    /* Fall back to the browser language. */
  }
  setLanguage(initial);
})();
