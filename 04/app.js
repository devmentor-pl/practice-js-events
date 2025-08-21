const divElements = document.querySelectorAll('div');

if (!divElements || !divElements.length) {
    throw new Error('No divs found!');
}

divElements.forEach(divElement =>
    divElement.addEventListener('click', addClass)
);

document.body.addEventListener('click', e => {
    if (e.target.tagName === 'BODY') {
        removeClassFromDivs();
    }
});

function addClass(e) {
    setTimeout(() => {
        this.classList.add('clicked');
    }, e.currentTarget.dataset.time);
}

function removeClassFromDivs() {
    divElements.forEach(divElement => {
        divElement.classList.remove('clicked');
    });
}
