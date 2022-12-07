const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */
let counterP = 1;
let counterA = 1;
const temp = function (e) {
    if(e.target.tagName == 'A') {
        e.preventDefault();
        stats['links']['/dolor.html'] = counterA;
        counterA++;
    }
    else if(e.target.tagName == 'P'){
        stats['paragraphs']['p1'] = counterP;
        counterP++;
    }
    console.log(counterA, counterP);
}

const p = document.querySelectorAll('p');
p.forEach(function(item){
    item.addEventListener('click', temp)
})

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

