const btnList = document.querySelectorAll('button');

const handleClick = function (e) {
  if (e.target === e.currentTarget) {
    e.target.textContent = 'clicked';
    console.log('clicked');
    e.target.removeEventListener('click', handleClick);
  }
};

const btn = btnList.forEach((el) => {
  el.addEventListener('click', handleClick);
});
