const square = document.querySelector("div");

const cursorMove = function () {
  console.log("cursor is moving");
};

const cursorLeave = function () {
  console.log("cursor leave div");
};

const init = function () {
  const square = document.querySelector("div");
  if (square !== null) {
    square.addEventListener("mousemove", cursorMove);
    square.addEventListener("mouseleave", cursorLeave);
  }
};

document.addEventListener("DOMContentLoaded", init);
