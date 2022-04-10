const btn = document.querySelector('button');
const handleClick = function () {
    return console.log('clicked');
};

if (btn) {
    btn.addEventListener('click', handleClick);
};