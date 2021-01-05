const handleClick = function () {
    console.log('clicked');
}

const btnElement = document.querySelector('button');

if (btnElement) {
    btnElement.addEventListener('click', handleClick);
}
