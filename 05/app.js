const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */
const pElementList = document.querySelectorAll('p');

const pEventHandler = function(e) {
    //set preventDefault() only once for 'a' tag
    if(e.target.tagName === 'A' && !e.defaultPrevented) {
        e.preventDefault();
    }

    if(e.target.tagName === 'A') {
        const link = e.target.getAttribute('href');

        if(link in stats['links']) {
            stats['links'][link]++;
        } else {
            stats['links'][link] = 1;
        }
    } else {
        if(e.target.tagName === 'P') {
            const pId = e.target.dataset.id;

            if(pId in stats['paragraphs']) {
                stats['paragraphs'][pId]++;
            } else {
                stats['paragraphs'][pId] = 1;
            }
        }
    }
    
}

pElementList.forEach(function(pElement) {
    pElement.addEventListener('click', pEventHandler);
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

