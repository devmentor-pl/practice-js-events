const btns = document.querySelectorAll('button');
let count = 0;

function sayClicked(e) {
	// console.log(e.target); //obiekt ktory klikam

	if (e.target.tagName === 'BUTTON') {
		e.target.removeEventListener('click', sayClicked);
		console.log('clicked');
	}
}

btns.forEach(function (btn) {
	btn.addEventListener('click', sayClicked);
});
