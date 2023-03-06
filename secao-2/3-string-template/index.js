const peso = 70;
const idade = 30;
const altura = 1.74;
const nome = "Guilherme";
let imc = (peso / altura ** 2).toFixed(2);

console.log(imc);

let output = `${nome} tem ${idade} anos, ${altura} de altura, ${peso} e IMC de ${imc}`;

console.log(output);
