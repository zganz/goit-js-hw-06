const inputEl = document.querySelector("#name-input");
console.log(inputEl);
const spanEl = document.querySelector("#name-output");
console.log(spanEl);

inputEl.addEventListener('input', test);


function test() {
    console.log(inputEl.value);
    if(inputEl.value === ""){
        spanEl.textContent = "Anonymous";
    }
    else{
        spanEl.textContent = inputEl.value; 
    }
   
}

