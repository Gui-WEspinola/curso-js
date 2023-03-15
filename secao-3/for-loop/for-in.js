function forIn() {
    const frutas = ['Pera', 'Maçã', 'Uva'];

    for (let index in frutas) { // faz a leitura dos índices
        console.log(index, frutas[index]); // possível acessar os elementos pelos indices
    }

    const pessoa = {
        nome: 'Gui',
        sobrenome: 'Wanderley',
        idade: 30
    };

    console.log(pessoa['nome']); // possível acessar os elementos de um objeto da mesma maneira de um array.
    console.log('\n-----------\n');

    for (let chave in pessoa) { // De mesma maneira, é possível atrelar essa string a uma variável de chave.
        console.log(chave, pessoa[chave]);
    }
}
forIn()
