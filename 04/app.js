const divsList = document.querySelectorAll('div');

const addClass = function(e) {
    console.log(e);
    this.classList.add('clicked');
    console.log(e.currentTarget.tagName)
}

divsList.forEach(function(el) {
    el.addEventListener('click', addClass);
});

document.body.addEventListener('click', function(e) {
    if(e.target.tagName === 'BODY') {
        divsList.forEach(function(el) {
            el.classList.remove('clicked');
        })
    }
})