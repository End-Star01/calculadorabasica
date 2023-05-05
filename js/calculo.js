function soma(a,b){
    return a + b
};
function subt(a,b){
    return a - b
};
function mult(a,b){
    return a * b
};
function div(a,b){
    return a / b
};
function fator(n){
    if(n === 0 || n === 1){
        return 1
    }else{
        return n * fator(n-1)
    
}
function raiz(n){
    return Math.sqrt(n);
}

function potenc(a, b){
    return Math.pow(a, b)
}

function imp(num){
    if(num % 2 !== 0){
    resultadoP.innerTEXT = "Não";
    console.log(`${num} é Impar`);
    }else{
    resultadoImp.innerText = "Sim";
    console.log((`${num} é Par`));
}}

function par(num){
    if(num % 2 === 0){
    resultadoP.innerTEXT = "Não";
    console.log(`${num} é Par`);
    }else{
    resultadoImp.innerText = "Sim";
    console.log(`${num} é Impar`);
    }
}

function primo(num){
    if(num <= 1){
        console.log(`${num} Não é Primo`);
        resultadoPrimo.innerText = "Não";
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          console.log(`${num} NÃO é primo`);
          resultPrimo.innerText = "Não";
          return false;
        }
      }
      console.log(`${num} é primo`);
      resultPrimo.innerText = "Sim";
      return true;
  }
}

module.exports = {soma}