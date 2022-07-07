const buttons = document.querySelectorAll("button");

buttons.forEach((e) => {
	const showText = function () {
		this.textContent = "clicked";
		console.log(this.textContent);

		if (this.textContent === "clicked") {
			e.removeEventListener("click", showText);
		}
	};
	e.addEventListener("click", showText);
});
