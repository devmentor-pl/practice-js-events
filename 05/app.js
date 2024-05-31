const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */
const pList = document.querySelectorAll('.text');

const statsManage = function (e) {
    e.preventDefault()

    if (e.target.tagName === 'P') {
        const para = e.currentTarget.dataset.id
        let paraCount = addValue(stats.paragraphs[para])
        paraCount++
        stats.paragraphs[para] = paraCount
        
    } else if (e.target.tagName === 'A') {
        const href = e.target.getAttribute('href')
        let hrefCount = addValue(stats.links[href])
        hrefCount++
        stats.links[href] = hrefCount
    }
}

function addValue(value) {
    if(!value) {
        value = 0;
    }
    return value
}


pList.forEach(function (para) {
    para.addEventListener('click', statsManage)
})

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

