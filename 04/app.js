const divsList = document.querySelectorAll('div');
const bodyEl = document.querySelector('body');

const addClass = function() {
    this.classList.add('clicked');
}

divsList.forEach(function(el) {
    el.addEventListener('click', addClass);
});

bodyEl.addEventListener('click', function(e) {
    console.log(this.tagName);
    if(this.tagName === 'BODY') {
        divsList.forEach(function(el) {
            el.classList.remove('clicked');
        })
    }
})