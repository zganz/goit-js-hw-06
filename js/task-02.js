const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientsHtml = " ";

ingredients.forEach(function(element){
  
  let newDiv = document.createElement("li");
  
  newDiv.textContent = element;
  newDiv.classList.add('item');
  console.log(newDiv);
  ingredientsHtml += newDiv.outerHTML;
});

console.log(ingredientsHtml);

const contentUl = document.querySelector('#ingredients');
contentUl.innerHTML = ingredientsHtml;