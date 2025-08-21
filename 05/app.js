const stats = {
  paragraphs: {
    p1: 0,
  },
  links: {
    "/dolor.html": 0,
  },
};

/* tutaj umieść swój kod */

const paragraphElements = document.querySelectorAll("p");
paragraphElements.forEach((element) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      const { id } = e.target.dataset;
      addOneToStats(id, "paragraphs");
    } else {
      const { href } = e.target;
      const [endPoint] = href.split("/").splice(-1);
      console.log(endPoint);
      addOneToStats(`/${endPoint}`, "links");
    }
  });
});

function addOneToStats(key, statsProperty) {
  stats[statsProperty][key] === undefined
    ? (stats[statsProperty][key] = 0)
    : (stats[statsProperty][key] += 1);
}
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
