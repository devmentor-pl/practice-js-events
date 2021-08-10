const btnsList = document.querySelectorAll('button');

const handleClick = function () {
    this.innerText = 'clicked';
    console.log('clicked');
    this.removeEventListener('click', handleClick);
};

btnsList.forEach(btn => {
    btn.addEventListener('click', handleClick);
});