
const categoriesEl = document.querySelectorAll('.item');
const categoriesLengthEl = categoriesEl.length;

console.log(`В списке ${categoriesLengthEl} категории.`);


const categoriesTitleEl = document.querySelector('h2 ')
const showCategories = item => item.forEach(item =>
    console.log(`Категория: ${item.querySelector(`h2`).textContent}. Количество элементов: ${item.querySelectorAll(`li`).length}.`))
showCategories(categoriesEl);

