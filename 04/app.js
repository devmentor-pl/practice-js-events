const divList = document.querySelectorAll("div");

const clickedDiv = function () {
	this.classList.add("clicked");
};

divList.forEach(function (divEl) {
	divEl.addEventListener("click", clickedDiv);
});

const bodyEl = document.querySelector("body");

bodyEl.addEventListener("click", function (e) {
	if (e.target === e.currentTarget) {
		divList.forEach(function (divEl) {
			divEl.classList.remove("clicked");
		});
	}
});
