
const buttonsList = document.querySelectorAll('button')
const text = 'Clicked'
function handleClick(e) {
    const el = e.target
    console.log(text)
    el.innerText = text
    el.removeEventListener('click', handleClick)
}

buttonsList.forEach(button => button.addEventListener('click', handleClick)
)








