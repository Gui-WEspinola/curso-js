// AJAX => asyncronous javascript XML
// Essa é a forma antiga de fazer requisições
document.addEventListener('click', evt => {
    const el = evt.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        evt.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');
    const response = await fetch(href);

    if (response.status !== 200) throw new Error('NOSSO ERRO 404')

    const html = await response.text();

    carregaResultado(html)
    } catch (e) {
        console.error(e);
    }
}

// function carregaPagina(el) {
//     const href = el.getAttribute('href');

//     fetch(href)
//         .then(response =>{
//             if (response.status !== 200) throw new Error('ERRO 404')
//             return response.text()
//         })
//         .then(html => carregaResultado(html))
//         .catch(e => console.error(e));
// } 

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}