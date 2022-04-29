const divList = document.querySelectorAll('div');
const elementBody = document.querySelector('body')

const addClass = function () {
    this.classList.add('clicked');
   
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