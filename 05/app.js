const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */
const pEl = document.querySelectorAll(".text");

const counter = function (e) {
    

    if(e.target.tagName === "P") {
        
        const paraId = e.target.dataset.id

        if(typeof stats.paragraphs[paraId] === "undefined") {
            stats.paragraphs[paraId] = 1;
        } else {
            stats.paragraphs[paraId]++;
        }


    } else if (e.target.tagName === "A") {

        e.preventDefault()
        const lnikId = e.target.getAttribute("href");

        if(typeof stats.links[lnikId] === "undefined") {
            stats.links[lnikId] = 1;
        }else {
            stats.links[lnikId]++;
        };
    };

}

if(pEl) {
    pEl.forEach(function(element){
        element.addEventListener("click", counter);
    })
}

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

