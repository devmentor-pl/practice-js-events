const container = document.querySelector('.div')

let body = document.querySelector('body')

const mouseMove = function() {

    console.log('mouse moved')

    let textContainer = document.createElement('span')
    let span = document.createElement('span')

    body.appendChild(textContainer)
    textContainer.appendChild(span)

    span.innerText = 'Mouse moved in container.'
}

const mouseLeave = function() {

    console.log('mouse left')

    let textContainer = document.createElement('span')
    let span = document.createElement('span')

    body.appendChild(textContainer)
    textContainer.appendChild(span)

    span.innerText = 'Mouse LEFT container.'
    span.className = 'red'
}

container.addEventListener(
    'mousemove',
    mouseMove 
)

container.addEventListener(
    'mouseleave',
    mouseLeave
)