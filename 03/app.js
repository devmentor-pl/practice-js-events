const btnList = document.querySelectorAll('button');

const changeInnerText = function () {
    this.innerText = 'clicked';
    console.log('clicked');
    if(this.innerText === 'clicked') {
        this.removeEventListener('click', changeInnerText);
    }
}

btnList.forEach(function(element) {
    element.addEventListener('click', changeInnerText);
})