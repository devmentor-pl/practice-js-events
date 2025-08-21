document.addEventListener('DOMContentLoaded', function () {
    const element = document.querySelector('div')

    if (element) {
        element.addEventListener('mousemove', function () {
            console.log('mouse is over the element')
        });

        element.addEventListener('mouseleave', function () {
            console.log('mouse has left the element')
        })
    }
})
