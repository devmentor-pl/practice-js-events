const divEl = document.querySelector('.div');

if (divEl) {
    divEl.addEventListener('mousemove', function() {
        console.log('kursor porusza się nad elementem div')
}) 

divEl.addEventListener('mouseleave', function() {
    console.log('kursor opuscil element div');
})

}