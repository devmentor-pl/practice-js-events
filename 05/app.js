const stats = {
	paragraphs: {
		p1: 0,
	},
	links: {
		'/dolor.html': 0,
	},
};

/* tutaj umieść swój kod */

const paragraphsArr = document.querySelectorAll('.text');
paragraphsArr.forEach((el) => {
	stats.paragraphs[el.getAttribute('data-id')] = 0;
	el.addEventListener('click', (e) => {
		stats.paragraphs[el.getAttribute('data-id')] += 1;
	});
});

const linksArr = document.querySelectorAll('a[href].link');
linksArr.forEach((el) => {
	stats.links[el.getAttribute('href')] = 0;
	el.addEventListener('click', (e) => {
		e.preventDefault();
		stats.links[el.getAttribute('href')] += 1;
	});
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
