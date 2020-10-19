const divList = document.querySelectorAll('div');
const body = document.querySelector('body');

const addClass = function(){
    this.classList.add('clicked');
}

const removeClass = function(e){
    if(!e.target.className){
        divList.forEach(function(div){
            div.classList.remove('clicked');
        })
    }
}

divList.forEach(function(div){
    div.addEventListener('click', addClass);
})

body.addEventListener('click', removeClass);
