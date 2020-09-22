const btn = document.querySelector('button');
function logOnClick() {
  console.log('clicked')
}
if (btn) {
  btn.addEventListener('click', logOnClick)
}

//Second version:
if (btn) {
  btn.addEventListener('click', function () {
    console.log('clicked version 2')
  })
}