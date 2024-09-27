const btnCollection = [...document.querySelectorAll('button')];


const clickedBtn = (e) => {
if (e.target.textContent === 'send') {
    e.target.textContent = 'clicked';
    console.log('clicked');
} else return
}


btnCollection.forEach((btn) => {
    btn.addEventListener('click', clickedBtn)
})