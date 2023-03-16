// IIFE -> Immediately invoked function expression
(function (idade, peso, altura) { // parâmetros exigidos para função
    const sobrenome = 'wanderley';

    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('guilherme'))
    }

    falaNome();
    console.log(idade, peso, altura)

})(30, 70, 1.75); // argumentos passados

