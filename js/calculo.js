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
        this.currentOperation = digit
    }
}

const calc = new Calculator(previousOperationText,currentOperationText)

// eventos
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerHTML;
        console.log(value);
    })
})