const counterValue = document.querySelector("#value");
console.log(counterValue.textContent);
const btnIncrement = document.querySelector('#counter [data-action="increment"]');
const btnDecrement = document.querySelector('#counter [data-action="decrement"]');
console.log(btnIncrement);
console.log(btnDecrement);
btnIncrement.onclick = function(){
    let number = Number(counterValue.textContent)+1;
    counterValue.textContent= number;
    
}

btnDecrement.onclick = function(){
    let number = Number(counterValue.textContent)-1;
    counterValue.textContent= number;
    
}



















