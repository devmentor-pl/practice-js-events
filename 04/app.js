const divList = document.querySelectorAll('div');
const elementBody = document.querySelector('body')

const addClass = function () {

    const self = this;

    setTimeout(function () {
        self.classList.add('clicked');

    }, self.dataset.time);


};



divList.forEach(function (element) {

    element.addEventListener('click', addClass);

});



const removeClass = function () {
    divList.forEach(function (element) {
        element.classList.remove('clicked');
    });
};

elementBody.addEventListener('click', removeClass, true);


