const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */
const pElements = document.querySelectorAll('p');

const handleClick = function(e) {
  e.preventDefault();

  const id = this.dataset.id;

console.log(id);
  const lin = this.getAttribute('href');

  // update count in object stats
  if (e.target.tagName === 'P') {
    stats.paragraphs[id]++;
    // add to paragraphs

  // if link
  }
  else if (e.target.tagName === 'A') {

    console.log('link clicked');
    stats.links[lin] = 0;
    console.log(lin);
    const link = this.target;
    stats.links[lin];
  }
};

pElements.forEach(function(item) {
  //addEventListener
  item.addEventListener('click', handleClick);
})
















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
document.addEventListener('DOMContentLoaded', fireCustomEvent(statsElement, 'render'));
