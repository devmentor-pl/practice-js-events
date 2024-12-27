document.addEventListener("DOMContentLoaded", init);

function init() {
  const div = document.querySelector("div");

  const handleOnLeave = () => console.log("Cursor Left");
  const handleOnMove = () => console.log("Cursor Moved");

  if (div) {
    div.addEventListener("mousemove", handleOnMove);
    div.addEventListener("mouseleave", handleOnLeave);
  }
}
