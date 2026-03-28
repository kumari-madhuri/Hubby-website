/* ============================================================
   app.js — Kaushlendra Kumar Academic Site
   ============================================================ */

/* ============================================================
   Quotes — shuffled on every page load.
   Categories: physics/maths, Buddhism/Vipassana, Upanishads/Gita,
   Kabir/Tagore/Hindi tradition, Tolkien, Philosophy.
   ============================================================ */
const QUOTES = [
  /* Structure, geometry, necessity — the mathematical spine */
  "God used beautiful mathematics in creating the world. — Dirac",
  "A theory with mathematical beauty is more likely to be correct. — Dirac",
  "What I cannot create, I do not understand. — Feynman",
  "Nature uses only the longest threads to weave her patterns. — Feynman",
  "The most incomprehensible thing about the world is that it is comprehensible. — Einstein",
  "Pure mathematics is, in its way, the poetry of logical ideas. — Einstein",
  "The boundary of a boundary is zero. — Wheeler",
  "Space is not simply the stage on which the drama of physics unfolds — it is part of the cast. — Penrose",
  "The miracle of the appropriateness of mathematics for the formulation of physics is a wonderful gift. — Wigner",
  "Physics is not about how the world is; it is about what we can say about the world. — Bohr",
  "What we observe is not nature itself, but nature exposed to our method of questioning. — Heisenberg",
  /* Precise philosophy */
  "Whereof one cannot speak, thereof one must be silent. — Wittgenstein",
  "The limits of my language mean the limits of my world. — Wittgenstein",
  "Wonder is the beginning of wisdom. — Socrates",
  /* Upanishads and Gita — short, sharp */
  "That by which the mind thinks — know that alone as Brahman. — Kena Upanishad",
  "Tat tvam asi. — Chandogya Upanishad",
  "From the unreal lead me to the real; from darkness lead me to light. — Brihadaranyaka Upanishad",
  "Let right deeds be thy motive, not the fruit which comes from them. — Bhagavad Gita",
  /* Kabir — Hindi tradition */
  "Pothi padh padh jag mua, pandit bhaya na koi — dhai aakhar prem ka, padhe so pandit hoye. — Kabir",
  "Bura jo dekhan main chala, bura na milya koi — jo man khoja aapna, mujhse bura na koi. — Kabir",
  /* Buddhism */
  "Three things cannot be long hidden: the sun, the moon, and the truth. — Buddha",
  "Work out your own salvation. Do not depend on others. — Buddha",
  /* Tolkien — the wanderer strand */
  "Not all those who wander are lost. — Tolkien",
  "All we have to decide is what to do with the time that is given us. — Tolkien",
];

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

/* ============================================================
   TypeWriter
   ============================================================ */
class TypeWriter {
  constructor(el, words, wait) {
    this.el       = el;
    this.words    = words;
    this.txt      = "";
    this.wordIndex = 0;
    this.wait     = parseInt(wait, 10) || 7000;
    this.isDeleting = false;
    this.type();
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    this.txt = this.isDeleting
      ? fullTxt.substring(0, this.txt.length - 1)
      : fullTxt.substring(0, this.txt.length + 1);

    this.el.innerHTML = "<span class=\"txt\">" + this.txt + "</span>";

    let typeSpeed = this.isDeleting ? 28 : 48;

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 600;
    }

    setTimeout(function() { this.type(); }.bind(this), typeSpeed);
  }
}

/* ============================================================
   DOM Ready
   ============================================================ */
document.addEventListener("DOMContentLoaded", function () {

  /* Typewriter / quotes (index.html only) */
  var txtElement = document.querySelector(".txt-type");
  if (txtElement) {
    var wait  = txtElement.getAttribute("data-wait") || 7000;
    new TypeWriter(txtElement, shuffleArray(QUOTES), wait);
  }

  /* Scroll indicator fade (index.html only) */
  var scrollDown = document.querySelector(".scroll-down");
  if (scrollDown) {
    window.addEventListener("scroll", function () {
      scrollDown.classList.toggle("scroll-hide", window.pageYOffset > 120);
    });
  }

  /* Mobile sidebar nav */
  var navToggle = document.querySelector("#nav-toggle");
  var smallNav  = document.querySelector(".small-nav");
  var closeBtn  = document.querySelector(".close-btn");

  if (navToggle && smallNav && closeBtn) {
    navToggle.addEventListener("click",  function() { smallNav.classList.add("show-aside"); });
    closeBtn.addEventListener("click",   function() { smallNav.classList.remove("show-aside"); });

    var asideLinks = smallNav.querySelectorAll(".aside-link");
    asideLinks.forEach(function(link) {
      link.addEventListener("click", function() { smallNav.classList.remove("show-aside"); });
    });

    document.addEventListener("click", function(e) {
      if (
        smallNav.classList.contains("show-aside") &&
        !smallNav.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        smallNav.classList.remove("show-aside");
      }
    });
  }

  /* GSAP animations */
  if (typeof gsap === "undefined") return;

  if (document.querySelector(".top"))  gsap.from(".top",  { duration: 1.5, opacity: 0, y: -80, ease: "power2.out" });
  if (document.querySelector(".down")) gsap.from(".down", { duration: 1.5, opacity: 0, y:  80, ease: "power2.out" });

  if (typeof ScrollTrigger !== "undefined" && window.innerWidth >= 992) {
    gsap.registerPlugin(ScrollTrigger);

    var slideAnims = [
      { selector: ".right-anim",   x:  130 },
      { selector: ".right-anim-1", x:  130 },
      { selector: ".left-anim",    x: -130 },
      { selector: ".left-anim-1",  x: -130 },
    ];

    slideAnims.forEach(function(anim) {
      if (!document.querySelector(anim.selector)) return;
      gsap.from(anim.selector, {
        scrollTrigger: {
          trigger: anim.selector,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
        x: anim.x,
        opacity: 0,
        duration: 1.3,
        ease: "power2.out",
      });
    });
  }
});
