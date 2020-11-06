const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */
const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
paragraphs[i].addEventListener("click", function () {
        if (paragraphs[i].dataset.id === "p1") {
            stats.paragraphs.p1 = stats.paragraphs.p1 + 1;
        }
}
)}
const els = document.querySelectorAll("a[href='/dolor.html']");
els.forEach(function (element) {
    element.onclick = function() {
        stats.links["/dolor.html"] = stats.links["/dolor.html"] + 1;
        element.href = "#";

    }
})

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function(element, name) {
    console.log(element, '=>', name);

    const event = new CustomEvent(name, { // tworzy swoj event
        bubbles: true, //czy wykorzystujemy bubbling propagacji
    });

    element.dispatchEvent( event ); // wywoluje zdarzenie w biezacym elemencie 
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

