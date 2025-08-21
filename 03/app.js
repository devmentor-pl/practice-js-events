const buttons = document.querySelectorAll('button');

if (!buttons || !buttons.length) {
    throw new Error('No buttons found!');
}

function handleChangeText(e) {
    e.target.textContent = 'clicked';
    console.log(e.target.textContent);
    e.target.removeEventListener('click', handleChangeText);
}

buttons.forEach(button => {
    button.addEventListener('click', handleChangeText);
});
