const btnList = document.querySelectorAll("button");

const buttonHandler = function () {
	this.innerText = "clicked";
	console.log("clicked");

	this.removeEventListener("click", buttonHandler);
};

btnList.forEach(function (btn) {
	btn.addEventListener("click", buttonHandler);
});
