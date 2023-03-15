const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    li.classList.add('li-tarefa');
    return li;
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus(); // evento de focar no cursor de input nesse caso.
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.textContent = textoInput;
    tarefas.appendChild(li); // <--
    criaBtnApagar(li); // <--
    limpaInput();
    salvarTarefas();
}

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll("li");
    const listaDeTarefas = [];
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.textContent;
        tarefaTexto = tarefaTexto
            .replace('Apagar', '')
            .trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
    // aqui é salvo localmente (chave valor), em que o valor deve ser passado em string (JSON)
}

function loadTarefas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

function criaBtnApagar(li) {
    li.textContent += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    // btnApagar.classList.add('btn-apagar');
    btnApagar.setAttribute('class', 'apagar'); // forma de setar atributos
    btnApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(btnApagar);
}

inputTarefa.addEventListener('keypress', function (evt) {
    if (!inputTarefa.value)
        return;
    if (evt.key === 'Enter') {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function (evt) {
    const el = evt.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});
loadTarefas(); // chamada para carregar tarefas salvas no localstorage