document.addEventListener('DOMContentLoaded', init)

function init() {
    const btnList = document.querySelectorAll('button')
    
    if (btnList) {
        const clickedBtn = function (e) {
            e.currentTarget.innerText = 'clicked'
            console.log('clicked');
            
            this.removeEventListener('click', clickedBtn)
        }
        
        btnList.forEach(function (btn) {
            btn.addEventListener('click', clickedBtn)
        })
    }
}