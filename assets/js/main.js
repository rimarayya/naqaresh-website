/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SHADOW HEADER ===============*/

const shadowHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== SWIPER FAVORITES ===============*/

const swiperFavorite = new Swiper(".favorites__swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
});

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  //previously it was 2500
  duration: 1000,
  //previously it was 300 changing to 150
  delay: 150,
  reset: true, //to repeat animations
});

sr.reveal(".home__data, .favorites__container, .footer__container");
//changing from 600
sr.reveal(".home__circle, .home__img", { delay: 400, scale: 0.5 });
// changing from 1000delay
sr.reveal(".home__chips-1, .home__chips-2, .home__chips-3", {
  delay: 700,
  interval: 100,
});
sr.reveal(".home__leaf", { delay: 1200 });
//changing from 1400delay
sr.reveal(".home__tomato-1, .home__tomato-2", { delay: 1000, interval: 100 });
sr.reveal(".care__image, .contact__img", { origin: "left" });
sr.reveal(".care__list, .contact__data", { origin: "right" });
sr.reveal(".banner__items, .products__card", { interval: 100 });

const floatingImgs = document.querySelectorAll(
  ".home__almond, .home__sunflower, .home__cashew, .home__peanut, .home__pistachio, .home__walnut"
);

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const direction = window.scrollY > lastScrollY ? "down" : "up";

  if (Math.abs(window.scrollY - lastScrollY) > 20) {
    floatingImgs.forEach((img) => {
      img.classList.add("wiggle");
      img.addEventListener(
        "animationend",
        () => {
          img.classList.remove("wiggle");
        },
        { once: true }
      );
    });
    lastScrollY = window.scrollY;
  }
});

/*=============== PRODUCT FILTER BY SIZE ===============*/

const filterBtns = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".products__card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const size = btn.dataset.size;

    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Show/Hide products based on size
    products.forEach((product) => {
      if (size === "all" || product.dataset.size === size) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

/*=============== MAIN IMAGE SLIDESHOW ===============*/
const mainImg = document.querySelector(".home__img");

const mainImages = [
  "assets/img/roasted-nuts-extra.png",
  "assets/img/fancy-roasted-nuts.png",
  "assets/img/maxican-roasted-nuts.png",
  "assets/img/roasted-nuts-super-extra.png",
  "assets/img/mix-roasted-nuts.png",
  "assets/img/party-roasted-nuts.png",
  "assets/img/roasted-nuts-extra.png",
];

let currentIndex = 0;

function changeImage() {
  mainImg.classList.add("fade-out");

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % mainImages.length;
    mainImg.src = mainImages[currentIndex];

    mainImg.classList.remove("fade-out");
  }, 400); // fade duration
  // Skip transition on first load
}

setInterval(changeImage, 2000);
