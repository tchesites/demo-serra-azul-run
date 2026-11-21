(() => {
  "use strict";

  /* ---------- Topbar ---------- */
  const topbar = document.getElementById("topbar");
  const onScroll = () => topbar.classList.toggle("is-scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Menu mobile ---------- */
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("nav");

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    nav.classList.remove("is-open");
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    toggle.setAttribute("aria-label", open ? "Abrir menu" : "Fechar menu");
    nav.classList.toggle("is-open", !open);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  /* ---------- Contagem regressiva ---------- */
  const box = document.getElementById("countdown");
  const label = document.getElementById("countdown-label");
  const parts = {
    days: box.querySelector('[data-cd="days"]'),
    hours: box.querySelector('[data-cd="hours"]'),
    minutes: box.querySelector('[data-cd="minutes"]'),
    seconds: box.querySelector('[data-cd="seconds"]'),
  };

  const DEADLINE = new Date("2027-02-28T23:59:59-03:00");
  const RACE = new Date("2027-03-14T06:30:00-03:00");

  const pad = (n) => String(n).padStart(2, "0");

  const setClock = (diff) => {
    const total = Math.max(0, Math.floor(diff / 1000));
    parts.days.textContent = Math.floor(total / 86400);
    parts.hours.textContent = pad(Math.floor((total % 86400) / 3600));
    parts.minutes.textContent = pad(Math.floor((total % 3600) / 60));
    parts.seconds.textContent = pad(total % 60);
  };

  const tick = () => {
    const now = Date.now();
    let target;
    let text;

    if (now < DEADLINE) {
      target = DEADLINE;
      text = "Inscrições encerram em 28 de fevereiro";
    } else if (now < RACE) {
      target = RACE;
      text = "Inscrições encerradas. A largada é em 14 de março";
    } else {
      target = RACE;
      text = "A prova de 2027 já aconteceu. Até a próxima edição";
    }

    if (label.textContent !== text) label.textContent = text;
    setClock(target - now);
  };

  tick();
  window.setInterval(tick, 1000);

  /* ---------- Desenho do percurso ---------- */
  const mapa = document.querySelector(".mapa");
  const route = mapa && mapa.querySelector(".route:not(.route--dirt)");

  if (mapa && route && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    route.style.setProperty("--route-len", Math.ceil(route.getTotalLength()));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            mapa.classList.add("is-drawn");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(mapa);
  }

  /* ---------- Ano no rodapé ---------- */
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
