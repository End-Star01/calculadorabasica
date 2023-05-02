const select = document.getElementById("ifunct")
const result = document.querySelector(".result")
const a = document.getElementById("inum1")
const b = document.getElementById("inum2")
const c = document.getElementById("inum3")

function resultado(){
    
    if(a.value == "" || b.value == ""){
    alert("Digite um numero")
    return
    }
    let resultado 
    switch (select.value) {
        case "+":
            resultado = soma(Number(a.value),Number(b.value));
            result.innerHTML = resultado
            break;

        case "-":
            resultado = subt(Number(a.value),Number(b.value));
            result.innerHTML = resultado
            break;

        case "*":
            
            resultado = soma(Number(a.value),Number(b.value));
            result.innerHTML = resultado
            break;

            case "/":
            
            resultado = soma(Number(a.value),Number(b.value));
            result.innerHTML = resultado
            break;

            case "!":
            
            resultado = soma(Number(a.value),Number(b.value));
            result.innerHTML = resultado
            break;




            
        default:
            break;
    }
} 
function resultadopimp(){
    switch (select.value){
    case "v":
            console.log('db');
            resultado = raiz(Number(c.value));
            result.innerHTML = resultado
            break;
    
            case "primo":
            
            resultado = (Number(c.value));
            result.innerHTML = resultado
            break;

            case "pimp":
            
            resultado = soma(Number(c.value));
            result.innerHTML = resultado
            break;

            case "f":
            resultado = fator(Number(c.value));
            result.innerHTML = resultado
            break;
}
}