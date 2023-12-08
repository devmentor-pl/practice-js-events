const div = document.querySelector('div');
if (div) {
	div.addEventListener('mousemove', () =>
		console.log(`You're in the rectangle`)
	);
	div.addEventListener('mouseleave', () =>
		console.log('You left the rectangle')
	);
} else {
	console.log('Div element does not exist in the current context');
}
