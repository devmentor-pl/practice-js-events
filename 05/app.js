const stats = {
	paragraphs: {
		p1: 0,
	},
	links: {
		"/dolor.html": 0,
	},
};

/* tutaj umieść swój kod */

const pList = document.querySelectorAll("p");

pList.forEach(function (item) {
	item.addEventListener("click", function (e) {
		if (e.target === e.currentTarget) {
			let itemId = item.dataset.id;

			if (typeof stats.paragraphs[itemId] === "undefined") {
				stats.paragraphs[itemId] = 1;
			} else {
				stats.paragraphs[itemId] += 1;
			}
		} else {
			e.preventDefault();
			let hrefEl = e.target.getAttribute("href");

			if (typeof stats.links[hrefEl] === "undefined") {
				stats.links[hrefEl] = 1;
			} else {
				stats.links[hrefEl] += 1;
			}
		}
	});
});

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector(".stats");

const fireCustomEvent = function (element, name) {
	console.log(element, "=>", name);
	const event = new CustomEvent(name, {
		bubbles: true,
	});
	element.dispatchEvent(event);
};

const renderStats = function (data, element) {
	console.log(data, element);
	let html = "";
	for (let elementType in data) {
		console.log(elementType);
		html += "<ul>";

		for (let key in data[elementType]) {
			html += "<li>";
			html += key + " -> " + data[elementType][key];
			html += "</li>";
		}

		html += "</ul>";
	}

	element.innerHTML = html;
};

document.addEventListener("click", function (e) {
	const tagName = e.target.tagName;
	console.log(tagName);
	if (tagName.includes("P") || tagName.includes("A")) {
		fireCustomEvent(statsElement, "render");
	}
});
statsElement.addEventListener(
	"render",
	renderStats.bind(this, stats, statsElement)
);
document.addEventListener(
	"DOMContentLoaded",
	fireCustomEvent.bind(null, statsElement, "render")
);
