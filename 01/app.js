const btn = document.querySelector('button')
const clickBtn = () => {
	console.log('clicked')
}
if (btn) {
	btn.addEventListener('click', clickBtn)
}
