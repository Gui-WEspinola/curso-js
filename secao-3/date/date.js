const data = new Date();
console.log(data.toString()); // imprimirá data local (GMT -3)

const tresHoras = 60 * 60 * 3 * 1000; // três horas em milissegundos
const dataInicial = new Date(0 + tresHoras);
console.log(dataInicial.toString()); // 01/01/1970 Timestamp unix ou epoca unix

const dataEspecifica = new Date(2023, 3, 6, 15, 45, 20); // data específica com os parâmetros passados
console.log(dataEspecifica.toString());

const dataEspecifica2 = new Date('2019-04-20 20:20:59'); // Data específica
const dataEspecifica3 = new Date('2019-04-20T20:20:59'); // Data específica
console.log(dataEspecifica2.toString(), dataEspecifica3.toString());

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // mês começa em 0 em JS
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getUTCDay()); // 0 Domingo -> 6 sábado

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`
}

const data2 = new Date();
console.log(formataData(data2));