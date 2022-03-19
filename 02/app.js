const handleMouseMove = function () {
    console.log('Mousemove Event!')
}
const handleMouseLeave = function () {
    console.log('Mouseleave Event!')
}
const init = function() {
    const containerEl = document.querySelector('div')

    containerEl.addEventListener('mousemove', handleMouseMove)
    containerEl.addEventListener('mouseleave', handleMouseLeave)
}

document.addEventListener('DOMContentLoaded', init)