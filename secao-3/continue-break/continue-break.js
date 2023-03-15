function continueBreak() {
    const numeros = [1,2,3,4,5,6,7,8,9];

    for (let numero of numeros) {
        if (numero === 2) {
            console.log(`pulei o numero 2`);
            continue; // lembrar de atualizar variável de controle em caso de uso de while
        }

        console.log(numero);

        if (numero === 7) {
            console.log(`7 encontrado, saindo do loop...`)
            break;
        }
    }
}
continueBreak();

