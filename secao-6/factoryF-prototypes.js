function factoryProto() {
    const falar = {
        falar() {
            console.log(`${this.nome} está falando.`)
        },
    };

    const comer = {
        comer() {
            console.log(`${this.nome} está comendo.`);
        },
    }

    const andar = {
        andar() {
            console.log(`${this.nome} está andando.`);
        },
    };

    // const pessoaPrototype = { ...falar, ...andar, ...beber }; // forma de atribuir funções a uma variável que será usada como prototype
    const pessoaPrototype = Object.assign({}, falar, comer, andar); // outra forma utilizando método Object.assign, passando um obj vazio e outros sources
    // isso é um exemplo de composição de objetos em outro obj, no caso a pessoa. Nesse caso, temos um exemplo de MIXING

    function criaPessoa(nome, sobrenome) {
        const pessoa = Object.create(pessoaPrototype, {
            nome: { value: nome },
            sobrenome: { value: sobrenome },
        });
        Object.defineProperty()
    };

    const p1 = criaPessoa('gui', 'espinola');
    console.log(p1);
}
factoryProto();