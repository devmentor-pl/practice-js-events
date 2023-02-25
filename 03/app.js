const btnList = document.querySelectorAll('button');

btnList.forEach(btn => {
    btn.addEventListener('click', handleClick);
})

function handleClick() {
    console.log('clicked');
    this.innerText = 'clicked';
    this.removeEventListener('click', handleClick);
}