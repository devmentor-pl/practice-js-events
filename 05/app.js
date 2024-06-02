const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const pElementList = document.querySelectorAll('p')

pElementList.forEach(function(el){
    el.addEventListener('click', function(e) {
        e.preventDefault()
        console.log('click', e.target);

        if(e.target.tagName === 'P') {
            const idOfPara = e.target.dataset.id
            console.log(idOfPara);

            if (typeof stats.paragraphs[idOfPara] === 'undefined') {
                stats.paragraphs[idOfPara] = 0
            }
            stats.paragraphs[idOfPara]++

        } else if (e.target.tagName === 'A'){
            const hrefAttr = e.target.getAttribute('href')
            if(typeof stats.links[hrefAttr] === 'undefined') {
                stats.links[hrefAttr] = 0
            }
            stats.links[hrefAttr]++
        }
    })
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

