const divList = document.querySelectorAll('div');

divList.forEach(function (item) {
    item.addEventListener('click', addClass)
})

function addClass() {
    this.classList.add('clicked');
}