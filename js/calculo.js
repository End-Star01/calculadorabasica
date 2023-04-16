// seleção dos eventos
const previousOperationText = document.querySelector("#aprevious-operatio");
const currentOperationText = document.querySelector("#acurrent-operation");
const buttons = document.querySelectorAll("#buttons-container button");


class Calculator {

}

// eventos
buttons.forEach(btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        console.log(value);

        if(+value >= 0 || value === "."){
            console.log(valor);
        } else {
            console.log('op:' + value);
        }
    });
}