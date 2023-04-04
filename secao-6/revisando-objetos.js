// Factory functions e Constructor functions
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // mesmo que final do Java e usável com Arrays também
};

const pessoaNova = new Pessoa2('Maria', 'Silva');
console.log(pessoaNova.nome);

function revisandoObjetos() {
    const pessoa = {
        nome: 'Guilherme',
        sobrenome: 'Wanderley'
    };
    const chave = 'sobrenome';
    console.log(pessoa[chave]); // forma de acessar dinamicamente o atributo recebido
    console.log(pessoa.sobrenome) // forma mais utilizada é a notação de ponto

    const pessoa1 = new Object(); // pode ser substituído por simplesmente '= {}'
    pessoa1.nome = 'Guilherme';
    pessoa1.sobrenome = 'Wanderley';

    delete pessoa1.nome;
    console.log(pessoa1);
}
revisandoObjetos();

function pessoasEMetodos() {
    const pessoa = {};
    pessoa.nome = 'Gui';
    pessoa.sobrenome = 'Wanderley';
    pessoa.idade = 30;
    pessoa.falarNome = function () { // quando functions estão dentro de objetos elas se tornam MÉTODOS
        return `${this.nome} está falando seu nome.`;
    };
    pessoa.getDataNascimento = function () {
        const dataAtual = new Date();
        return dataAtual.getFullYear() - this.idade;
    };
}
pessoasEMetodos();
