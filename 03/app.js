const buttonList = document.querySelectorAll('button')
let CountButtonHomeClicks = 0

const handleButton = function () {
	this.innerText = 'clicked'
	console.log('clicked')
	if (this.innerText === 'clicked') {
		this.removeEventListener('click', handleButton)
	}
}

buttonList.forEach(button => {
	button.addEventListener('click', handleButton)
})
