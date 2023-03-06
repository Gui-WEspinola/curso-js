function meuEscopo(){
    const form = document.querySelector('.form'); // aqui estamos selecionando o form pela classe, definida no html (acho que está no padrão CSS aqui com o .)
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function criaPessoa (nome, sobrenome, peso, altura){
        return {
            nome,
            sobrenome,
            peso,
            altura
        };
    };

    // form.onsubmit = function (evento) { apenas uma forma de criar listeners de eventos
    //     evento.preventDefault();
    //     alert(1);
    //     console.log("foi enviado.");
    // };

    let contador = 1;

    function recebeEventoForm (evento) { // forma mais "adequada" de fazer listener de eventos

        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const pessoa = criaPessoa(nome.value, sobrenome.value, peso.value, altura.value);

        pessoas.push(pessoa);

        console.log(pessoas);

        resultado.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura}</p>`
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

// é possível criar funções autoinvocadas também