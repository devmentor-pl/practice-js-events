const stats = {
  paragraphs: {
    p1: 0,
  },
  links: {
    "/dolor.html": 0,
  },
};

/* tutaj umieść swój kod */

const pElements = document.querySelectorAll("p");
const aElement = document.querySelector("a");

const clickCounter = function (e) {
  e.preventDefault();
  const attr = e.target.getAttribute("data-id");
  const linkHref = e.target.getAttribute("href");

  if (typeof stats.paragraphs[attr] == "null") {
    console.log("null");
  }
  if (typeof stats.links[linkHref] === "null") {
    stats.links[linkHref] = "";
  }
  if (
    e.target.tagName === "P" &&
    typeof stats.paragraphs[attr] === "undefined"
  ) {
    stats.paragraphs[attr] = 1;
  }
  if (
    e.target.tagName === "A" &&
    typeof stats.links[linkHref] === "undefined"
  ) {
    stats.links[linkHref] = 1;
  }
  if (typeof stats.paragraphs[attr] !== "undefined") {
    stats.paragraphs[attr]++;
  }
  if (typeof stats.links[linkHref] !== "undefined") {
    stats.links[linkHref]++;
  }
};

pElements.forEach(function (item) {
  item.addEventListener("click", clickCounter, true);
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
  let html = "";
  for (let elementType in data) {
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
