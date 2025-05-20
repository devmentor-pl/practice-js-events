const divList = document.querySelectorAll('div');

const handleClick = function (e) {
  const datasetValue = e.currentTarget.dataset.time;
  console.log(datasetValue);
  e.currentTarget.className = 'clicked';
  let sum = 0;

  setTimeout(() => {
    for (let i = 0; i >= sum; i++) {}
  }, sum);
};

const handleBodyClick = function (e) {
  if (e.target === document.body) {
    const divEl = divList.forEach((el) => {
      el.className = '';
    });
  }
};

const divEl = divList.forEach((el) => {
  el.addEventListener('click', handleClick);
  console.log(el.parentElement);
});

const bodyHandler = document.body.addEventListener('click', handleBodyClick);
