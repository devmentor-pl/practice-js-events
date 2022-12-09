const stats = {
	paragraphs: {
		p1: 0,
	},
	links: {
		'/dolor.html': 0,
	},
};

/* tutaj umieść swój kod */
const pElementsList = document.querySelectorAll('.text');

const countLinkClick = function (e) {
	const href = e.target.getAttribute('href');
	if (typeof stats['links'][href] === 'undefined') {
		stats['links'][href] = 0;
	}
	stats['links'][href]++;
};

const countTextClick = function (e) {
	const id = e.currentTarget.dataset.id;
	if (typeof stats['paragraphs'][id] === 'undefined') {
		stats['paragraphs'][id] = 0;
	}
	stats['paragraphs'][id]++;
};

const countClick = function (e) {
	e.preventDefault();
	if (e.currentTarget.tagName === 'P') {
		countTextClick(e);
	}

	if (e.target.tagName === 'A') {
		countLinkClick(e);
	}
};

pElementsList.forEach(function (item) {
	item.addEventListener('click', countClick);
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
