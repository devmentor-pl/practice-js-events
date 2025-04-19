document.addEventListener("DOMContentLoaded", () => {
  const divElement = document.querySelector("div");
  const getMousePosition = function (e) {
    console.log(`Mouse is on position X: ${e.x} | Y: ${e.y}`);
  };
  const getMsgMouseOut = function (e) {
    console.log(`Mouse left the div on position X: ${e.x} | Y: ${e.y} `);
  };
  divElement.addEventListener("mousemove", getMousePosition);
  divElement.addEventListener("mouseleave", getMsgMouseOut);
});
