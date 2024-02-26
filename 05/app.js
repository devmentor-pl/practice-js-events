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

pList.forEach(function (pEl) {
  pEl.addEventListener("click", function (e) {
    e.preventDefault();

    const elByHref = e.target.getAttribute("href");
    // console.log(elByHref);
    const elById = e.target.dataset.id;
    // console.log(elById);

    if (e.target.tagName.includes("P")) {
      increaseNumber("paragraphs", elById);
    }

    if (e.target.tagName.includes("A")) {
      increaseNumber("links", elByHref);
    }

    function increaseNumber(el, elType) {
      if (typeof stats[el][elType] === "undefined") {
        return (stats[el][elType] = 1);
      } else {
        return stats[el][elType]++;
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
