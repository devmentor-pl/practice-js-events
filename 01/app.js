const button = document.querySelector('button');
if(button) {
    button.addEventListener('click', handler);
}

function handler () {
    console.log('clicked');
}