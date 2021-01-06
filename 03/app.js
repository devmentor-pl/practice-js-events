const btnsList = document.querySelectorAll('button');

const changeText = function () {
    if (this.innerText !== 'clicked') {
        this.innerText = 'clicked';
        console.log(this.innerText);
    }
}

btnsList.forEach(function (btnEl) {
    btnEl.addEventListener('click', changeText);
});