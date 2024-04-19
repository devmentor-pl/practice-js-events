const divElList = document.querySelectorAll('div');

divElList.forEach(function(element){
    element.addEventListener('click', function(){
        if(!this.className.includes('clicked')){
            this.classList.add('clicked');
        }
    })
})