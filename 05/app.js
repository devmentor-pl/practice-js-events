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
if (pList) {
  const checkType = function (event) {
    event.preventDefault();

    if (event.target.dataset.id) {
      const id = event.target.dataset.id;

      if (typeof event.target.dataset[id] === "undefined") {
        stats.paragraphs[id] = 0;
      }
      let counterForP = stats.paragraphs[id];
      stats.paragraphs[id] = ++counterForP;
    }
    if (event.target.hasAttribute("href")) {
      const href = event.target.getAttribute("href");
      console.log(href);
      if (typeof stats.links[href] === "undefined") {
        stats.links[href] = 0;
      }
      let counterForA = stats.links[href];
      stats.links[href] = ++counterForA;
    }
  };

  pList.forEach(function (item) {
    item.addEventListener("click", checkType);
  });
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
