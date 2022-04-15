const allBtn = document.querySelectorAll('button');
const handleClick = function (e) {
    console.log(e.target.innerText = 'clicked');
    e.target.removeEventListener('click', handleClick);

};
allBtn.forEach(function (el) { el.addEventListener('click', handleClick)});