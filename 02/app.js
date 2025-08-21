function cursorMove() {
	console.log('cursor is over the item')
}

function cursorLeave() {
	console.log('cursor has left the element')
}

document.addEventListener('DOMContentLoaded', function () {
	const divEl = document.querySelector('div')

	if (divEl) {
		divEl.addEventListener('mousemove', cursorMove)
		divEl.addEventListener('mouseleave', cursorLeave)
	}
})
