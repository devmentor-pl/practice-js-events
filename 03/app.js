const btnsList = document.querySelectorAll('button');

const changeText = function (e) {
    this.innerText = 'clicked';
    console.log(this.innerText);
    if (this.innerText === 'clicked') {
        this.removeEventListener('click', changeText, true);
    }
}



btnsList.forEach(function (btnEl) {
    btnEl.addEventListener('click', changeText, true)
})