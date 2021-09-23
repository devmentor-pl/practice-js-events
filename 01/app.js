const btn = document.querySelector('button');
if (btn) {
	btn.addEventListener('click', () => console.log('clicked'));
} else {
	console.log('Button does not exist in the current HTML context');
}
