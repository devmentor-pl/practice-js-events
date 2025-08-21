document.addEventListener("DOMContentLoaded", function () {
  const divContainer = document.querySelector("div");
  function mouseMove() {
    console.log("mouse cursor is above the container");
  }
  function mouseLeave() {
    console.log("mouse cursor leave the container");
  }
  if (divContainer) {
    divContainer.addEventListener("mousemove", mouseMove);
    divContainer.addEventListener("mouseleave", mouseLeave);
  }
});