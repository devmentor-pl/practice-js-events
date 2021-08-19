const stats = {
  paragraphs: {
    p1: 0,
  },
  links: {
    "/dolor.html": 0,
  },
};

/* tutaj umieść swój kod */

const paragraphs = document.querySelectorAll("p");
paragraphs.forEach(function (el) {
  el.addEventListener("click", function (e) {
    let tag = e.target.tagName;
    let id = e.target.dataset.id;
    let href = e.target.getAttribute("href");
    if (tag == "P") {
      incrementParagraph(id);
    } else if (tag == "A") {
      e.preventDefault();
      incrementLink(href);
    }
  });
});

function incrementParagraph(id) {
  if (isNaN(stats.paragraphs[id])) {
    stats.paragraphs[id] = 1;
  } else {
    stats.paragraphs[id]++;
  }
}

function incrementLink(href) {
  if (isNaN(stats.links[href])) {
    stats.links[href] = 1;
  } else {
    stats.links[href]++;
  }
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
