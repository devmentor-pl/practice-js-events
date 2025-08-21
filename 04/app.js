const divs = document.querySelectorAll('div');
const body = document.querySelector('body');

const addClass = function (element) {
    element.classList.add('clicked');
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

        div.addEventListener('click', function () {
            setTimeout(addClass, div.dataset.time, this);

        });
    });
}


if (body) {
    body.addEventListener('click', removeClass);
}


