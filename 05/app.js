const stats = {
    paragraphs: {
        'p1': 0,

    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const statsElement = document.querySelector('.stats'); // wyszukuje .stats 

document.querySelectorAll('p.text').forEach( paragraph => { // Nasłuchiwanie tylko na p "paragrafy" klasa .text

    paragraph.addEventListener('click', function(e){ // event na klik, callback event

        const pIds = this.dataset.id; // pobieram data-id
        stats.paragraphs[pIds] = (stats.paragraphs[pIds] || 0) + 1; // Dodaje nowy p2, p3 itd..

       if(e.target.tagName === 'A' && e.target.classList.contains('link')){ // sprawdzam dwa warunki, A=a, alternatywa closest('a.link') 
            
        e.preventDefault(); // zatrzymuje domyślną akcje

            const aLinks = e.target.getAttribute('href');

            stats.links[aLinks] = (stats.links[aLinks] || 0) + 1; // Dodaje wartość do links
        }

        fireCustomEvent(statsElement, 'render'); // wywaołanie "odświeżenie" statysyk
    });
});

function fireCustomEvent(elemFire, fireEvent){ // lepiej uzywać: (item, eventName) i wtedy ponizej tez te wartości? 
    const eventFire = new Event(fireEvent);
    elemFire.dispatchEvent(eventFire); //  wywołuję event na elemencie // np. btnElement.dispatchEvent(eventClick);
}

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */



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

