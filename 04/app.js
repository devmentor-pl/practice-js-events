document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    const addClass = function() {
        const self = this;
        const time = this.dataset.time;
        setTimeout(() => {
            self.classList.add('clicked')
            console.dir(self)
        }, time)
    }
    
    const removeClass = function(e) {
        if(e.target === e.currentTarget)
        console.log(e.target, e.currentTarget)
        divList.forEach(function(div){
            div.classList.remove('clicked')
        })
    }
    
    divList.forEach(function(div) {
        div.addEventListener('click', addClass)
    })
    
    document.body.addEventListener('click', removeClass)
}
