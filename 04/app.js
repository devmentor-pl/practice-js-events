const divElements = document.querySelectorAll('div')
const bodyElement = document.querySelector('body')


divElements.forEach( function(item){
    item.addEventListener(
        'click',
        function(){
            const time = this.dataset.time
            const self = this;
            setTimeout(function(){
                self.classList.add('clicked')
            }, time)
        })
})

bodyElement.addEventListener(
    'click',
    function(event){
        if(event.target === event.currentTarget){
            divElements.forEach(function(item){
                item.classList.remove('clicked')
            })
        }
    }
)