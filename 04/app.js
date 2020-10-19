const divList = document.querySelectorAll('div');
const body = document.querySelector('body');

const addClass = function(){
  
    const self = this;
    setTimeout(function(){
        self.classList.add('clicked');
    }, self.dataset.time)
  
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
