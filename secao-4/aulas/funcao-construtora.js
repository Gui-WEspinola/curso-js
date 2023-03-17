// função construtora que cria objetos
function Pessoa(nome, sobrenome) {
    // atributos privados
    let ID = '';

    const metodoInterno = () => { // O método não aparece ao listar os atributos de Pessoa e só é acessado internamente
        ID = Math.ceil(Math.random() + Math.random() * (nome.length + sobrenome.length) ** 2 * 10);
        return ID;
    };

    // Atributos ou métodos públicos com o this sendo usado. Podem ser acessados pelo obj.nome ou obj.sobrenome
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        metodoInterno();
        console.log(`Oi, meu nome é ${this.nome} e possuo o ID ${ID}`);
    };
}

const p1 = new Pessoa('Guilherme', 'Wanderley');
console.log(p1);
console.log(typeof p1);
p1.metodo();