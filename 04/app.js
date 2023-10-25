const divList = document.querySelectorAll('div')

const addClass = function (e) {
	const delay = e.currentTarget.dataset.time
	setTimeout(() => {
		this.classList.add('clicked')
	}, delay)
}

const removeClass = function () {
	divList.forEach(item => {
		item.classList.remove('clicked')
	})
}

divList.forEach(item => {
	item.addEventListener('click', addClass)
})

document.body.addEventListener('click', e => {
	if (e.target.tagName === 'BODY') {
		removeClass()
	}
})
