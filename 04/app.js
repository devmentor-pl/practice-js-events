const div = document.querySelectorAll('div')
const body = document.querySelector('body')

console.log(div);

div.forEach(function (item) {
    item.addEventListener('click', function () {
        const self = this



        const time = self.dataset.time




        setTimeout(function () {
            self.classList.add('clicked')
        }, time)
        console.log('kliknieto');
        
        
        
    })
})




body.addEventListener('click', function (e) {
   
    if ( e.currentTarget === e.target ) {
        console.log('kliknieto body');
        div.forEach(d => {
            d.classList.remove('clicked')
        });
    }

    // e.stopPropagation()
    
    
    // body.stopPropagation()
    
})
