const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */
const handleParagraphClick = function(e) {
    const clickedLink = e.target.closest('a.link');
    
    if (clickedLink) {

        const href = clickedLink.getAttribute('href');
        
        if (stats.links[href] !== undefined) {
            stats.links[href]++;
        } else {
            stats.links[href] = 1;
        }

        e.preventDefault();
    }
    
    const paragraphId = e.currentTarget.dataset.id;
    
    if (stats.paragraphs[paragraphId] !== undefined) {
        stats.paragraphs[paragraphId]++;
    } else {
        stats.paragraphs[paragraphId] = 1;
    }
    fireCustomEvent(statsElement, 'render');
};

const paragraphs = document.querySelectorAll('p.text');
paragraphs.forEach(paragraph => {
    paragraph.addEventListener('click', handleParagraphClick);
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

