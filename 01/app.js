const btn = document.querySelector('button');

function infoClicked() {
	console.log(`clicked`);
}
if (btn) {	
	btn.addEventListener('click', infoClicked);
}
