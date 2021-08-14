const btnEl = document.querySelector('button');

const handleClick = function() {
    console.log('clicked');
}

if(btnEl) {
    btnEl.addEventListener('click', handleClick);
};