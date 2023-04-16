// seleção dos eventos
const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#button-container button");


class Calculator {
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText
        this.currentOperation = ""
    }

    addDigit(digit) {
        console.log(digit);
    }
}

const calc = new Calculator(previousOperationText,currentOperationText)

// eventos
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerTEXT;

        console.log(value);

        if(+value >= 0 || value === "."){
            calc.addDigit(value);
        } else {
            console.log('op:' + value);
        }
    });
})