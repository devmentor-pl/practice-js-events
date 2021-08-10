const divsList = document.querySelectorAll('div');


divsList.forEach(function(el) {
    el.addEventListener('click', () => setTimeout(function() {
        el.classList.add('clicked');
    }, el.dataset.time));
});

document.body.addEventListener('click', function(e) {
    if(e.target.tagName === 'BODY') {
        divsList.forEach(function(el) {
            el.classList.remove('clicked');
        })
    }
});