const btns = document.querySelectorAll('button');

function sayClicked(e) {
	e.target.removeEventListener('click', sayClicked);
	console.log('clicked');
}

btns.forEach(function (btn) {
	btn.addEventListener('click', sayClicked);
});