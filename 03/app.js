const btns = document.querySelectorAll('button');

const callback = function(e) {
    if(this.textContent !== "clicked") {
        console.log('clicked');
        this.textContent = "clicked";
    }
}

btns.forEach(function(item){
    item.addEventListener('click', callback);
})