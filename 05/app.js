const stats = {
  paragraphs: {
    p1: 0,
    p2: 0,
    p3: 0,
  },
  links: {
    '/dolor.html': 0,
    '/adipisicing-elite.html': 0,
    '/consectetur.html': 0,
  },
};

/* tutaj umieść swój kod */

const pList = document.querySelectorAll('.text');

const handleClick = function (e) {
  e.preventDefault();
  const href = e.target.getAttribute('href');
  const id = e.target.dataset.id;
  console.log(href);

  if (href in stats.links) {
    stats.links[href]++;
    console.log(href);
  }

  if (id in stats.paragraphs) {
    stats.paragraphs[id]++;
  }
};

pList.forEach((el) => {
  el.addEventListener('click', handleClick);
});

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function (element, name) {
  console.log(element, '=>', name);

  const event = new CustomEvent(name, {
    bubbles: true,
  });

  element.dispatchEvent(event);
};

const renderStats = function (data, element) {
  let html = '';
  for (let elementType in data) {
    html += '<ul>';

    for (let key in data[elementType]) {
      html += '<li>';
      html += key + ' -> ' + data[elementType][key];
      html += '</li>';
    }

    html += '</ul>';
  }

  element.innerHTML = html;
};

document.addEventListener('click', function (e) {
  const tagName = e.target.tagName;
  if (tagName.includes('P') || tagName.includes('A')) {
    fireCustomEvent(statsElement, 'render');
  }
});
statsElement.addEventListener('render', renderStats.bind(this, stats, statsElement));
document.addEventListener('DOMContentLoaded', fireCustomEvent.bind(null, statsElement, 'render'));
