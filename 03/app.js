const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

function handleButtonClick() {
  console.log("clicked");
  this.innerText = "clicked";
  this.removeEventListener("click", handleButtonClick);
}
