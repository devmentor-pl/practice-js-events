const buttonsList = document.querySelectorAll('button')

const clickEvent = function (elem, e) {
	e.preventDefault()
	elem.innerText = 'clicked'
	console.log('clicked')
	elem.removeEventListener('click', handleEvent)
}

const handleEvent = function (e) {
	clickEvent(this, e)
}

buttonsList.forEach(function (button) {
	button.addEventListener('click', handleEvent)
})
