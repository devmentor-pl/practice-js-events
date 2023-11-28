// const stats = {
//   paragraphs: {
//     p1: 0,
//   },
//   links: {
//     '/dolor.html': 0,
//   },
// };

// /* tutaj umieść swój kod */
// const pEl = document.querySelectorAll('.text');

// function countClicks() {
//   //   const currentId = this.dataset.id;
//   const currentId = this.getAttribute('data-id');
//   if (!stats.paragraphs.hasOwnProperty(currentId)) {
//     stats.paragraphs[currentId] = 1;
//   } else {
//     const number = stats.paragraphs[currentId];
//     stats.paragraphs[currentId] = number + 1;
//   }
// }
// pEl.forEach((p) => {
//   p.addEventListener('click', countClicks);
// });

// const linksLink = document.querySelectorAll('.link');

// function countLinks(e) {
//   e.preventDefault();
//   const currentHref = this.getAttribute('href');
//   console.log(currentHref);
//   if (!stats.links.hasOwnProperty([currentHref])) {
//     stats.links[currentHref] = 1;
//   } else {
//     const number = stats.links[currentHref];
//     stats.links[currentHref] = number + 1;
//   }
// }
// linksLink.forEach((link) => {
//   link.addEventListener('click', countLinks);
// });

// /* nie modyfikuj kodu poniżej, ale przeanalizuj go */

// const statsElement = document.querySelector('.stats');
// const fireCustomEvent = function (element, name) {
//   console.log(element, '=>', name);

//   const event = new CustomEvent(name, {
//     bubbles: true,
//   });

//   element.dispatchEvent(event);
// };

// const renderStats = function (data, element) {
//   let html = '';
//   for (let elementType in data) {
//     html += '<ul>';

//     for (let key in data[elementType]) {
//       html += '<li>';
//       html += key + ' -> ' + data[elementType][key];
//       html += '</li>';
//     }

//     html += '</ul>';
//   }

//   element.innerHTML = html;
// };

// document.addEventListener('click', function (e) {
//   const tagName = e.target.tagName;
//   if (tagName.includes('P') || tagName.includes('A')) {
//     fireCustomEvent(statsElement, 'render');
//   }
// });
// statsElement.addEventListener(
//   'render',
//   renderStats.bind(this, stats, statsElement)
// );
// document.addEventListener(
//   'DOMContentLoaded',
//   fireCustomEvent.bind(null, statsElement, 'render')
// );

const stats = {
  paragraphs: {
    p1: 0,
  },
  links: {
    '/dolor.html': 0,
  },
};

/* tutaj umieść swój kod */
const pEl = document.querySelectorAll('.text');
const linksLink = document.querySelectorAll('.link');

function count(currentElement, key) {
  if (!stats[key].hasOwnProperty(currentElement)) {
    stats[key][currentElement] = 1;
  } else {
    const number = stats[key][currentElement];
    stats[key][currentElement] = number + 1;
  }
}

function countClicks() {
  const currentId = this.getAttribute('data-id');
  count(currentId, 'paragraphs');
}

function countLinks(e) {
  e.preventDefault();
  const currentHref = this.getAttribute('href');
  count(currentHref, 'links');
}

pEl.forEach((p) => {
  p.addEventListener('click', countClicks);
});
linksLink.forEach((link) => {
  link.addEventListener('click', countLinks);
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
