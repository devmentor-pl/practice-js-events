const divList = document.querySelectorAll('div')
const body = document.querySelector('body')

const addClassClicked = function (e) {
	const curr = e.currentTarget

	setTimeout(function () {
		curr.classList.add('clicked')
	}, curr.getAttribute('data-time'))
}

divList.forEach(function (div) {
	div.addEventListener('click', addClassClicked)
})

const removeClassClicked = function (e) {
	if (e.target === e.currentTarget) {
		divList.forEach(div => {
			div.classList.remove('clicked')
		})
	}
}

body.addEventListener('click', removeClassClicked)
