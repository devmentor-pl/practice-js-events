const contentEl = document.querySelector('div');
console.log(contentEl);

const onDiv = function() {
    alert('On Div');
}

const outsideDiv = function () {
    alert('Outside Div');
}

if(contentEl) {
    contentEl.addEventListener('mouseenter', onDiv);
    contentEl.addEventListener('mouseleave', outsideDiv);
}