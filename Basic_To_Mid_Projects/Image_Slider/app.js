const container = document.querySelector(".container");
const btns = document.querySelectorAll(".btn");
const imgList = [
  "slider-img-1",
  "slider-img-2",
  "slider-img-3",
  "slider-img-4",
  "slider-img-5",
  "slider-img-6",
  "slider-img-7",
  "slider-img-8",
  "slider-img-9",
  "slider-img-10",
  "slider-img-11",
  "slider-img-12",
];
let index = 0;
btns.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("btn-left")) {
      index = index - 1;
      if (index < 0) {
        index = imgList.length - 1;
      }
      container.style.background = `url(images/${imgList[index]}.jpg) center/cover no-repeat`;
    } else {
      index = index + 1;
      if (index === imgList.length) {
        index = 0;
      }
      container.style.background = `url(images/${imgList[index]}.jpg) center/cover no-repeat`;
    }
  });
});
