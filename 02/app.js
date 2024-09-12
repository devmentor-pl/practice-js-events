const div = document.querySelector('div')

div.addEventListener('mousemove', function () {
    console.log('Kursor jest w obrębie diva')
})
div.addEventListener('mouseleave', function () {
    console.log('Kursor nie jest w obrębie diva')
})

