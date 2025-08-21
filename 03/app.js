const btns = document.querySelectorAll('button')

btns.forEach(function (btn) {
    btn.addEventListener('click', handleClick)
})

function handleClick() {
    const btn = this

    btn.innerText = 'clicked'
    console.log('clicked')

    btn.removeEventListener('click', handleClick)
}