const init = () => {
    const box = document.querySelector('div')

    const cursorEnter = () => {
        console.log('myszka jest w pudełku')
    }
    const leaveBox = () => {
        console.log('myszka uciekła z pudełka')
    }
    box.addEventListener('mousemove', cursorEnter)
    box.addEventListener('mouseleave', leaveBox)
}
document.addEventListener('DOMContentLoaded',init)
// box.addEventListener('mouseleave',leaveBox)
