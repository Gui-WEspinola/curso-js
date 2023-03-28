function filterArray() {
    // filter obviamente vai filtrar um array, retornando um array com a mesma quantidade de elementos ou menos.
    const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

    const numerosMaioresQue10 = numeros.filter(value => value > 10);
    const numerosDepoisIndex5 = numeros.filter((value, index) => index > 5); // formas normais de usar filter
// console.log(numerosMaioresQue10);
// console.log(numerosDepoisIndex5);

// explicação sobre callback function usada passada como argumento para funções de filter
    function callbackFilter(valor) { // é possível mandar o valor, indice e array
        return valor > 10;
    }
    const numerosFiltrados = numeros.filter(callbackFilter);
// console.log(numerosFiltrados);
// ainda é possível passar uma arrow function como argumento

    const filtroDeNumeros = numeros.filter((valor, indice) => valor > 10 && indice > 3);
    console.log(filtroDeNumeros);
}
filterArray();

function filterObjeto() {// SEGUNDO EXEMPLO
    const pessoas = [
        { nome: 'Gui', idade: 30 },
        { nome: 'Ana', idade: 22 },
        { nome: 'João', idade: 40 },
        { nome: 'José', idade: 18 },
        { nome: 'Rosana', idade: 27 },
        { nome: 'Letícia', idade: 65 },
        { nome: 'Wallace', idade: 55 }
    ];
    const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 5);
    const pessoasComMaisDe50Anos = pessoas.filter(obj => obj.idade > 50);
    const nomeTerminadoEmA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));

    console.log("pessoas com mais de 50 anos: " , pessoasComMaisDe50Anos);
    console.log("pessoas com nome acima ou igual a 5 letras: ", pessoasComNomeGrande);
    console.log("pessoas com nome terminado em 'a': ", nomeTerminadoEmA);

}
filterObjeto();