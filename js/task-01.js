
const categoryEl = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${categoryEl.length}`)


categoryEl.forEach(function (element) {
    console.log("Category: "+ element.querySelector("h2").textContent);
    console.log("Elements: "+ element.querySelectorAll("li").length);
  });


 
