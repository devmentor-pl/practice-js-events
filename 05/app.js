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
let value = 0;
let valueLink = 0;

const clickCounter = function (e) {
  e.preventDefault();
  if (e.target.tagName === "P" && e.target.getAttribute("data-id") === "p1") {
    stats["paragraphs"]["p1"] = value;
    value++;
  }
  if (
    e.target.tagName === "A" &&
    e.target.getAttribute("href") === "/dolor.html"
  ) {
    stats["links"]["/dolor.html"] = valueLink;
    valueLink++;
  }
};

pElements.forEach(function (item) {
  item.addEventListener("click", clickCounter, false);
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
