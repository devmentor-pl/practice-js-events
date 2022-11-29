const btn = document.querySelectorAll('button');
const click = function() {
    this.innerText = 'clicked';
    this.removeEventListener('click', click)
    console.log('clicked')
}

btn.forEach(function(item) {
    item.addEventListener('click', click)
})