const btnList = document.querySelectorAll('button');

const changeBtn = function(e) {
    e.target.innerText = 'clicked'
    console.log('clicked')
    e.target.removeEventListener('click', changeBtn)
}

btnList.forEach(function(btn){
    btn.addEventListener('click', changeBtn)
})