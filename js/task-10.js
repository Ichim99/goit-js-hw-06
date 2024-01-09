function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createBoxes() {
  const amount = document.getElementById('boxCountInput').value;
  const boxesContainer = document.getElementById('boxes');

  boxesContainer.innerHTML = '';

  const boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}
document.getElementById('createButton').addEventListener('click', createBoxes);
document.getElementById('destroyButton').addEventListener('click', destroyBoxes);