const allDivs = document.querySelectorAll("div");

const addClass = function (e) {
	setTimeout(() => {
		this.classList.add("clicked");
	}, this.dataset.time);

	if (this.tagName === "DIV") {
		e.stopPropagation();
	}
};
allDivs.forEach((e) => {
	e.addEventListener("click", addClass);
});

document.body.addEventListener("click", function (e) {
	if (e.target === e.currentTarget) {
		allDivs.forEach((e) => {
			e.classList.remove("clicked");
		});
	}
});
