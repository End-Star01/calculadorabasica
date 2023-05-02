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
        if(digit === "." && this.currentOperationText.innerHTML.includes(".")){
            return;
        }

        this.currentOperation = digit
        this.updateScreen()
    }

processOperation(operation){
    let operationValue
    const previous = +this.previousOperationText.innerHTML.split(" ")[0];
    const current = +this.currentOperationText.innerHTML;

    switch (operation) {
        case "+":
            operationValue = previous + current
            this.updateScreen(operationValue, operation, current, previous);
            break;
            case "-":
            operationValue = previous + current
            this.updateScreen(operationValue, operation, current, previous);
        default:
            break;
            case "/":
            operationValue = previous + current
            this.updateScreen(operationValue, operation, current, previous);
        default:
            break;
            case "*":
            operationValue = previous + current
            this.updateScreen(operationValue, operation, current, previous);
        default:
            return;
            case "!":
            operationValue = previous + current
            this.updateScreen(operationValue, operation, current, previous);
        default:
            return;
            case "-":
            operationValue = previous + current
            this.updateScreen(operationValue, operation, current, previous);
        default:
            return;
    }
}

    updateScreen(
        operationValue = null,
        operation = null,
        current = null,
        previous = null
         )
         {
            if(operationValue === null){
                this.currentOperationText.innerHTML += this.currentOperation;
            } else {
                if(previous === 0){
                    operationValue = current
                }

                this.previousOperationText.innerHTML = `${operationValue} ${operation}`
                this.currentOperationText.innerHTML = "";
            }



            console.log(operationValue,operation,current,previous);

            this.currentOperationText.innerHTML += this.currentOperation;
            
    }
}


const calc = new Calculator(previousOperationText,currentOperationText)

// eventos
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerHTML;
        

        if(+value >= 0 || value === "."){
            calc.addDigit(value)
        } else {
            calc.processOperation(value);
        }

    })
})