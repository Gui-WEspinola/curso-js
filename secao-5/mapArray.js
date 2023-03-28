function mapArray() {
    const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

    const numerosDuplicados = numeros.map(value => value * 2);
    console.log(numerosDuplicados);

    const pessoas = [
        { nome: 'Gui', idade: 30 },
        { nome: 'Ana', idade: 22 },
        { nome: 'João', idade: 40 },
        { nome: 'José', idade: 18 },
        { nome: 'Rosana', idade: 27 },
        { nome: 'Letícia', idade: 65 },
        { nome: 'Wallace', idade: 55 }
    ];

    const nomePessoas = pessoas.map(obj => obj.nome);
    console.log(nomePessoas);

    // const idades = pessoas.map(obj => {
    //     delete obj.nome; return obj;
    // }) // uma forma de eliminar o campo 'nome'
    // console.log(idades);

    const idades2 = pessoas.map(obj => {
        return { idade: obj.idade };
        }); // outra maneira de retornar um objeto novo contendo apenas o campo de idades.
    console.log(idades2);

    // a const idades2 pode ser simplificada através de uma expressão

    const idades3 = pessoas.map(obj => ({ idade: obj.idade }));
    // basta envolver a expressão com parênteses e omitir retorno
    console.log(idades3);

    // const comIds = pessoas.map((obj, index) => {
    //     obj.id = (index + 1) * 167;
    //     return obj;
    // }); // isso altera o objeto original
    // console.log(comIds);

    const novoArrayComIds = pessoas.map((obj, indice) => {
        const newObj = { ...obj };
        newObj.id = indice; 
        return newObj;
    });
    console.log(pessoas)
    console.log(novoArrayComIds)
}
mapArray();