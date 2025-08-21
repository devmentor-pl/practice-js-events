const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const ListItems = document.querySelectorAll('p, a');
const Listp = document.querySelectorAll("p");
// const Listlink = document.querySelectorAll("a");


const countClicks = function(e) {
    e.preventDefault()
    const getName = e.target.tagName;
    if(getName === 'A') {
        const index = e.target.getAttribute('href');
            if (typeof stats.links[index] === 'undefined') {
            stats.links[index] = 0;    
    }
            stats.links[index]+=1
    }
    if(getName === 'P'){
        const index = e.target.getAttribute('data-id');
            if (typeof stats.paragraphs[index] === 'undefined') {
            stats.paragraphs[index] = 0;    
        }
            stats.paragraphs[index]+=1}
    }

Listp.forEach(function(p) {
    p.addEventListener('click', countClicks)
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

