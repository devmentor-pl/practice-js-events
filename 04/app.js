const divs = document.querySelectorAll('div');

divs.forEach(div => {
    div.addEventListener('click', function(e)  {
        e.stopPropagation();
        const time = div.getAttribute('data-time');
        const thisDiv = this;

        if(thisDiv === divs[2]){
            for(let i = 0; i<divs.length; i++){
                const time = divs[i].getAttribute('data-time');
                setTimeout(function(){
                    divs[i].classList.add('clicked');
                }, time);
            }
        }   else {
            setTimeout(function() {
            thisDiv.classList.add('clicked');    
            }, time); 
            }       
    });
})

document.body.addEventListener('click', (e) => {
    e.stopPropagation();
    divs.forEach(div => div.classList.remove('clicked'));
 });