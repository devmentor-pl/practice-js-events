const btnList = document.querySelectorAll('button');

btnList.forEach(btn => {
    btn.addEventListener('click', changeBtnText)
});

function changeBtnText(e) {
    e.target.textContent = 'clicked';
    console.log('clicked')
    e.target.removeEventListener('click', changeBtnText)
}