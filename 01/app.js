const btn = document.querySelector('button');

const addText = function () {
  console.log('clicked');
};

if (btn) {
  btn.addEventListener('click', addText);
}
