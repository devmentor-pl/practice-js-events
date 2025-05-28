document.addEventListener('DOMContentLoaded', function () {
  const divs = document.querySelectorAll('div');

  const newClass = function (e) {
    e.stopPropagation();
    this.classList.add('clicked');

    let current = this;

    let totalDelay = 0;

    while (current && current.tagName === 'DIV') {
      const delay = parseInt(current.dataset.time, 10) || 0;

      totalDelay += delay;
      const el = current;
      setTimeout(() => {
        el.classList.add('clicked');
      }, totalDelay);
      current = current.parentElement;
    }
  };

  document.body.addEventListener('click', function (e) {
    if (e.target === document.body) {
      divs.forEach(function (div) {
        div.classList.remove('clicked');
      });
    }
  });

  divs.forEach(function (div) {
    div.addEventListener('click', newClass);
  });
});
