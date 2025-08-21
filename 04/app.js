const divElements = document.querySelectorAll('div');

divElements.forEach(function(item) {
    item.addEventListener('click', addClassToDiv);
});

function addClassToDiv(ev) {
    const div = this;
    setTimeout(function() {
        div.classList.add('clicked')
    }, div.dataset.time)
}

function removeClassFromDiv(ev) {
    if(this.tagName === 'BODY') {
        divElements.forEach(function(item) {
            item.classList.remove('clicked')
        });
    }
}

document.body.addEventListener('click', removeClassFromDiv);

