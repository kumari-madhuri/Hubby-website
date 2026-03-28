/* ============================================================
   app.js — Kaushlendra Kumar Academic Site
   ============================================================ */

/* ============================================================
   Quotes — shuffled each page load, displayed via typewriter.
   Chosen for natural affinity: mathematical physics, meditation,
   Tolkien/fantasy, Hindi literature tradition, Upanishads.
   ============================================================ */
const QUOTES = [
  /* Physics & Mathematics */
  '"The most beautiful thing we can experience is the mysterious." — Einstein',
  '"Imagination is more important than knowledge." — Einstein',
  '"God does not play dice with the universe." — Einstein',
  '"God used beautiful mathematics in creating the world." — Dirac',
  '"A theory with mathematical beauty is more likely to be correct." — Dirac',
  '"What I cannot create, I do not understand." — Feynman',
  '"Nature uses only the longest threads to weave her patterns." — Feynman',
  '"What we observe is not nature itself, but nature exposed to our method of questioning." — Heisenberg',
  '"Everything we call real is made of things that cannot be regarded as real." — Bohr',
  '"The task is not to see what has never been seen before, but to think what has never been thought before about what you see every day." — Schrödinger',
  '"If you are not completely confused by quantum mechanics, you do not understand it." — Feynman',
  '"Mathematics is the language in which God has written the universe." — Galileo',
  '"The miracle of the appropriateness of mathematics for the formulation of physics is a wonderful gift." — Wigner',
  '"To those who do not know mathematics it is difficult to get across a real feeling as to the beauty, the deepest beauty, of nature." — Feynman',
  '"The most incomprehensible thing about the world is that it is comprehensible." — Einstein',
  '"Pure mathematics is, in its way, the poetry of logical ideas." — Einstein',
  '"It is a profoundly erroneous truism that we should cultivate the habit of thinking of what we are doing." — Whitehead',
  '"Space is not simply the stage on which the drama of physics unfolds — it is part of the cast." — Penrose',
  '"Physics is not about how the world is, it is about what we can say about the world." — Bohr',

  /* Meditation, Buddhism, Vipassana */
  '"Three things cannot be long hidden: the sun, the moon, and the truth." — Buddha',
  '"Peace comes from within. Do not seek it without." — Buddha',
  '"The mind is everything. What you think, you become." — Buddha',
  '"All that we are is the result of what we have thought." — Dhammapada',
  '"Better than a thousand hollow words is one word that brings peace." — Buddha',
  '"Work out your own salvation. Do not depend on others." — Buddha',
  '"Meditate. Live purely. Be quiet. Do your work with mastery." — Buddha',
  '"Happiness is not ready-made. It comes from your own actions." — Buddha',

  /* Upanishads, Gita, Vedanta */
  '"The Self is not born, nor does it ever die." — Bhagavad Gita',
  '"The soul which is not moved, which with stoic firmness meets good and evil alike, is fit for immortality." — Bhagavad Gita',
  '"Let right deeds be thy motive, not the fruit which comes from them." — Bhagavad Gita',
  '"That by which the mind thinks — know that alone as Brahman." — Kena Upanishad',
  '"Tat tvam asi — That thou art." — Chandogya Upanishad',
  '"The Atman is that which one should know; the Atman is Brahman." — Brihadaranyaka Upanishad',
  '"From the unreal lead me to the real; from darkness lead me to light; from death lead me to immortality." — Brihadaranyaka Upanishad',
  '"As a man casts off worn-out garments, the Self casts off worn-out bodies." — Bhagavad Gita',
  '"Desire never rests by enjoyment of lusts — it grows more and more as does the fire to which fuel is added." — Mahabharata',

  /* Hindi / Kabir / Rahim / Tagore */
  '"The butterfly counts not months but moments, and has time enough." — Tagore',
  '"Where the mind is without fear and the head is held high — into that heaven of freedom, let my country awake." — Tagore',
  '"You can not cross the sea merely by standing and staring at the water." — Tagore',
  '"Dheere dheere re mana, dheere sab kuch hoye — mali seenche so ghara, ritu aaye phal hoye." — Kabir',
  '"Bura jo dekhan main chala, bura na milya koi — jo man khoja aapna, mujhse bura na koi." — Kabir',
  '"Pothi padh padh jag mua, pandit bhaya na koi — dhai aakhar prem ka, padhe so pandit hoye." — Kabir',

  /* Tolkien & Literature */
  '"Not all those who wander are lost." — Tolkien',
  '"Even the smallest person can change the course of the future." — Tolkien',
  '"I wish it need not have happened in my time. So do I, and so do all who live to see such times. But that is not for them to decide." — Tolkien',
  '"The world is indeed full of peril, and in it there are many dark places. But still there is much that is fair." — Tolkien',
  '"All we have to decide is what to do with the time that is given us." — Tolkien',
  '"There is some good in this world, and it's worth fighting for." — Tolkien',

  /* Philosophy */
  '"Whereof one cannot speak, thereof one must be silent." — Wittgenstein',
  '"The limits of my language mean the limits of my world." — Wittgenstein',
  '"God is a circle whose centre is everywhere and circumference is nowhere." — Pascal',
  '"He who has a why to live can bear almost any how." — Nietzsche',
  '"To live is to suffer, to survive is to find some meaning in the suffering." — Nietzsche',
  '"Wonder is the beginning of wisdom." — Socrates',
  '"The unexamined life is not worth living." — Socrates',
  '"We are all just walking each other home." — Ram Dass',
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
  constructor(el, words, wait = 7000) {
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
