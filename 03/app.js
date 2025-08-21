const btnList = document.querySelectorAll('button');

btnList.forEach(btn => {
    btn.addEventListener('click', changeBtnText)
});

function changeBtnText(e) {
    const btn = e.target;
    btn.textContent = 'clicked';
    console.log('clicked')
    btn.removeEventListener('click', changeBtnText)
}