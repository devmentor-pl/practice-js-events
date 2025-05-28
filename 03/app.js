document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelectorAll('button');

  const changeText = function () {
    this.innerText = 'clicked';
        console.log('clicked');


    this.removeEventListener('click', changeText);
  };

  btn.forEach(function (btnEl) {
    btnEl.addEventListener('click', changeText);
  });
});
