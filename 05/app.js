const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */
const CountClick = function(e) {
    e.stopPropagation(); 

    if (e.target.tagName === 'A') {
        e.preventDefault(); 
        const href = e.target.getAttribute('href'); 
        if (href === '/dolor.html') {
            stats.links[href]++; 
        }
    }

    if (e.target.tagName === 'P') {
        const pId = e.target.dataset.id; 
        if (pId === 'p1') {
            stats.paragraphs[pId]++; 
        }
    }
};

// Add event listener to all paragraphs
const pList = document.querySelectorAll('p');
pList.forEach((p) => {
    p.addEventListener('click', CountClick);
});
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

