const stats = {
	paragraphs: {
		p1: 0,
	},
	links: {
		'/dolor.html': 0,
	},
};

/* tutaj umieść swój kod */

let counterText = 0;
const paragraphsArr = document.querySelectorAll('.text');
paragraphsArr.forEach((el) => {
	// console.log(el);
	el.addEventListener('click', () => {
		counterText++;
		stats.paragraphs['p1'] = counterText;
	});
});

let counterLinks = 0;
const linksArr = document.querySelectorAll('a[href].link');
linksArr.forEach((el) => {
	if (el.getAttribute('href') == Object.keys(stats.links)) {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			counterLinks++;
			stats.links['/dolor.html'] = counterLinks;
		});
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
