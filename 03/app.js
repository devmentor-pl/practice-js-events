const buttons = document.querySelectorAll("button")
const arrOfButtons = Array.from(buttons)
console.log(arrOfButtons)

arrOfButtons.forEach(function (el) {
	el.addEventListener("click", function () {
		if (el.innerText !== "clicked") {
			el.innerText = "clicked"
			console.log("clicked")
		}
	})
})
