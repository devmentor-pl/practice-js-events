// first approach:

// const btn = document.querySelectorAll('button');

// btn.forEach(function (button) {
//    const handleClick = function () {
// 			console.log('clicked');
// 			button.textContent = 'clicked';
// 			button.removeEventListener('click', handleClick); // Usuwanie nasłuchiwania, aby callback był wywołany tylko raz
// 		}
    
//     button.addEventListener('click', handleClick);
// })  

// second approach:

const btn = document.querySelectorAll('button');

btn.forEach(function (button) {
	const handleClick = function () {
		console.log('clicked');
		button.textContent = 'clicked';
	};

	// Użycie `{ once: true }` aby automatycznie usunąć nasłuchiwanie po pierwszym kliknięciu
	button.addEventListener('click', handleClick, { once: true });
});
