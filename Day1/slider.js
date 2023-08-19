const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".images");
const bottom = document.querySelector(".bottom");
let slideNumber = 1;
let slideLength = images.length;
//Adding bottom dots
for (let i = 0; i < slideLength; i++) {
  const div = document.createElement("div");
  div.className = "buttons";
  bottom.appendChild(div);
}
//Reseting bg color of buttons
const resetbg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = `transparent`;
  });
};
const buttons = document.querySelectorAll(".buttons");
buttons[0].style.backgroundColor = "white";

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetbg();
    slider.style.transform = `translateX(-${i * 600}px)`;
    slideNumber = i + 1;
    button.style.backgroundColor = `white`;
  });
});
//Change Color of Dots
const changeColor = () => {
  resetbg();
  buttons[slideNumber - 1].style.backgroundColor = `white`;
};
// A funciton to get Next Slide
const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 600}px)`;
  slideNumber++;
};
// A funciton to get Previous Slide
const prevSlide = () => {
  if (slideNumber > 1) {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 600}px)`;
    slideNumber--;
  }
};
// A function to get last slide
const getLastSlide = () => {
  slider.style.transform = `translateX(-${(slideLength - 1) * 600}px)`;
  slideNumber = slideLength;
};
// Create a new function to implement previous slide
const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};
right.addEventListener("click", () => {
  slideNumber < slideLength ? nextSlide() : getFirstSlide();
  changeColor();
});
left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
  changeColor();
});
