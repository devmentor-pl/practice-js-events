const stats = {
  paragraphs: {
    p1: 0,
  },
  links: {
    "/dolor.html": 0,
  },
};

/* tutaj umieść swój kod */
const paragraphList = document.querySelectorAll(".text");

const Counter = function (e) {
  if (e.target.tagName === "P") {
    const paragraph = e.target.getAttribute("data-id");
    if (typeof stats.paragraphs[paragraph] === "undefined") {
      stats.paragraphs[paragraph] = 0;
    }
    stats.paragraphs[paragraph]++;
  }

  if (e.target.tagName === "A") {
    e.preventDefault();
    const a = e.target.getAttribute("href");
    console.log(a);
    if (typeof stats.links[a] === "undefined") {
      stats.links[a] = 0;
    }
    stats.links[a]++;
  }
};

paragraphList.forEach(function (p) {
  p.addEventListener("click", Counter);
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
