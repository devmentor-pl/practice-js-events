console.log('dom')
const button = document.querySelector('button');
console.log(button);
if (button !== null) {
    button.addEventListener('click',function(){
        console.log('clicked');
    })
}

console.log('finish')