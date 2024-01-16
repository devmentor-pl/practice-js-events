const divList = document.querySelectorAll('div');
const body = document.querySelector('body');

divList.forEach(function(divEl){
    divEl.addEventListener('click', function() {
        const element = this;
        setTimeout(function(){
            element.classList.add('clicked')
        }, element.dataset.time);
    });
});

body.addEventListener('click', function(e){
    if(e.target === e.currentTarget){
        divList.forEach(function(el){
            el.classList.remove('clicked');
        });
    }
});