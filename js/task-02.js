const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
ingredients.forEach(function(ingredient) {
const liElement = document.createElement('li');
liElement.textContent = ingredient;
liElement.classList.add('item');
ingredientsList.appendChild(liElement);
  });
 