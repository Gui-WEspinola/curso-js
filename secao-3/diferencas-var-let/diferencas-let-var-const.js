function variaveis() {
    const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

    let nome = 'Gui'; // criando
    var nome2 = 'Gui'; // criada em escopo global
    console.log(nome, nome2)

    if (verdadeira) {
        let nome = 'Otávio'; // Criando. Apesar de mesmo nome, são 2 variáveis diferentes em razão de estar no bloco
        var nome2 = 'Rogério'; // redeclarando
        console.log(nome, nome2);

        if (verdadeira) {
            var nome2 = 'Ronaldo';
            console.log(nome, nome2);
        }
    }
    console.log(nome, nome2);
    console.log('--------------')

    {
        var sobrenome = 'Miranda';

        function falaOi() {
            console.log(sobrenome);
        }

        falaOi();
    }

}
variaveis();
