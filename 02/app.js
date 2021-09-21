const div = document.querySelector('div');
div.addEventListener('mousemove', () => console.log(`You're in the rectangle`));
div.addEventListener('mouseleave', () => console.log('You left the rectangle'));
