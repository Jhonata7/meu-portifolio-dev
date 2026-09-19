(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  menuButton?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuButton?.setAttribute("aria-expanded", "false");
    });
  });

  const track = document.querySelector("[data-carousel]");
  const next = document.querySelector("[data-carousel-next]");
  const prev = document.querySelector("[data-carousel-prev]");

  const move = (direction) => {
    if (!track) return;
    const card = track.querySelector(".project-card");
    const gap = 20;
    const amount = (card?.getBoundingClientRect().width || 360) + gap;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  next?.addEventListener("click", () => move(1));
  prev?.addEventListener("click", () => move(-1));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
})();