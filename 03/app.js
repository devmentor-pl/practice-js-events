const buttons = document.querySelectorAll("button");
const btnClicked = function () {
  console.log("clicked");
  this.textContent = "clicked";
  this.removeEventListener("click", btnClicked);
};

buttons.forEach((button) => {
  button.addEventListener("click", btnClicked);
});
