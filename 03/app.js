const buttonsList = document.querySelectorAll('button')

const click = function(){
    this.innerText = 'clicked'
    console.log('clicked')
    
    this.removeEventListener('click', click)
    
    
}

buttonsList.forEach(function(item){
    item.addEventListener('click', click)
})