const divEl = document.querySelector('div')

divEl.addEventListener('mousemove', function(){
    console.log('mouse is moving')
})

divEl.addEventListener('mouseleave', function(){
    console.log('mouse left div')
})