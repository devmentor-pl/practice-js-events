const btn = document.querySelectorAll("button");

console.log(btn);
function handleClick() {
	this.textContent = 'clicked'
	this.removeEventListener('click', handleClick)
	console.log("clicked");
}

btn.forEach(function (item) {
	item.addEventListener("click", handleClick );
});

