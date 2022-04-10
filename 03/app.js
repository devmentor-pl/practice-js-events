const allBtn = document.querySelectorAll('button');
const handleClick = function (e) {
    console.log(e.target.innerText = 'clicked');
};
allBtn.forEach(function (el) { el.addEventListener('click', handleClick, { once: true })});