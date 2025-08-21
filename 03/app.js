const btnList = document.querySelectorAll('button')

function handleClick() {
	this.textContent = 'clicked'
	console.log(this.textContent)
	this.removeEventListener('click', handleClick)
}

btnList.forEach(function (item) {
	item.addEventListener('click', handleClick)
})
