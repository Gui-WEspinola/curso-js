function factoryFunctions() {
    // A função abaixo é uma factory function
    function criaPessoa(nome, sobrenome, a, p) {
        return {
            nome,
            sobrenome,

            // Getter
            get nomeCompleto() {
                return `${this.nome} ${this.sobrenome}`
            },

            // Setter
            set nomeCompleto(valor){
                valor = valor.split(" ");
                this.nome = valor.shift(); // shift remove primeiro elemento de um array, podendo ser atribuído a uma variável
                // this.sobrenome = valor.toString().replace(',', " "); ESSA LINHA PODE SER SIMPLIFICADA:
                this.sobrenome = valor.join(' ');
            },

            fala(assunto) {
                return `${this.nome} está falando ${assunto}` // aqui a palavra this não é necessária para acessar 'nome', pois já é um atributo do objeto
            }, // entretanto, o não uso da palavra THIS irá utilizar os valores passados como argumentos para os parâmetros
            // dessa forma, caso os valores sejam alterados, é necessário o uso da palavra this antes do atributo.

            altura: a,
            peso: p,

            imc() {
                const indice = this.peso / (this.altura ** 2);
                return indice.toFixed(2);
            },

            cpf: '000.000.000-00',

            // getter
            get dados() { // ao usar a palavra GET, a função passa a fingir ser um atributo
                return `${nome} possui o CPF ${this.cpf}`
            }
        };
    }

    const p1 = criaPessoa('Gui', 'Espinola', 1.75, 70);
    console.log(p1.imc());
    console.log(p1.nome);
    console.log(p1.dados); // embora DADOS seja função, aqui é acessado com GET como se atributo fosse

    console.log(p1.nomeCompleto); // aqui, é possível utilizar a função como nome completo.
    p1.nomeCompleto = 'José da silva'; // Usando a função setter
    console.log(p1.nomeCompleto);
    console.log(p1.fala("merda"))
    console.log(p1.nome);
    console.log(p1.sobrenome);
}

factoryFunctions();

