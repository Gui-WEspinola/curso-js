function parametros() {

    // lembrando que ARGUMENTOS SÃO VALORES QUE ENVIAMOS PARA SEREM PASSADOS COMO PARÂMETROS DE UMA FUNÇÃO.

    function funcao() {
        console.log(arguments);
    }

    funcao('funções definidas com palavra "function", podemos acessar os argumentos passados através da variável "arguments"',
        'Arguments será um array com os valores passados armazenados em cada posição');

    function soma() {
        let total = 0;
        for (let argumento of arguments) {
            total += argumento;
        }
        console.log(total);
    }

    soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    function somaComArgs(a, b, c) {
        let total = 0;
        for (let argumento of arguments) {
            total += argumento
        }
        console.log(total, a, b, c);
    }

    somaComArgs(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // a soma não muda, pq todos os parâmetros passados estão em args.
// caso sejam exigidos mais parâmetros do que os passados, serão atribuídos valores undefined a elas.

    // argumento que sustenta todos os argumentos enviados
    function somaFaltandoArgumento(a, b = 2, c = 4) { // valor default para b
        console.log(a + b + c);
    }

    somaFaltandoArgumento(2, undefined, 10); // ao usar undefined, vc pode usar o valor default do parâmetro.

    let objeto = {nome: 'gui', sobrenome: 'wanderley', idade: '30'};

    function objetoFunction({nome, sobrenome, idade}) { // é possível definir parâmetros e argumentos por desestruturação de obj
        console.log(nome, sobrenome, idade);
    } // também é possível fazer a desestruturação com arrays de mesma maneira.

    objetoFunction(objeto);

    const conta = function (operador, acumulador, ...numeros) { // é possível passar essa função assim, com numeros sendo um array.
        for (let numero of numeros) {
            if (operador === '+') acumulador += numero;
            if (operador === '-') acumulador -= numero;
            if (operador === '*') acumulador *= numero;
            if (operador === '/') acumulador /= numero;
        }
        console.log(acumulador); // mas também é possível definir um rest operator na declaração da função
    }; // com o rest operator, o array é criado automaticamente com todos os argumentos recebidos após o último parâmetro.
    conta('+', 10, 20, 30, 40, 50);
    // lembrando que arrow functions não possuem o arguments para serem usados dentro da função

    // no caso de arrow functions, é possível utilizar o rest operator para capturar todos os parâmetros passados em args:
    const contaArrow = (...args) => {
        console.log(args);
    }
    contaArrow(1, 2, 3, 4, 5)
}

parametros();