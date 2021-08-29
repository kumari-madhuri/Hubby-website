class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

const scrollDown = document.querySelector(".scroll-down");
const navToggle = document.querySelector("#nav-toggle");
const smallNav = document.querySelector(".small-nav");
const closeBtn = document.querySelector(".close-btn");

window.addEventListener("scroll", function () {
  const windowHeight = this.window.pageYOffset;
  if (windowHeight > 120) {
    scrollDown.classList.add("scroll-hide");
  } else {
    scrollDown.classList.remove("scroll-hide");
  }
});

navToggle.addEventListener("click", function () {
  smallNav.classList.add("show-aside");
});
closeBtn.addEventListener("click", function () {
  smallNav.classList.remove("show-aside");
});

const images = document.querySelectorAll(".anim");
let options = {
  rootMargin: "-200px 0px 0px 0px",
};

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.target);
    if (entry.isIntersecting) {
      entry.target.style.animation = `anim1 1.2s forwards ease-in`;
    } else {
      entry.target.style.animation = `anim2 1s forwards ease-in`;
      // entry.target.style.animation = "none";
    }
  });
}, options);
images.forEach((image) => {
  observer.observe(image);
});
