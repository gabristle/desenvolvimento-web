let a = 5; //int
let b = 10; //int
let c = 2; //float
let celsius = 0;
let fahrenheit = 0;

//let resultado = c ** 2; exponencial
let resultado = a + b * c; //a sequencia é multiplicação/divisão, soma/subtração
console.log(resultado);

celsius = parseFloat(prompt('Digite a temperatura em celsius:'));
console.log(celsius);

fahrenheit = celsius * 1.8 + 32;
alert('A temperatura em fahrenheit é ' + fahrenheit.toFixed(2));