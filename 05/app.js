const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */
const paragraphs = document.querySelectorAll('p')
paragraphs.forEach((p) => {
    p.addEventListener('click',counter)
})
function counter(e) {
    e.preventDefault()
    const paragraph = stats.paragraphs
    const links = stats.links
    const classes = e.target.classList
    if (classes.contains('link')) addCount(links, e.target.pathname)
    if (classes.contains('text')) addCount(paragraph, this.dataset.id)
}
function addCount(object, id) {
    let numClicks = object[id]
    if (typeof numClicks === 'undefined')
        object[id] = 1
    else {
        numClicks++
        object[id] = numClicks
    }
}

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

