// 705.484.450-52
/* 
    7x  0x 5x 4x 8x 4x 4x 5x 0x
    10  9  8  7  6  5  4  3  2 = 237

    11 - (total % 11) = 5 (primeiro dígito verificador)
    Se o número for maior que 9, consideramos 0

    mesma coisa para o segundo dígito verificador, mas dessa vez iniciando de 11 até 2, e incluindo o 5 ao final.

*/

function validaCPF(cpf) {
    let cpfLimpo = cpf.replace(/\D+/g, '');
    const cpfArray = Array.from(cpfLimpo);
    const ultimoDigito = cpfArray.pop();
    const penultimoDigito = cpfArray.pop();
    let multiplicador = 10;

    if (!verificaDigito(cpfArray, penultimoDigito, multiplicador)) return false; 
    
    cpfArray.push(penultimoDigito);
    multiplicador = 11;
    return verificaDigito(cpfArray, ultimoDigito, multiplicador);

    function verificaDigito(cpf, digito, multiplicador) {
        let total = cpf.reduce(function (contador, atual) {
            contador += (multiplicador * atual);
            multiplicador--;
            return contador;
        }, 0);
        return Number(digito) === (11 - (total % 11)) ? true : false;
    }
}
console.log(validaCPF("450.953.790-58"));