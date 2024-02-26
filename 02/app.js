const init = function () {
  const divEl = document.querySelector("div");
  if (divEl) {
    divEl.addEventListener("mousemove", move);
    divEl.addEventListener("mouseleave", leave);
  }
};

const move = function () {
  console.log("move");
};
const leave = function () {
  console.log("leave");
};

document.addEventListener("DOMContentLoaded", init);
