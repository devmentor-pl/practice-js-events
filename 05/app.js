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
console.log(paragraphs)

const links = document.querySelectorAll('.link')
console.log(links)

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
    console.log(this === e.target)
    console.log(e.target)
    links.forEach(link => {
        if(link === e.target) {
            countA++
            // const hrefA = link.href
            const hrefA = link.getAttribute('href')
            console.log(hrefA)
            statsAdd('links', hrefA)
        }
    })
    console.log('count P', countP)
    console.log('count A', countA)

    // statsAdd('paragraphs')
}

paragraphs.forEach(p => {
    p.addEventListener('click', clickP, false)
})

const statsAdd = function(element, subElement) {
    console.log('stats')
    for(let key in stats) {
        console.log(key, stats[key])
        if(element === key) {
            console.log(stats[key])
            // stats[key]['p1'] += 1
            console.log(stats[key][subElement])
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

