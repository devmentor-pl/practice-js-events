const btnsList = document.querySelectorAll('button');

const changeText = function () {
    this.innerText = 'clicked';
    console.log(this.innerText);

    this.removeEventListener('click', changeText);
}

btnsList.forEach(function (btnEl) {
    btnEl.addEventListener('click', changeText);
});