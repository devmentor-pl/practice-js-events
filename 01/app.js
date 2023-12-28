const btn = document.querySelector('button');

function showinfo() {
  console.log('clicked');
}
btn && btn.addEventListener('click', showinfo);
