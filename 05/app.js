const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const pList = document.querySelectorAll('p')
console.log(pList)

const countClick = function(e) {
    if(e.target.tagName === 'P') {
        let dataId = e.target.dataset.id
        if(typeof stats.paragraphs[dataId] === 'undefined') {
            stats.paragraphs[dataId] = 0
        }
        stats.paragraphs[dataId]++
    } else if(e.target.tagName === 'A') {
        let href = e.target.getAttribute('href')
        if(typeof stats.links[href] === 'undefined') {
            stats.links[href] = 0
        }
        stats.links[href]++
    }
}

pList.forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault()
    })
    item.addEventListener('click', countClick)
})

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function(element, name) {
    console.log(element, '=>', name);

    const event = new CustomEvent(name, {
        bubbles: true,
    });

    element.dispatchEvent( event );
}

const renderStats = function(data, element) {
    let html = '';
    for(let elementType in data) {
        html += '<ul>';

        for(let key in data[elementType]) {
            
            html += '<li>';
            html += key + ' -> ' + data[elementType][key];
            html += '</li>';
        }

        html += '</ul>'
    }

    element.innerHTML = html;
}


document.addEventListener('click', function(e) {
    const tagName = e.target.tagName;
    if(tagName.includes('P') || tagName.includes('A')) {
        fireCustomEvent(statsElement, 'render');
    }
});
statsElement.addEventListener('render', renderStats.bind(this, stats, statsElement));
document.addEventListener('DOMContentLoaded', fireCustomEvent.bind(null, statsElement, 'render'));

