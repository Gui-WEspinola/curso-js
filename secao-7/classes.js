class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }// método executado sempre que uma classe é chamada

    falar() {
        console.log(`${this.nome} está falando.`);
    }
}

const p1 = new Pessoa('Guilherme', 'Espinola');

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`);
}

const p2 = new Pessoa2('Gui', 'Espinola');

console.log(p2.falar());