const div=document.querySelector('div')
const onDiv=function(){
    div.textContent='on'
}
const offDiv=function(){
    div.textContent='off'
}

if(div){
    div.addEventListener('mouseenter',onDiv)
    div.addEventListener('mouseleave',offDiv)
}



