document.addEventListener('DOMContentLoaded', function () {
	const box = document.querySelector('div')
	console.log(box)

	const cursorOnElement = function () {
		console.log('cursor is on element')
	}
	const cursorOutOfElement = function () {
		console.log('cursor leaves element')
	}

	if (box) {
		box.addEventListener('mousemove', cursorOnElement)
		box.addEventListener('mouseleave', cursorOutOfElement)
	}
})
