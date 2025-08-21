const allDiv = document.querySelectorAll('div')
const body = document.querySelector('body')

function addClass() {
	const timeout = this.dataset.time

	setTimeout(() => {
		this.classList.add('clicked')
	}, timeout)
}

function removeClass(e) {
	if (e.target.tagName === 'BODY')
		allDiv.forEach(function (el) {
			el.classList.remove('clicked')
		})
}

allDiv.forEach(function (item) {
	item.addEventListener('click', addClass)
})
body.addEventListener('click', removeClass)
