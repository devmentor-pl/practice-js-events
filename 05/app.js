const stats = {
  paragraphs: {
    p1: 0,
  },
  links: {
    "/dolor.html": 0,
  },
};

/* tutaj umieść swój kod */

const paragraphEls = document.querySelectorAll("p");
paragraphEls.forEach((el) =>
  el.addEventListener("click", (e) => {
    e.preventDefault();

    const tagName = e.target.tagName;
    const isParagraph = tagName.includes("P");
    const isLink = tagName.includes("A");

    if (isParagraph) {
      const id = e.target.dataset.id;
      changeStats("paragraphs", id);
    }

    if (isLink) {
      const href = e.target.getAttribute("href");
      changeStats("links", href);
    }
  })
);

const changeStats = function (data, key) {
  if (typeof stats[data][key] === "undefined") {
    stats[data][key] = 1;
  } else {
    stats[data][key]++;
  }
};

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
