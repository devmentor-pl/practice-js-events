const btnGroup = document.querySelectorAll('button');

const showInfo = function(event) {
    const button = event.target;
    console.log('clicked');
    button.textContent = 'clicked';
    this.disabled = true;
}

btnGroup.forEach( function(item) {
    item.addEventListener('click', showInfo);
})