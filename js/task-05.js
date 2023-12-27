const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
nameInput.addEventListener('input', function () {    
const newName = nameInput.value === '' ? 'Anonymous' : nameInput.value;
nameOutput.textContent = newName;
});


