const button = document.querySelector('button')
console.log(button);

const ClickedButton = () => {
    console.log('Clicked');
}


button.addEventListener('click', ClickedButton)
