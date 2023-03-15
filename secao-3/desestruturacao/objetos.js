function objetos() {
    const pessoa = {
        nome: 'Guilherme',
        sobrenome: 'Espinola',
        idade: 30,
        endereco: {
            rua: 'av Brasil',
            numero: 320
        }
    };

    const {nome, sobrenome} = pessoa; // atribuição via desestruturação
// nome será extraído da chave nome contida em pessoa
    console.log(nome, sobrenome);

    const {idade = 15} = pessoa; // é possível definir valores padrão em caso de não existir no objeto.
    console.log(idade)

    const {nome: name, sobrenome: surname} = pessoa // é possível especificar a chave e mudar o nome da variável criada
    console.log(name, surname);

    const { nome: nome2, ... resto } = pessoa
    console.log("Nome e resto: " + nome, resto)

    const {
        endereco: {rua: r, numero},
        endereco
    } = pessoa

    console.log(r, numero);
    console.log(endereco);
}

objetos();
