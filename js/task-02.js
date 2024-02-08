const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const arrayIngredients = ingredients.map(ingredient => {
  const element = document.createElement('li');
  element.textContent = ingredient;
  element.classList.add('item');
  return element;
});

listIngredients.append(...arrayIngredients);