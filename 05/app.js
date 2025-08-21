const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
}

/* tutaj umieść swój kod */
const paragraphs = document.querySelectorAll('.text')

const count = function (e) {
    const dataId = e.target.dataset.id
    const href = e.target.getAttribute('href')

    if (dataId === 'p1') {
        stats.paragraphs.p1 += 1
    }
    if (href === '/dolor.html') {
        e.preventDefault()
        stats.links[href] += 1
    }
}

paragraphs.forEach((para) => {
    para.addEventListener('click', count)
})


/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats')
const fireCustomEvent = function (element, name) {
    console.log(element, '=>', name)

    const event = new CustomEvent(name, {
        bubbles: true,
    })

    element.dispatchEvent(event)
}

const renderStats = function (data, element) {
    let html = ''
    for (let elementType in data) {
        html += '<ul>'

        for (let key in data[elementType]) {

            html += '<li>'
            html += key + ' -> ' + data[elementType][key]
            html += '</li>'
        }

        html += '</ul>'
    }

    element.innerHTML = html
}


document.addEventListener('click', function (e) {
    const tagName = e.target.tagName
    if (tagName.includes('P') || tagName.includes('A')) {
        fireCustomEvent(statsElement, 'render')
    }
})
statsElement.addEventListener('render', renderStats.bind(this, stats, statsElement))
document.addEventListener('DOMContentLoaded', fireCustomEvent.bind(null, statsElement, 'render'))

