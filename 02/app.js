document.addEventListener('DOMContentLoaded', function () {
  const divEl = document.querySelector('div');

  function showPosition(e) {
    // console.log(e);
    const X = e.clientX;
    const Y = e.clientY;
    console.log(`Position X: ${X}, Position Y: ${Y}`);
  }

  function showClickedInfo(e) {
    const X = e.clientX;
    const Y = e.clientY;
    console.log(`Kursor opuścił element w pozycji X: ${X} i Y: ${Y}`);
  }

  divEl && divEl.addEventListener('mousemove', showPosition);
  divEl && divEl.addEventListener('mouseout', showClickedInfo);
});
