const button = document.querySelector('button')

const handleClick = function () {
	console.log('clicked')
}

if (button) {
	button.addEventListener('click', handleClick)
}
