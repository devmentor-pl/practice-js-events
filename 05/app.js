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

  if (e.target.tagName === 'P') {
  const id = e.target.dataset.id;
  // update the paragrafs
  stats.paragraphs[id] ? stats.paragraphs[id]++ : stats.paragraphs[id] = 1;
} else if (e.target.tagName === 'A') {
  // stop linking
  e.preventDefault();
  const href = e.target.href;
  // update the links
  stats.links[href] ? stats.links[href]++ : stats.links[href] = 1;
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

  element.dispatchEvent(event);
}

const renderStats = function(data, element) {
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


document.addEventListener('click', function(e) {
  const tagName = e.target.tagName;
  if (tagName.includes('P') || tagName.includes('A')) {
    fireCustomEvent(statsElement, 'render');
  }
});
statsElement.addEventListener('render', renderStats.bind(this, stats, statsElement));
document.addEventListener('DOMContentLoaded', fireCustomEvent(statsElement, 'render'));
