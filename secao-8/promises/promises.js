function rand(min=0, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

// promises possuem 3 estados
// pending -> fullfilled -> rejected

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Cai no erro');
                return
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);

    });
}

esperaAi('Fase 1', rand())
    .then(valor => {
        console.log(valor);
        return esperaAi('Fase 2', rand())
        
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('Fase 3', rand())
    })
    .then(fase => {
        console.log(fase);
        return fase;
    }).then(fase => {
        console.log('Terminamos na fase: ', fase);
    })
    .catch(e => {
        e.console.log(e)
    });