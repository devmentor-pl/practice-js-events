const button = document.querySelector("button");
function showClick() {
	console.log("click");
}
if (button !== null) {
	button.addEventListener("click", showClick);
}

