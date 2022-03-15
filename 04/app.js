//1 + 3
const divList = document.querySelectorAll('div') 

const addClass = function() {
    const className = 'clicked'
    const timeValue = parseInt(this.dataset.time)
    setTimeout(() => this.classList.add(className), timeValue);  
}

divList.forEach(function(divEl) {
    divEl.addEventListener('click', addClass)
})

// 2
const bodyEl = document.querySelector('body')

const removeClass = function() {
     const classtoRemove = 'clicked'
     divList.forEach(function(divEl) {
         divEl.classList.remove(classtoRemove)
    })
}

if(bodyEl) {
    bodyEl.addEventListener('click', removeClass, true)   
}

