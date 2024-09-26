const clickHandle = (btn) => {
	btn.target.textContent = 'clicked';
	console.log('clicked');
	btn.target.removeEventListener('click', clickHandle);
};

document.querySelectorAll('button').forEach((btn) => btn.addEventListener('click', clickHandle));
