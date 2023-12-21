const numberOfCategories = document.querySelectorAll("li.item");
console.log('Number of categories:', numberOfCategories.length);

for (let i = 0; i < numberOfCategories.length; i++){
const liCategory = numberOfCategories[i];
const categoryTitle = liCategory.querySelector('h2').textContent;
const categoryElements = liCategory.querySelectorAll('ul > li');
console.log('Category:', categoryTitle);
console.log('Elements:', categoryElements.length);
}