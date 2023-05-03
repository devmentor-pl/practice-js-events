document.addEventListener("DOMContentLoaded", mouseLocalisation);

function mouseLocalisation() {
  const divElement = document.querySelector("div");

  const mouseMove = function (e) {
    console.log("Mouse is inside div | position: " + e.y + " " + e.x);
  };

  const mouseLeave = function () {
    console.log("Mouse is outside div");
  };

  if (divElement) {
    divElement.addEventListener("mousemove", mouseMove);
    divElement.addEventListener("mouseleave", mouseLeave);
  }
}
