function relogio() {
    function criaHoraPosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.textContent = criaHoraPosSegundos(segundos);
        }, 1000)
    }

    document.addEventListener('click', (evt) => { // adicionar vários event listeners não é performático.
        const el = evt.target; // adicionando um alvo para os eventos de clique.

        if (el.classList.contains('iniciar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado');
            iniciaRelogio();
        }

        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }

        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado');
            segundos = 0;
        }
    });
}

relogio(); // criada funcao para sair do escopo global



