function retornoFuncao() {
    function criaPessoa(nome, sobrenome) {
        return {nome, sobrenome};
    }

    const p1 = criaPessoa('Gui', 'Espinola');
    console.log(p1);
    console.log(typeof p1);

    function falaInicio(comeco) {
        function falaResto(resto) {
            return comeco + ' ' + resto;
        }

        return falaResto;
    }

    const fala = falaInicio('Olá');
    const resto = fala('mundo!');
    console.log(resto);

    // também seria possível fazer assim:
    const olaMundo = falaInicio('Olá')('mundo!');
    console.log(olaMundo);

    // Exemplo:

    function criaMultiplicador(multiplicador) {
        // multiplicador está neste escopo
        return function multiplicacao(n) {
            return n * multiplicador;
        };
    }

    const duplica = criaMultiplicador(2); // Funções closure
    const triplica = criaMultiplicador(3); // Funções closure
    const quadriplica = criaMultiplicador(4); // Funções closure

    console.log(duplica(2));
    console.log(triplica(2));
    console.log(quadriplica(2));
}
retornoFuncao();