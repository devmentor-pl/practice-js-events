const btnList = document.querySelectorAll("button");

const afterClick = function (e) {
  this.innerText = "clicked";
  console.log("clicked");
  this.removeEventListener("click", afterClick);
};

btnList.forEach(function (item) {
  item.addEventListener("click", afterClick);
});
