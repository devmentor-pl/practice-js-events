const divList = document.querySelectorAll("div");
const bodyEl = document.querySelector("body");

const clickedDiv = function () {
	const divEl = this;
	console.log(divEl);
	const time = divEl.dataset.time;

	setTimeout(function () {
		divEl.classList.add("clicked");
	}, time);
};

divList.forEach(function (divEl) {
	divEl.addEventListener("click", clickedDiv);
});

bodyEl.addEventListener("click", function (e) {
	if (e.target === e.currentTarget) {
		divList.forEach(function (divEl) {
			divEl.classList.remove("clicked");
		});
	}
});
