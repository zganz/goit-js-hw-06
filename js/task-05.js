const inputEl = document.querySelector("#name-input");
console.log(inputEl);
const spanEl = document.querySelector("#name-output");
console.log(spanEl);


inputEl.onchange= function(){
    if(inputEl.value === ""){
        spanEl.textContent = "Anonymous";
    }
    else{
        spanEl.textContent = inputEl.value; 
    }
   
}