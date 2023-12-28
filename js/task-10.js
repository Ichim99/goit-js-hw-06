function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createBoxes() {
  const boxCount = parseInt(document.getElementById('boxCount').value, 10) || 0;
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';

  let boxSize = 30;

  for (let i = 0; i < boxCount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);

    boxSize += 10;
  }
}

function destroyBoxes() {
  document.getElementById('boxes').innerHTML = '';
}