const btnsList = document.querySelectorAll('button');

const changeText = function () {
    this.innerText = 'clicked';
    console.log(this.innerText);
}

btnsList.forEach(function (btnEl) {
    btnEl.addEventListener('click', changeText);
});