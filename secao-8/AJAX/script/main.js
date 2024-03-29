// AJAX => asyncronous javascript XML
// Essa é a forma antiga de fazer requisições
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject({ code: xhr.status, msg: xhr.statusText });
            }
        });
    });
};

const requestComCallbacks = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.responseText);
        } else {
            reject(xhr.re)
        }
    });
};

document.addEventListener('click', evt => {
    const el = evt.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        evt.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el) {
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href,
    };

    const response = await request(objConfig);
    carregaResultado(response);
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}