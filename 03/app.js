const btnsList = document.querySelectorAll('button');

btnsList.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = 'clicked';
    console.log('clicked');
    btn.disabled = true;
  });
})