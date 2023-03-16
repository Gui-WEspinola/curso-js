function escopoLexico() {
    const nome = 'Gui';

    function falaNome() {
        // const nome = "otávio";
        console.log(nome);
    } // caso nome seja declarado nesse escopo, a variável nome utilizada será essa
    falaNome();

    function usaFalaNome() {
        // const nome = 'Otávio';
        falaNome();
    } // aqui, o escopo léxico não é atribuído, pq a variável nome só é utilizada no escopo DESSA função.
    usaFalaNome();
}
escopoLexico();