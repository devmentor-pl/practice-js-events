const getButton = document.querySelector('button')

// getButton.addEventListener('click', e => {
//     console.log('clicked')
// })

const text = function() {
    console.log('clicked')
};

getButton.addEventListener('click', text);