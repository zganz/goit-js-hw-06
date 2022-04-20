const inputEl = document.querySelector('#validation-input');
console.log(inputEl);
const lengthEl = inputEl.getAttribute('data-length');
console.log(lengthEl);



inputEl.onblur = function() {
    if(inputEl.value.length == lengthEl){
        
        inputEl.classList.add('valid'); 
        inputEl.classList.remove('invalid');
    }

    else{
        inputEl.classList.add('invalid'); 
        inputEl.classList.remove('valid');  
    }
    console.log(inputEl)
}