const stats = {
    paragraphs: {
        'p1': 11,
    },
    links: {
        '/dolor.html': 11,
    }
};


//wyszukać wszystkie elementy <p/>
//zatrzymaj otwieranie linków 
//sprawdzenie event.target. , event.currentTarget.


/* tutaj umieść swój kod */




//Zatrzymanie przeładowania strony
const linkEl = document.querySelectorAll('p');

linkEl.forEach(function(linkEl) {
    linkEl.addEventListener('click', function(e){
        console.log(e.target ,'target');
        console.log(e.currentTarget, 'currentTarget');
        e.preventDefault();
        const tagName = e.target.tagName;
        console.log(tagName);
        if(tagName ==='P') {
            const id = e.target.getAttribute('data-id');
            console.log(id);
            if(typeof stats.paragraphs[id] === 'undefined') {
                stats.paragraphs[id] = 0;
            }
            stats.paragraphs[id]++;
        }
        else if(tagName === 'A') {
            const href = e.target.getAttribute('href');
            console.log(href);
            if(typeof stats.links[href] === 'undefined') {
                stats.links[href] = 0;
            }
            stats.links[href]++;

        }
    })
});






 







/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function(element, name) {
    //console.log(element, '=>', name);

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

