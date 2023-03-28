function reduceArray() {
    const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// a callback function é o primeiro parâmetro
    const total = numeros.reduce((contador, valor) => contador += valor, 0); // valor inicial é o segundo parâmetro.
    console.log(total);

    // retornar um array com o dobro dos valores (Map)
    const dobro = numeros.reduce((contador, valor) => {
        contador.push(valor * 2);
        return contador;
    }, []);
    console.log(dobro);

    const pessoas = [
        { nome: 'Gui', idade: 30 },
        { nome: 'Ana', idade: 22 },
        { nome: 'João', idade: 40 },
        { nome: 'José', idade: 18 },
        { nome: 'Rosana', idade: 27 },
        { nome: 'Letícia', idade: 65 },
        { nome: 'Wallace', idade: 55 }
    ];

    const maisVelha = pessoas.reduce(function(acumulador, valor) {
        return acumulador.idade > valor.idade ? acumulador : valor;
    });
    console.log(maisVelha);

    const maisVelha2 = pessoas.reduce((acumulador, valor) => acumulador.idade > valor.idade ? acumulador : valor);
    console.log(maisVelha2); // forma reduzida da expressão
}

reduceArray();