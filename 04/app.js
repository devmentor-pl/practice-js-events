const elements=document.querySelectorAll('div')

const body=document.querySelector('body')
const toggleClick=function(e){
    console.log(e.target)
    console.log(e.currentTarget)
    const target=e.target
    const currentTarget=e.currentTarget
    const time=e.currentTarget.dataset.time
 
    if(target.dataset.time!=='1000'){
        e.stopPropagation()
    }

    function addClass (){
        currentTarget.classList.add('clicked')
    }
    setTimeout(addClass,time)
}

function removeClass (e){
elements.forEach(function(div){
    if(e.target ===e.currentTarget){
        div.classList.remove('clicked')
       
    }

})

}

elements.forEach(function(div){
div.addEventListener('click',toggleClick)})
    
  
 document.body.addEventListener('click',removeClass)
  


