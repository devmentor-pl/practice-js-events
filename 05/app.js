const stats = {
  paragraphs: {},
  links: {},
};

/* tutaj umieść swój kod */
function countLinksClicks(href) {
  if (!stats.links[href]) {
    stats.links[href] = 0;
  }
  stats.links[href]++;
}

function countParagraphClicks(dataId) {
  if (!stats.paragraphs[dataId]) {
    stats.paragraphs[dataId] = 0;
  }
  stats.paragraphs[dataId]++;
}

document.addEventListener('click', function (e) {
  const target = e.target;
  if (target.classList.contains('link')) {
    e.preventDefault();
    countLinksClicks(target.getAttribute('href'));
  } else if (target.dataset.id) {
    countParagraphClicks(target.dataset.id);
  }
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
statsElement.addEventListener(
  'render',
  renderStats.bind(this, stats, statsElement)
);
document.addEventListener(
  'DOMContentLoaded',
  fireCustomEvent.bind(null, statsElement, 'render')
);
