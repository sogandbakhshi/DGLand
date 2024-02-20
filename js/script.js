/*banner and menu */
var banner = document.getElementById("banner");
var menu = document.getElementById("menu");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > banner.offsetHeight) {
    banner.classList.add("hide-banner");
    menu.style.marginTop = "0";
  } else {
    banner.classList.remove("hide-banner");
    menu.style.marginTop = "50px";
  }
});

/*swipers*/
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 7,
  breakpoints: {
    300: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    370: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    550: {
      slidesPerView: 4,
    },
    670: {
      slidesPerView: 5,
    },
    880: {
      slidesPerView: 6,
    },
    990: {
      slidesPerView: 7,
    },
  },
  spaceBetween: 10,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 3.5,
  breakpoints: {
    370: {
      slidesPerView: 2,
    },
  },
  spaceBetween: 9,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 3,
  spaceBetween: 10,
  freeMode: true,
  breakpoints: {
    300: {
      slidesPerView: 1.5,
    },
    370: {
      slidesPerView: 1.4,
    },
    500: {
      slidesPerView: 1.8,
    },
    600: {
      slidesPerView: 2.3,
    },
    700: {
      slidesPerView: 3,
    },
  },
});

/*sliders*/

const box = document.getElementsByClassName("box");
const image = document.getElementsByClassName("aks");
const text = document.getElementsByClassName("matn");
const span = document.getElementsByClassName("takhfif");
const txt = document.getElementsByClassName("txt");

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("mouseenter", function () {
    this.style.height = "285px";
    image[i].style.transform = "scale(1.1) translate(0px, -15px) rotate(-2deg)";
    text[i].style.color = "white";
    txt[i].style.color = "white";
    span[i].style.color = "red";
    span[i].style.background = "white";
  });
  box[i].addEventListener("mouseleave", function () {
    this.style.height = "362px";
    image[i].style.transform = "scale(1) translate(0px, 0px)";
    text[i].style.color = "gray";
    txt[i].style.color = "red";
    span[i].style.color = "white";
    span[i].style.background = "red";
  });
}
const boxes = document.getElementsByClassName("boxes");
const img = document.getElementsByClassName("img");
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("mouseenter", function () {
    img[i].style.transform = "scale(1.1) translate(0px, -15px) rotate(-2deg)";
  });
  boxes[i].addEventListener("mouseleave", function () {
    img[i].style.transform = "scale(1) translate(0px, 0px)";
  });
}

/*best selling*/


const moving = document.getElementsByClassName("move");
for (let i = 0; i < moving.length; i++) {
  moving[i].addEventListener("mouseenter", function () {
    moving[i].style.transform = " rotate(10deg)";
  });
  moving[i].addEventListener("mouseleave", function () {
    moving[i].style.transform = " rotate(0deg)";
  });
}
