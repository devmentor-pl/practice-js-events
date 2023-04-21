const btnList = document.querySelectorAll('button')

const clickedBtn = function (e) {
    e.target.innerText = 'clicked'
    console.log('clicked');
    
    this.removeEventListener('click', clickedBtn)
}

btnList.forEach(function (btn) {
    btn.addEventListener('click', clickedBtn)
})