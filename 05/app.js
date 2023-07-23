const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const pElements = document.querySelectorAll('p')

const countClick = function(e) {
    e.preventDefault();
    const elTagName = e.target.tagName;
    
    if (elTagName === 'A') {
        // console.log(`kliknales w link`)
        let aEl = e.target.getAttribute('href')
        if(typeof stats.links[aEl] === 'undefined') {
            stats.links[aEl] = 1;
        } else {
            stats.links[aEl] += 1;
        }  

    } else if (elTagName === 'P') {
        // console.log(`kliknales w paragraf`)
        let pEl = e.target.dataset.id;
        if(typeof stats.paragraphs[pEl] === 'undefined') {
            stats.paragraphs[pEl] = 1;
        } else {
            stats.paragraphs[pEl] += 1;
        }
    }
}

pElements.forEach(element => {
    element.addEventListener('click', countClick)
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

