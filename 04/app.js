const divList = document.querySelectorAll("div");
const bodyEl = document.querySelector("body");

const addClickedClass = function () {
	const el = this;
	const time = el.dataset.time;

	setTimeout(function () {
		el.classList.add("clicked");
	}, time);
};

const removeClickedClass = function (e) {
	if (bodyEl === e.currentTarget) {
		divList.forEach(function (divEl) {
			divEl.classList.remove("clicked");
		});
	}
};

divList.forEach(function (divEl) {
	divEl.addEventListener("click", addClickedClass);
});

bodyEl.addEventListener("click", removeClickedClass);
