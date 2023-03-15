function forOf() {
    const nomes = [`guilherme`, `wanderley`, `espinola`];

// for-clássico - Geralmente com iteráveis (array ou strings)
// for in - Retorna o índice ou chave (string, array ou objetos)
// for of - Retorna o valor em si (iteráveis, arrays ou strings)

    for (let valor of nomes) {
        console.log(valor);
    }
    nomes.forEach(values => console.log(values))
    nomes.forEach((value, index) => console.log(value.at(index))) // é possível usar o forEach com callback functions

    nomes.forEach(function (value) {
        console.log(value.concat(1))
    });

// para objetos, a iteração é um pouco diferente

    const pessoa = {
        nome: 'Gui',
        sobrenome: 'Wanderley'
    };

    for (let chave in pessoa) { // não é possível iterar com for-of em objetos.
        console.log(chave, pessoa[chave])
    }
}
forOf();
