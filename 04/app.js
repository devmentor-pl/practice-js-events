const divs = document.querySelectorAll('div');
const body = document.querySelector('body');

const addClass = function () {
    this.classList.add('clicked');
}

const removeClass = function (e) {

    if (e.target === e.currentTarget) {

        divs.forEach(function (div) {
            div.classList.remove('clicked');
        });

    }

}

if (divs.length !== 0) {
    divs.forEach(function (div) {
        div.addEventListener('click', addClass);
    });
}


if (body) {
    body.addEventListener('click', removeClass);
}


