document.addEventListener('DOMContentLoaded', function(){

    const btns = document.querySelectorAll('button');
    const clickEvent = function(el){

        
        this.innerText = 'clicked';
        
        if(this.innerText === 'clicked') {
            el.stopImmediatePropagation();
            console.log(this.innerText);
        }

    }

    btns.forEach(function(item){
        item.addEventListener('click', clickEvent);
    });

})