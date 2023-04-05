function map() {
    const pessoas = [
        { id: 3, nome: 'Guilherme' },
        { id: 2, nome: 'José' },
        { id: 1, nome: 'Maria' }
    ];

    // const novasPessoas = {};
    // for (const pessoa of pessoas) {
    //     const { id } = pessoa;
    //     novasPessoas[id] = { ...pessoa };
    // } essa implementação inverte os números dos IDs, ou seja, tira os elementos de ordem. Além disso, teria que haver casting do ID para number.

    const novasPessoas = new Map();
    for (const pessoa of pessoas) {
        const { id } = pessoa;
        novasPessoas.set(id, { ...pessoa });
    }

    for (const pessoa of novasPessoas) {
        const [identifier, {id, nome}] = pessoa
        console.log(identifier, id, nome);
    } // isso funciona, é possível acessar identifier, ID e NOME dessa forma

    // OU
    for (const [identifier, {id, nome}] of novasPessoas) {
        console.log(identifier, id, nome);
    }

    novasPessoas.delete(2); // é possível deletar elementos dessa forma
    console.log(novasPessoas);
}
map();