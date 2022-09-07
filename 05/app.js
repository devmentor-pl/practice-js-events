const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */
const paragraphs = document.querySelectorAll('p');

const countHandler = function(e){
    e.preventDefault();
    const keyParagraph = e.target.dataset.id;
    const keyLink = e.target.getAttribute('href');

    if(e.target.className === 'text'){
        if(!stats.paragraphs[keyParagraph]){
            stats.paragraphs[keyParagraph] = 1;
        }else{
            stats.paragraphs[keyParagraph]++;
        }
    }
    if(keyLink){
        if(!stats.links[keyLink]){
            stats.links[keyLink] = 1;
        }
        if(stats.links[keyLink]){
            stats.links[keyLink]++
        }
    }
}
paragraphs.forEach(function(p){
    p.addEventListener('click', countHandler)});

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
    // console.log('data', data);
    // console.log('element', element);
    for(let elementType in data) {
        html += '<ul>';
        // console.log('data[elementType]', data[elementType]);
        for(let key in data[elementType]) {
            // console.log('data[elementType][key]', data[elementType][key]);
            
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

