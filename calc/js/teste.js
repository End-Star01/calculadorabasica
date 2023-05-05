var assert = require('assert');
var {soma} = require('../calc/calculo.js')


// Soma
assert(soma(2,0)==2,"Verificar se 2 + 0 é igual a 2.")
assert(soma(6,4)==10,"Verificar se 6 + 4 é igual a 10.")
assert(soma(0,-5)==-5,"Verificar se 0 + (-5) é igual a -5.")
assert(soma(10,-12)==-2,"Verificar se 10 + (-12) é igual a -2.")
assert(soma(5,-5)==-0,"Verificar se 5 + (-5) é igual a 0.")
assert(soma(-5,-5)==-10,"Verificar se (-5) + (-5) é igual a -10.")
assert(soma(500,1500)==2000,"Verificar se 500 + 1500 é igual a 2000.")

// Subtrair
assert(soma(-5,5)==-10,"Verificar se (-5) - 5 é igual a -10.");
assert(soma(100,500)==-400,"Verificar se 100 - 500 é igual a -400.");
assert(soma(0.5,-3)==-2.5,"Verificar se 0.5 - 3 é igual a -2,5.");
assert(soma(500,1009)==-509,"Verificar se 500 - 1009 é igual a -509.");
assert(soma(6,3)==3,"Verificar se 6 - 3 é igual a 3.");
assert(soma(0,1)==-1,"Verificar se 0 - 1 é igual á -1.");
assert(soma(0,0)==0,"Verificar se 0 - 0 é igual a 0.");

// Multiplicar
assert(soma(-5,5)==2-10,"Verificar se 5 * 5 é igual a 25.")
assert(soma(-5,5)==2-10,"")
assert(soma(-5,5)==2-10,"")
assert(soma(-5,5)==2-10,"")
assert(soma(-5,5)==2-10,"")
assert(soma(-5,5)==2-10,"")
