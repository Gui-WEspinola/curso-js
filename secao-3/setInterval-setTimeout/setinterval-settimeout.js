function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcaoDoInterval() {
    console.log(mostraHora());
}

// setInterval(funcaoDoInterval, 1000); // referência para função e tempo em milissegundos.

const timer = setInterval(function () { // Tb é possível passar uma função anônima
    console.log(mostraHora())
}, 1000);

setTimeout(function () { // utilizada para parar uma função de intervalo
    clearInterval(timer);
}, 4000);

setTimeout(function () {
    console.log('Olá Mundo!')
}, 5000);

