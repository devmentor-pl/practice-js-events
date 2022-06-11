const btnElements = document.querySelectorAll('button')

const changeButtonText = function(e){
    console.log('clicked')
    this.innerText = 'clicked'
    if(this.innerText === 'clicked'){
        this.removeEventListener('click', changeButtonText)
    }    
}

btnElements.forEach( function(item){
    item.addEventListener(
        'click',
        changeButtonText,
    )
});