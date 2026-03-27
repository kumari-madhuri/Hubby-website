/* ============================================================
   app.js — Kaushlendra Kumar Academic Site
   ============================================================ */

/* ============================================================
   Quotes — shuffled each page load, displayed via typewriter.
   Chosen for natural affinity: mathematical physics, meditation,
   Tolkien/fantasy, Hindi literature tradition, Upanishads.
   ============================================================ */
const QUOTES = [
  '"The most beautiful thing we can experience is the mysterious." — Einstein',
  '"God used beautiful mathematics in creating the world." — Dirac',
  '"What I cannot create, I do not understand." — Feynman',
  '"What we observe is not nature itself, but nature exposed to our method of questioning." — Heisenberg',
  '"Whereof one cannot speak, thereof one must be silent." — Wittgenstein',
  '"Not all those who wander are lost." — Tolkien',
  '"The butterfly counts not months but moments, and has time enough." — Tagore',
  '"Three things cannot be long hidden: the sun, the moon, and the truth." — Buddha',
  '"You yourself, as much as anybody in the entire universe, deserve your love." — Buddha',
  '"The Self is not born, nor does it ever die." — Bhagavad Gita',
  '"That by which the mind thinks — know that alone as Brahman." — Kena Upanishad',
  '"Silence is not empty. It is full of answers." — Zen saying',
];

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ============================================================
   TypeWriter Effect
   ============================================================ */
class TypeWriter {
  constructor(el, words, wait = 3500) {
    this.el = el;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.isDeleting = false;
    this.type();
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    this.txt = this.isDeleting
      ? fullTxt.substring(0, this.txt.length - 1)
      : fullTxt.substring(0, this.txt.length + 1);

    this.el.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Quotes are long — type faster, pause longer
    let typeSpeed = this.isDeleting ? 28 : 55;

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 600;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

/* ============================================================
   DOM Ready
   ============================================================ */
document.addEventListener("DOMContentLoaded", function () {

  /* ---- TypeWriter / quotes (index.html only) ---- */
  const txtElement = document.querySelector(".txt-type");
  if (txtElement) {
    // Use shuffled quotes from the constant above;
    // ignore the data-words attribute (kept for fallback only)
    const words = shuffleArray(QUOTES);
    const wait  = txtElement.getAttribute("data-wait") || 3500;
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

    smallNav.querySelectorAll(".aside-link").forEach((link) => {
      link.addEventListener("click", () => smallNav.classList.remove("show-aside"));
    });

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

  /* ---- GSAP animations ---- */
  if (typeof gsap === "undefined") return;

  if (document.querySelector(".top"))  gsap.from(".top",  { duration: 1.5, opacity: 0, y: -80, ease: "power2.out" });
  if (document.querySelector(".down")) gsap.from(".down", { duration: 1.5, opacity: 0, y:  80, ease: "power2.out" });

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
