const button = document.querySelector('button')
const buttonClick = function(){
    console.log('clicked')
} 
if(button){
    button.addEventListener('click', buttonClick)
}
