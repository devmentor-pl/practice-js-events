const btnList = document.querySelectorAll('button');

const changeText = function () {
    const clicked = 'clicked';
    this.innerText = clicked;
    console.log(clicked);

    const clickCheck = this.innerText;

    if (clickCheck === clicked) {
        this.removeEventListener('click', changeText);
    }

}

btnList.forEach(function (item) {
    item.addEventListener('click', changeText)

})