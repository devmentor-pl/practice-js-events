const divList = document.querySelectorAll('div');

const handleClick = function (e) {
  const datasetValue = e.currentTarget.dataset.time;
  console.log(datasetValue);
  // e.currentTarget.classList.add('clicked');

  const clickItem = e.currentTarget;
  console.log(e);
  setTimeout(function () {
    clickItem.classList.add('clicked');
  }, datasetValue);
};

const handleBodyClick = function (e) {
  console.log(e.target, e.currentTarget);
  if (e.target === document.body) {
    divList.forEach((el) => {
      el.classList.remove('clicked');
    });
  }
};

divList.forEach((el) => {
  el.addEventListener('click', handleClick);
  console.log(el.parentElement);
});

const bodyHandler = document.body.addEventListener('click', handleBodyClick);
