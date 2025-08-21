const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", clicked);
}

function clicked() {
  console.log("button was clicked");
}
