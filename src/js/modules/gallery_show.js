import { items } from "./gallery_sort.js";
const modal = document.querySelector(".modal");
const close = document.querySelector(".modal__close");
const modalImg = document.querySelector(".modal__img");
const left = document.querySelector(".modal__left");
const right = document.querySelector(".modal__right");
const content = document.querySelector(".modal__content");

let slide = 0;
let slideIndex = 1;
let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i) ? true : false;
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i) ? true : false;
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i) ? true : false;
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Windows()
    );
  },
};

if (!isMobile.any()) {
  items.forEach((element) => {
    showModal(element);
  });
}

export function openClose(item, dlay, pding, oflow) {
  item.style.display = dlay;
  document.body.style.paddingRight = pding;
  document.body.style.overflow = oflow;
}

function showModal(img) {
  img.addEventListener("click", () => {
    slide = document.querySelectorAll(".slide");
    slideIndex = Array.from(slide).indexOf(img) + 1;
    openClose(modal, "block", "17px", "hidden");
    modalImg.setAttribute("src", img.firstElementChild.getAttribute("src"));
    moveSlide(slideIndex);
  });
}

function moveSlide(item) {
  if (item > slide.length) {
    slideIndex = 1;
  }
  if (item < 1) {
    slideIndex = slide.length;
  }
  modalImg.setAttribute(
    "src",
    slide[slideIndex - 1].firstElementChild.getAttribute("src")
  );
}

function plusSlides(n) {
  moveSlide((slideIndex += n));
}

right.addEventListener("click", () => {
  plusSlides(+1);
});

left.addEventListener("click", () => {
  plusSlides(-1);
});

content.onmouseover = function () {
  fade("0.5");
};

content.onmouseout = function () {
  fade("0");
};

function fade(ops) {
  right.style.opacity = ops;
  left.style.opacity = ops;
}

closeAll(close, modal);

export function closeAll(exit, item) {
  exit.addEventListener("click", () => openClose(item, "none", "", ""));

  item.addEventListener("click", (e) => {
    if (e.target === item) {
        openClose(item, "none", "", "");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
        openClose(item, "none", "", "");
    }
  });
}
