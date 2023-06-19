const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const btns = document.querySelectorAll(".nav-button");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".text");


var sliderNav = function (manual) {
    btns.forEach((button) => {
        button.classList.remove("active")
    });

    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    contents.forEach((text) => {
      text.classList.remove("active");
    });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
};

btns.forEach((button, i) => {
  button.addEventListener("click", () => {
    sliderNav(i);
  });
});

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});
