function init() {
  const div = document.querySelector("div");

  console.log(div);

  if (div) {
    div.addEventListener("mousemove", mouseMove);
    div.addEventListener("mouseleave", mouseLeave);
  }
}

function mouseMove() {
  console.log("myszka oporusza się wewnątrz");
}

function mouseLeave() {
  console.log("myszka opuściła element");
}
document.addEventListener("DOMContentLoaded", init);
