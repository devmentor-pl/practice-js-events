const divEl = document.querySelector("div");
const spanEl = document.querySelector("span");

const mouseOverEl = function (e) {
  spanEl.textContent = `The cursor moves over the element : X = ${e.clientX} | Y = ${e.clientY}`;
};

const mouseLeaveEl = function (e) {
  spanEl.textContent = `The cursor leaves the element : X = ${e.clientX} | Y = ${e.clientY}`;
};

divEl.addEventListener("mousemove", mouseOverEl);
divEl.addEventListener("mouseleave", mouseLeaveEl);
