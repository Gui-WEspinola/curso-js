function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),


        inicia() {
            this.cliqueBotoes(); // this é necessário sempre que referenciamos uma chave(key) do obj
            this.pressionaEnter();
        },

        realizaConta() { // função eval() permite que o JS interprete o que está sendo passado, mas é PERIGOSO por permitir execução de código malicioso.
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },
        deletaUm() {
            this.display.value = this.display.value.slice(0, - 1); // total do tamanho -1, ou seja, corta o último
        },

        pressionaEnter() {
            this.display.addEventListener('keypress', e => {
                if (e.key === 'Enter') {
                    this.realizaConta();
                }
            })
        },

        cliqueBotoes() {
            document.addEventListener('click', e => { // é possível usar a arrow function aqui sem precisar usar bind(this)
                // nesse escopo, o this é document e não calculadora, por isso se usa o bind(this) para puxar a referencia à calculadora (parent function)
               const el = e.target;

               if (el.classList.contains('btn-num')) { // verifica se está clicando em um número
                   this.btnParaDisplay(el.innerText);
               }

               if (el.classList.contains('btn-clear')) {
                   this.clearDisplay();
               }

               if (el.classList.contains('btn-del')) {
                   this.deletaUm();
               }

               if (el.classList.contains('btn-eq')) {
                   this.realizaConta();
               }
            });
        },
        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();


// const inputTarefa = document.querySelector('.input-tarefa');
// const btnTarefa = document.querySelector('.btn-tarefa');
// const tarefas = document.querySelector('.tarefas');
//
// function criaLi() {
//     const li = document.createElement('li');
//     li.classList.add('li-tarefa');
//     return li;
// }
//
// function limpaInput() {
//     inputTarefa.value = '';
//     inputTarefa.focus(); // evento de focar no cursor de input nesse caso.
// }
//
// function criaTarefa(textoInput) {
//     const li = criaLi();
//     li.textContent = textoInput;
//     tarefas.appendChild(li); // <--
//     criaBtnApagar(li); // <--
//     limpaInput();
//     salvarTarefas();
// }
//
// function salvarTarefas() {
//     const liTarefas = tarefas.querySelectorAll("li");
//     const listaDeTarefas = [];
//     for (let tarefa of liTarefas) {
//         let tarefaTexto = tarefa.textContent;
//         tarefaTexto = tarefaTexto
//             .replace('Apagar', '')
//             .trim();
//         listaDeTarefas.push(tarefaTexto);
//     }
//     const tarefasJSON = JSON.stringify(listaDeTarefas);
//     localStorage.setItem('tarefas', tarefasJSON);
//     // aqui é salvo localmente (chave valor), em que o valor deve ser passado em string (JSON)
// }
//
// function loadTarefas() {
//     const tarefas = localStorage.getItem('tarefas');
//     const listaDeTarefas = JSON.parse(tarefas);
//
//     for (let tarefa of listaDeTarefas) {
//         criaTarefa(tarefa);
//     }
// }
//
// function criaBtnApagar(li) {
//     li.textContent += ' ';
//     const btnApagar = document.createElement('button');
//     btnApagar.innerText = 'Apagar';
//     // btnApagar.classList.add('btn-apagar');
//     btnApagar.setAttribute('class', 'apagar'); // forma de setar atributos
//     btnApagar.setAttribute('title', 'Apagar esta tarefa');
//     li.appendChild(btnApagar);
// }
//
// inputTarefa.addEventListener('keypress', function (evt) {
//     if (!inputTarefa.value)
//         return;
//     if (evt.key === 'Enter') {
//         if (!inputTarefa.value) return;
//         criaTarefa(inputTarefa.value);
//     }
// });
//
// btnTarefa.addEventListener('click', function () {
//     if (!inputTarefa.value) return;
//     criaTarefa(inputTarefa.value);
// });
//
// document.addEventListener('click', function (evt) {
//     const el = evt.target;
//     if (el.classList.contains('apagar')) {
//         el.parentElement.remove();
//         salvarTarefas();
//     }
// });
// loadTarefas(); // chamada para carregar tarefas salvas no localstorage