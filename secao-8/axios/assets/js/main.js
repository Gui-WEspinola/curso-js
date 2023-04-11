// fetch('pessoas.json')
//     .then(response => response.json())
//     .then(json => carregaElementosNaPagina(json)); // padrão sem o AXIOS

axios('pessoas.json').then(response => carregaElementosNaPagina(response.data));

function carregaElementosNaPagina(json) {
    const table = document.createElement('table');
    adicionarHeaders(table);
    for (let pessoa of json) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        table.appendChild(tr);
    }
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}

function adicionarHeaders(table) {
    const trHeader = document.createElement('tr');

    let tdHeader = document.createElement('td');
    tdHeader.classList.add('table-header');
    tdHeader.innerHTML = 'NOME'
    trHeader.appendChild(tdHeader);

    tdHeader = document.createElement('td');
    tdHeader.classList.add('table-header');
    tdHeader.innerHTML = 'IDADE'
    trHeader.appendChild(tdHeader);

    tdHeader = document.createElement('td');
    tdHeader.classList.add('table-header');
    tdHeader.innerHTML = 'SALARIO'
    trHeader.appendChild(tdHeader);

    table.appendChild(trHeader);
}