const slides = document.getElementsByClassName("carousel-item");
let nextButton = document.getElementById("carousel-button-next");
let prevButton = document.getElementById("carousel-button-prev");
let position = 0;
const numberOfSlides = slides.length;

function hideSlides() {
  for (const item of slides) {
    item.classList.remove("carousel-item-visible");
    item.classList.add("carousel-item-hidden");
  }
}

const moveNext = function () {
  hideSlides();
  if (position === numberOfSlides - 1) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
    position++;
  }
  slides[position].classList.add("carousel-item-visible");
  prevButton.classList.remove("disabled");
};

const movePrev = function () {
  hideSlides();
  if (position === 0) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
    position--;
  }
  slides[position].classList.add("carousel-item-visible");
  nextButton.classList.remove("disabled");
};

nextButton.addEventListener("click", moveNext);
prevButton.addEventListener("click", movePrev);
