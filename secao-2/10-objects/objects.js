function criaPessoa (nome, sobrenome, idade) { // construtor de pessoa
    return {
        nome: nome, // não é preciso usar dessa forma, é possível usar apenas "nome", que o JS entende
        sobrenome: sobrenome,
        idade: idade
    };
};

// ARGUMENTOS são valores passados para PARÂMETROS
// portanto, 

const pessoa = { // forma de criar um objeto em JS
    nome: 'João',
    sobrenome: 'Silva',
    idade: '55',

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi`);
    }
};

const pessoa2 = criaPessoa("Maria", "Oliveira", 44);

console.log(pessoa);
console.log(pessoa2);

pessoa.fala(); 