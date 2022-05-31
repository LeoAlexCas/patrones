//Currying
//Para casos en donde tengas una funcion donde no conozcas aun uno de los parametros
const suma = (a, b) => a + b;

//funcion curried - solo recibira un argumento y retornada una funcion que recibe otro argumento
//cuando se reciba la totalidad de los argumentos se ejecutara
const sumaCurried = a => b => a + b;

const suma1 = sumaCurried(2);
console.log(suma1(4));