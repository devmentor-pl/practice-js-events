const btn = document.querySelector('button');

if (btn){
    
const handleClick = function(){
    console.log('clicked');
}

btn.addEventListener('click', handleClick);

}