const buttons=document.querySelectorAll('button')

const clicked=function(){
  this.innerText='clicked'
  console.log('clicked')
  this.removeEventListener('click',clicked)
}

console.log(buttons)

buttons.forEach(function(button){
    button.addEventListener('click',clicked)
    })

