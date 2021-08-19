const button = document.querySelector("button");

function btnClick() {
  console.log("clicked");
}

if (button !== null) {
  button.addEventListener("click", btnClick);
}
