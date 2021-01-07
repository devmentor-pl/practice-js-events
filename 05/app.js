const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const pElList = document.querySelectorAll('p');


// Zliczanie paragrafów

const counterParagraphs = function (e) {


    // działa, zrobione ale mało automatycznie - nie sprawdzać !!!
    /*
        if (this.dataset.id === 'p1') {
            stats.paragraphs.p1 += 1;
        }
    
        if (this.dataset.id === 'p2') {
            if (stats.paragraphs.p2 === undefined) {
                stats.paragraphs.p2 = 0;
                stats.paragraphs.p2 += 1;
            } else {
                stats.paragraphs.p2 += 1;
            }
        }
    
        if (this.dataset.id === 'p3') {
            if (stats.paragraphs.p3 === undefined) {
                stats.paragraphs.p3 = 0;
                stats.paragraphs.p3 += 1;
            } else {
                stats.paragraphs.p3 += 1;
            }
        }
    */

    // działa, zrobione bardziej automatycznie - już sprawdzone !!!
    /*
        if (stats.paragraphs[this.dataset.id] >= 0) {
            stats.paragraphs[this.dataset.id] += 1;
        } else {
            stats.paragraphs[this.dataset.id] = 0;
            stats.paragraphs[this.dataset.id] += 1;
        }
    */



    // działa, zrobione bardziej automatycznie - lepiej, znacznie lepiej !!!

    const id = this.dataset.id;
    if (typeof stats.paragraphs[id] === 'undefined') {
        stats.paragraphs[id] = 0;
    }
    stats.paragraphs[id]++;


    // Zliczanie linków
    const aElementsList = document.querySelectorAll('a');

    for (let i = 0; i < aElementsList.length; i++) {
        if (!aElementsList[i].hasAttribute('target')) {
            aElementsList[i].setAttribute('target', '_blank');
        }
    }

    // działa, zrobione ale mało automatycznie - nie sprawdzać !!!
    /*
        const tagName = e.target.tagName;
        if (tagName === 'A') {
            const linkText = e.target.innerText;
            if (linkText === 'dolor') {
                stats.links["/dolor.html"] += 1;
    
            } else if (linkText === 'adipisicing elit') {
    
                if (stats.links["/adipisicing-elite.html"] === undefined) {
                    stats.links["/adipisicing-elite.html"] = 0;
                    stats.links["/adipisicing-elite.html"] += 1;
                } else {
                    stats.links["/adipisicing-elite.html"] += 1;
                }
    
            } else if (linkText === 'consectetur') {
    
                if (stats.links["/consectetur.html"] === undefined) {
                    stats.links["/consectetur.html"] = 0;
                    stats.links["/consectetur.html"] += 1;
                } else {
                    stats.links["/consectetur.html"] += 1;
                }
            }
        }
    */

    // działa, zrobione bardziej automatycznie - już sprawdzone !!!
    /*
        const tagName = e.target.tagName;
        if (tagName === 'A') {
    
            if (stats.links[e.target.getAttribute('href')] >= 0) {
                stats.links[e.target.getAttribute('href')] += 1;
            } else {
                stats.links[e.target.getAttribute('href')] = 0;
                stats.links[e.target.getAttribute('href')] += 1;
            }
    
        }
    */



    // działa, zrobione bardziej automatycznie - lepiej, znacznie lepiej !!!

    const tagName = e.target.tagName;
    if (tagName === 'A') {
        const href = e.target.getAttribute('href');
        if (typeof stats.links[href] === 'undefined') {
            stats.links[href] = 0;
        }
        stats.links[href]++;
    }
}

pElList.forEach(function (pEl) {
    pEl.addEventListener('click', counterParagraphs);
});



/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function (element, name) {
    console.log(element, '=>', name);

    const event = new CustomEvent(name, {
        bubbles: true,
    });

    element.dispatchEvent(event);
}

const renderStats = function (data, element) {
    let html = '';
    for (let elementType in data) {
        html += '<ul>';

        for (let key in data[elementType]) {

            html += '<li>';
            html += key + ' -> ' + data[elementType][key];
            html += '</li>';
        }

        html += '</ul>'
    }

    element.innerHTML = html;
}


document.addEventListener('click', function (e) {
    const tagName = e.target.tagName;
    if (tagName.includes('P') || tagName.includes('A')) {
        fireCustomEvent(statsElement, 'render');
    }
});
statsElement.addEventListener('render', renderStats.bind(this, stats, statsElement));
document.addEventListener('DOMContentLoaded', fireCustomEvent.bind(null, statsElement, 'render'));

