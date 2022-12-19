const slides = document.getElementsByClassName("carousel-item");
// slides variable holds each element with carousel-item class/each slide named item below
let nextButton = document.getElementById("carousel-button-next");
let prevButton = document.getElementById("carousel-button-prev");
let position = 0;
const numberOfSlides = slides.length;

function hideSlides() {
  // removes all slides not currently being viewed; using for loop of each slide of slides (html collection)
  for (const item of slides) {
    item.classList.remove("carousel-item-visible");
    item.classList.add("carousel-item-hidden");
  }
}

const moveNext = function () {
  hideSlides();
  // check if last slide has been reached
  if (position === numberOfSlides - 1) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
    // move to next slide
    position++;
  }
  // make current slide visible
  slides[position].classList.add("carousel-item-visible");
  prevButton.classList.remove("disabled");
};

const movePrev = function () {
  hideSlides();
  // check if on the first slide
  if (position === 0) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
    // move back one
    position--;
  }
  // make current slide visible
  slides[position].classList.add("carousel-item-visible");
  nextButton.classList.remove("disabled");
};

nextButton.addEventListener("click", moveNext);
prevButton.addEventListener("click", movePrev);
