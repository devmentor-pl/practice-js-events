const btn = document.querySelector('button');

const handleClick = function () {
    console.log('clicked');
}

if(btn) {
    btn.addEventListener('click', handleClick);
}