const btns = document.querySelectorAll("button");

const clickBtn = function (e) {
  this.innerText = "clicked";
  console.log("clicked");
  this.removeEventListener("click", clickBtn);
};

for (btn of btns) {
  console.log(btn);
  btn.addEventListener("click", clickBtn);
}
