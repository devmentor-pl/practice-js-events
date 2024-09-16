const buttons = document.querySelectorAll("button");

buttons.forEach(function (el) {
  el.addEventListener("click", clicked);
});

function clicked() {
  this.textContent = "clicked";
  console.log("clicked");
  this.removeEventListener("click", clicked);
}
