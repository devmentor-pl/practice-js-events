const divs = document.querySelectorAll('div')

divs.forEach(function(item){
    item.addEventListener('click', addClass)
})

function addClass(e){
    const self = this;
    setTimeout(function(){
        self.classList.add('clicked')
    }, self.dataset.time)
}  


const body = document.querySelector('body');

const removeClass = function(e){
    if(e.target === e.currentTarget){
        divs.forEach(function(item){
            item.classList.remove('clicked')
        })
    }
}
body.addEventListener('click', removeClass)
