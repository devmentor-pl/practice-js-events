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
paragraphs[i].addEventListener("click", function (e) {
        if (e.target.dataset.id === "p1") {
            stats.paragraphs.p1 = stats.paragraphs.p1 + 1;
        }
        if (e.target.dataset.id === "p2") {
            if(!stats.paragraphs.p2) {
                stats.paragraphs.p2 = 0;
            }
            
            stats.paragraphs.p2 = stats.paragraphs.p2 + 1;
            
        }
        if (e.target.dataset.id === "p3") {
            if(!stats.paragraphs.p3) {
                stats.paragraphs.p3 = 0;
            }
            
            stats.paragraphs.p3 = stats.paragraphs.p3 + 1;
            
        }
}
)}
const els = document.querySelectorAll("a[href='/dolor.html']");
els.forEach(function (element) {
    element.onclick = function(e) {
        console.log(e.target, e.currentTarget);
        stats.links["/dolor.html"] = stats.links["/dolor.html"] + 1;
        element.href = "#";

    }
})
const elsElite = document.querySelectorAll("a[href='/adipisicing-elite.html']");
elsElite.forEach(function (element) {
    
    element.onclick = function(e) {
        if(!stats.links['/adipisicing-elite.html']) {
            stats.links['/adipisicing-elite.html'] = 0;
        }
        console.log(e.target, e.currentTarget);
        stats.links['/adipisicing-elite.html'] = stats.links['/adipisicing-elite.html'] + 1;
        element.href = "#";

    }
})

const consectetur = document.querySelector("a[href='/consectetur.html']");
consectetur.onclick = function(e) {
    if(!stats.links['/consectetur.html']) {
        stats.links['/consectetur.html'] = 0;
    }
    console.log(e.target, e.currentTarget);
    stats.links['/consectetur.html'] = stats.links['/consectetur.html'] + 1;
    consectetur.href = "#";

}
/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');// wyszukanie elementu o klasie stat
const fireCustomEvent = function(element, name) { // bardzo uniwersalna funkcja ktora bedzie urochamiac nasz customowy event. element to element htmlowy na ktorym ma to byc event
    // a name to jego nazwa
    console.log(element, '=>', name);

    const event = new CustomEvent(name, { // tworzy swoj event
        bubbles: true, //czy wykorzystujemy bubbling propagacji
    });

    element.dispatchEvent( event ); // wywoluje zdarzenie w biezacym elemencie 
}

const renderStats = function(data, element) {
    let html = '';
    for(let elementType in data) {// iteruje po elementach obiektu stats
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
        fireCustomEvent(statsElement, 'render'); // wywoluje event render na statsElement
    }
});
statsElement.addEventListener('render', renderStats.bind(this, stats, statsElement));// kiedy event render nastapi, ma uchoromic sie renderStats
document.addEventListener('DOMContentLoaded', fireCustomEvent.bind(null, statsElement, 'render'));

