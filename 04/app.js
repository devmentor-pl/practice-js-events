const allDivs = document.querySelectorAll('div');
const bodyOnly = document.querySelector('body');

const handleClick = function(){
    const time = this.dataset.time;
    const self = this;

    setTimeout(function(){
        self.classList.add('clicked');
    }, time)
}

allDivs.forEach(function(div){
    div.addEventListener('click', handleClick)
});

bodyOnly.addEventListener('click', function(e){
    if(e.target === e.currentTarget){
        allDivs.forEach(function(div){
            div.classList.remove('clicked');
        });
    }
});