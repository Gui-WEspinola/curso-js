// declaração de função (function hoisting)

falaOi(); // Aqui ocorre o hoisting de função do JS. O engine detecta uma função declarada posteriormente e a utiliza em chamada anterior
function falaOi() {
    console.log('oi');
}

// First-class objects
// Function expression
const souUmDado = function () {
    console.log('Sou um dado.');
}; // Isso permite que essa função, armazenada em uma variável, seja utilizada como parâmetro em outra função.
souUmDado(); // também permite

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao();
}

executaFuncao(souUmDado);

// Arrow function
const arrowFunction = () => {
    console.log('Sou uma arrow function');
}
arrowFunction();

// Dentro de um objeto
const obj = {
    falar: function () {
        console.log('Estou falando')
    },
    falar2() {
        console.log('Também posso falar assim')
    }
};
obj.falar();
obj.falar2();