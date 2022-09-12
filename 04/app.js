const divs = document.querySelectorAll('div');
const body = document.querySelector('body');

const clickHandler = function(e){
    const classes = this.classList;

    setTimeout(function(){
        classes.add('clicked')
    },e.currentTarget.dataset.time);   
}

const removeClassHandler = function(e) {
    e.stopImmediatePropagation();
    divs.forEach(div => div.classList.remove('clicked'));
}

divs.forEach( function(div){
    div.addEventListener('click', clickHandler);
})
body.addEventListener('click', removeClassHandler);