console.log("operadores aritméticos(matematicos)")

let salario = 5;

// + , - , * , / , **

console.log(salario ** salario)

let idade = 18;

//++(imcremento) --(decremento) 
console.log(++idade)
console.log("======================")
//////////////////////////////////

console.log("(operadores de atribuição)")
//operador de atribuição é o (=)

let valor = 100

valor += valor;
console.log(valor)

console.log("======================")
////////////////////////////////////

console.log("(operadores ternários)")

// tem um cliente, se ele estiver 100 pontos(premium)

let pontos = 200;
let tipo = pontos > 100 ? 'premium' : 'comum';

console.log(tipo)

console.log("======================")

console.log("(operadores ternários)")

//operador lógico (&&) 
// se os 2 operandos forem true

console.log(false && false)

let maiorIdade = true;
let carteirinhaTrabalho = true

let podeAplicar = maiorIdade && carteirinhaTrabalho;

console.log(podeAplicar)

//operador lógico (||)[ou] apenas uma condição for verdadeira
//operador lógico NOT(!)

console.log("======================")
