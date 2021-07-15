const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



const ingredientList = document.querySelector('#ingredients');

const makeIngredientsList = (elements) => {
const elementsList = elements.map(element => {
  const ingredientListEl = document.createElement('li');
ingredientListEl.textContent = element;

return ingredientListEl;
})

ingredientList.append(...elementsList);
};

makeIngredientsList(ingredients);





