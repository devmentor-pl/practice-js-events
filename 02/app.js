document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('div').addEventListener('mousemove', () => console.log('kursor nad divem'));
    document.querySelector('div').addEventListener('mouseleave', () => console.log('kursor opuścił diva'));
})