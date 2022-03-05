
const init = function() {

    const divEl = document.querySelector('div')
   
    const onMove = function() {
        divEl.textContent = 'kursor jest na elemencie div'
        console.log('kursor jest na elemencie div')
    }
    const onLeave = function() {
        divEl.textContent = 'kursor opuscil element div'
        console.log('kursor opuscil element div')
    }
    if(divEl) {
        divEl.addEventListener('mousemove', onMove)
        divEl.addEventListener('mouseleave', onLeave)
    }
}

document.addEventListener('DOMContentLoaded', init)