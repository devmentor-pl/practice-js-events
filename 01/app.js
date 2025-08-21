const buttonEl = document.querySelector('button');

if (!buttonEl) {
    throw new Error('No button found!');
}

buttonEl.addEventListener('click', () => {
    console.log('clicked');
});
