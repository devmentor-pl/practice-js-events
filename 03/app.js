const btnList = document.querySelectorAll('button');

const changeText = function () {
    const text = this.innerText;
    this.innerText = 'clicked';
    console.log(text);
    this.removeEventListener('click', changeText)
}

btnList.forEach(function (item) {
    item.addEventListener('click', changeText);
})