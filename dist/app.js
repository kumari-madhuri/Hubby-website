/* ============================================================
   app.js — Kaushlendra Kumar Academic Site
   ============================================================ */

/* ============================================================
   TypeWriter Effect
   ============================================================ */
class TypeWriter {
  constructor(el, words, wait = 3000) {
    this.el = el;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.isDeleting = false;
    this.type();
  }

  type() {
    const current  = this.wordIndex % this.words.length;
    const fullTxt  = this.words[current];

    this.txt = this.isDeleting
      ? fullTxt.substring(0, this.txt.length - 1)
      : fullTxt.substring(0, this.txt.length + 1);

    this.el.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = this.isDeleting ? 150 : 300;

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

/* ============================================================
   DOM Ready — all initialisation runs here
   ============================================================ */
document.addEventListener("DOMContentLoaded", function () {

  /* ---- TypeWriter (index.html only) ---- */
  const txtElement = document.querySelector(".txt-type");
  if (txtElement) {
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait  = txtElement.getAttribute("data-wait");
    new TypeWriter(txtElement, words, wait);
  }

  /* ---- Scroll indicator fade (index.html only) ---- */
  const scrollDown = document.querySelector(".scroll-down");
  if (scrollDown) {
    window.addEventListener("scroll", function () {
      scrollDown.classList.toggle("scroll-hide", window.pageYOffset > 120);
    });
  }

  /* ---- Mobile sidebar nav ---- */
  const navToggle = document.querySelector("#nav-toggle");
  const smallNav  = document.querySelector(".small-nav");
  const closeBtn  = document.querySelector(".close-btn");

  if (navToggle && smallNav && closeBtn) {
    navToggle.addEventListener("click", () => smallNav.classList.add("show-aside"));
    closeBtn.addEventListener("click",  () => smallNav.classList.remove("show-aside"));

    /* Close sidebar when any nav link is clicked */
    smallNav.querySelectorAll(".aside-link").forEach((link) => {
      link.addEventListener("click", () => smallNav.classList.remove("show-aside"));
    });

    /* Close sidebar when clicking outside */
    document.addEventListener("click", (e) => {
      if (
        smallNav.classList.contains("show-aside") &&
        !smallNav.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        smallNav.classList.remove("show-aside");
      }
    });
  }

  /* ---- GSAP animations (guard: GSAP may not be loaded on all pages) ---- */
  if (typeof gsap === "undefined") return;

  /* Entry animations — used on contact page (.top / .down) */
  if (document.querySelector(".top"))  gsap.from(".top",  { duration: 1.5, opacity: 0, y: -80, ease: "power2.out" });
  if (document.querySelector(".down")) gsap.from(".down", { duration: 1.5, opacity: 0, y:  80, ease: "power2.out" });

  /* Scroll-triggered slide-in animations (interests page, desktop only) */
  if (typeof ScrollTrigger !== "undefined" && window.innerWidth >= 992) {
    gsap.registerPlugin(ScrollTrigger);

    const slideAnims = [
      { selector: ".right-anim",   x:  130 },
      { selector: ".right-anim-1", x:  130 },
      { selector: ".left-anim",    x: -130 },
      { selector: ".left-anim-1",  x: -130 },
    ];

    slideAnims.forEach(({ selector, x }) => {
      if (!document.querySelector(selector)) return;
      gsap.from(selector, {
        scrollTrigger: {
          trigger: selector,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
        x,
        opacity: 0,
        duration: 1.3,
        ease: "power2.out",
      });
    });
  }
});
