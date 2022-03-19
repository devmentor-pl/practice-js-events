const containers = document.querySelectorAll('div')

const handleClick = function (e) {
    if (e.target.tagName === 'BODY') {
        containers.forEach(container => {
            container.classList.remove('clicked')
        })
        return
    }
    if (e.target.className.includes('child')) {
        setTimeout(() => {
            this.classList.add('clicked')
        }, this.dataset.time)
    } else {
        e.stopPropagation()
        setTimeout(() => {
            this.classList.add('clicked')
        }, this.dataset.time)
    }
}
containers.forEach((container) => {
    container.addEventListener('click', handleClick)
})
document.body.addEventListener('click', handleClick)