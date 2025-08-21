const divList = document.querySelectorAll('div');
const body = document.querySelector('body');

const addClass = function(e) {
    
    const item = e.currentTarget;

    setTimeout(function() {            
                    item.classList.add('clicked');
                }, Number(item.dataset.time)
    )
}

const removeClasses = function(list, name, e){    
    
    if (e.target === e.currentTarget){
        list.forEach(function(el){
            el.classList.remove(name)});
    }
}


divList.forEach(function(element){
    element.addEventListener('click',addClass);
})

body.addEventListener('click',removeClasses.bind(this,divList,'clicked')); //tutaj może trochę na siłę "bind" ale chciałem poćwiczyć 

