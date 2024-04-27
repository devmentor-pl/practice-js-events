const handleClick = function() {
  const self = this
  const timeValue = self.dataset.time
  setTimeout(function() {
    self.classList.add('clicked');
  }, timeValue);
}

const divList = document.querySelectorAll('div')

divList.forEach(function(div) {
  div.addEventListener('click', handleClick);
});

const removeClassFromDivList = function() {
  divList.forEach(function(div) {
    div.classList.remove('clicked');
  });
}

const body = document.querySelector('body');

body.addEventListener('click', function(e) {
  if (e.target === body) {
    removeClassFromDivList();
  }
});