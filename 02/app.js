document.addEventListener('DOMContentLoaded', function () {

    const div = document.querySelector('div')

    if (div) {
        div.addEventListener('mousemove', function () {
            console.log('kursor na elemencie div')
        })
        div.addEventListener('mouseleave', function () {
            console.log('kursor opuścił element div')
        })
    }
})

