console.log('ZAD 5')

const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */


// P listen
// ---------------
const paragraphs = document.querySelectorAll('.text')
const links = document.querySelectorAll('.link')

let countP = 0
let countA = 0
const clickP = function(e) {
    e.preventDefault()
    if(this === e.target) {
        countP++
        const dataP = e.target.dataset.id
        console.log(dataP)
        statsAdd('paragraphs', dataP)
    }
    links.forEach(link => {
        if(link === e.target) {
            countA++
            const hrefA = link.getAttribute('href')
            console.log(link)
            statsAdd('links', hrefA)
        }
    })
    console.log('count all P ->', countP)
    console.log('count all A ->', countA)
}

paragraphs.forEach(p => {
    p.addEventListener('click', clickP, false)
})

const statsAdd = function(element, subElement) {
    for(let key in stats) {
        if(element === key) {
            if(stats[key][subElement] === undefined) {
                stats[key][subElement] = 1
            } else {
                stats[key][subElement] += 1
            }
        }
    }
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

