const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const pList = document.querySelectorAll('p');
const linkList = document.querySelectorAll('a');

const onClick = function (e) {
    e.preventDefault();
    const el = e.target;
   
    if(e.target.tagName === 'P') {

        const paragraphName = el.dataset.id;
        if (typeof stats.paragraphs[paragraphName] === 'undefined') {
            stats.paragraphs[paragraphName] = 0;
        }
        ++stats.paragraphs[paragraphName];

    } else if(e.target.tagName === 'A') {        
            const linkName = el.getAttribute('href');
            if (typeof stats.links[linkName] === 'undefined') {
                stats.links[linkName] = 0;
            }
            ++stats.links[linkName];        
        }
}

pList.forEach(p => {
    p.addEventListener('click', onClick);
});

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function(element, name) {
    // console.log(element, '=>', name);

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

