const buttons = document.querySelectorAll("button");

buttons.forEach((e) => {
	const showText = function () {
		this.textContent = "clicked";
		console.log(this.textContent);
		e.removeEventListener("click", showText);
	};
	e.addEventListener("click", showText);
});
