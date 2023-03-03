const btnList = document.querySelectorAll("button");

const changeText = function () {
  text = this.textContent = "clicked";
  console.log(text);
  if (text === "clicked") {
    this.removeEventListener("click", changeText);
  }
};

btnList.forEach(function (btn) {
  btn.addEventListener("click", changeText);
});
