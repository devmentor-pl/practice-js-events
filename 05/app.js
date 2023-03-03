const stats = {
  paragraphs: {
    p1: 0,
  },
  links: {
    "/dolor.html": 0,
  },
};

let value = 0;

/* tutaj umieść swój kod */
const paragraphList = document.querySelectorAll(".text");

const pCounter = function (e) {
  //console.log(e.target);
  pNumber = this.getAttribute("data-id");
  ++value;
  stats.paragraphs[pNumber] = value;
};


let linkCount = 0;

const aCounter = function (e) {
  e.preventDefault();
  //console.log(e.target);
  //console.log(e.currentTarget);
  //console.log(this.firstElementChild);
  //console.log(e.target.classList.value);
  if (e.target.classList.value === "link") {
    a = this.firstElementChild.getAttribute("href");
    console.log(stats.links[a]);
    ++linkCount;
    stats.links[a] = linkCount;
  }
};

paragraphList.forEach(function (p) {
  p.addEventListener("click", pCounter);
  p.addEventListener("click", aCounter);
});

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector(".stats");
const fireCustomEvent = function (element, name) {
  console.log(element, '=>', name);

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
