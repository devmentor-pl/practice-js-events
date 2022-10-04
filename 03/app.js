const textClicked = function() {
    console.log('clicked');
}

const textClickedSecond = function() {
    console.log('clicked');
}

const textClickedThird = function() {
    console.log('clicked');
}


const btnsElements = document.querySelector('.first');
if(btnsElements) {
    btnsElements.addEventListener('click', textClicked );
}


const btnElementSecond = document.querySelector('.second');
if(btnElementSecond) {
    btnElementSecond.addEventListener('click', textClickedSecond );
}


const btnElementThird = document.querySelector('.third');
if(btnElementThird) {
    btnElementThird.addEventListener('click', textClickedThird );
}




