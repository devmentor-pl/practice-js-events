window.addEventListener('DOMContentLoaded', (e) => {
    const square = document.querySelector('div');
    square.addEventListener('mousemove', () => console.log('mousemove'));
    square.addEventListener('mouseleave', () => console.log('mouseleave'));
});