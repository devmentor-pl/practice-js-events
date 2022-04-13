

const divElement = document.querySelectorAll('div')

const addClass = function(){
    const element = this
    const clicked = function(){
        element.classList.add('clicked')
    }

    setTimeout(clicked, parseInt(this.dataset.time))
}

divElement.forEach(function(item){
    item.addEventListener('click', addClass)
})



const bodyElement = document.querySelector('body')

const removeClass = function(e){
    if(e.target === e.currentTarget){
    divElement.forEach(function(item){
        item.classList.remove('clicked')
    })}
    
}
bodyElement.addEventListener('click', removeClass, true)





