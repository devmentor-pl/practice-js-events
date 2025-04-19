const divList = document.querySelectorAll("div");
const addClassClicked = function (e) {
  const delay = Number(this.dataset.time);
  setTimeout(() => this.classList.add("clicked"), delay);
};

for (div of divList) {
  div.addEventListener("click", addClassClicked, true);
}

const body = document.querySelector("body");

const removeDivClassClicked = function (e) {
  if (e.target === body) {
    divList.forEach((element) => element.classList.remove("clicked"));
  }
};

body.addEventListener("click", removeDivClassClicked);
