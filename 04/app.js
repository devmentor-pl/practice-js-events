const divList = document.querySelectorAll('div');
const body = document.querySelector('body');

console.log(divList);

divList.forEach(function(divEl){
    divEl.addEventListener('click', onClick, true);
});

function onClick(e){
    console.log('clicked');
    const time = this.dataset.time;
    const self = this;
    setTimeout(function(){
        self.classList.add('clicked');
    }, time)

    
};

body.addEventListener('click', function(e){
    console.log('click on body');

    if(e.target === e.currentTarget){
        divList.forEach(function(e){
        e.classList.remove('clicked')
    })
    }
    
})
