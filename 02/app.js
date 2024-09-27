const moveOverAlert = function() {
  alert('Poruszasz się po czerwonym prostokącie!');
};

const leaveAlert = function() {
  alert('Opuszczasz czerwony prostokąt!');
};

const div = document.querySelector('div');

div.addEventListener('mousemove', moveOverAlert);
div.addEventListener('mouseout', leaveAlert);