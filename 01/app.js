const elementButton = document.querySelector('button');

const showInfo = function () {
    console.log('clicked');
}

if (elementButton) {
    elementButton.addEventListener('click', showInfo);
}