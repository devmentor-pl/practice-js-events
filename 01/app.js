console.log('DOM');

const btnElement = document.querySelector('button');
if(btnElement) {
    btnElement.addEventListener('click', handleClick);
}

function handleClick() {
    console.log('clicked');
}