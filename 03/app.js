const btns = document.querySelectorAll('button');

const callback = function(e) {
    console.log('clicked');
    this.textContent = "clicked"
    this.removeEventListener('click', callback)
}

btns.forEach(function(item){
    item.addEventListener('click', callback);
})