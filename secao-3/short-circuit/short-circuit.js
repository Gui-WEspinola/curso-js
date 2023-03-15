/* 
Em JS, tudo pode ser avaliado em valores booleanos.
FALSY values não são valores falsos literalmente (exceto a própria palavra 'false').

&& -> retorna o último valor verdadeiro.

|| -> retorna o primeiro valor verdadeiro.

exemplos: 
    0
    ''
    ""
    ``
    null / undefined
    NaN
*/

function shortCircuit() {

    console.log('luiz' && "maria"); // o JS retorna o último valor, caso todos os valores sejam verdadeiros.
// retorna "maria" em tela.

    console.log('luiz' && undefined && 'maria'); // retorna undefined em tela, e não mais 'maria'

    function falaOi() {
        return 'Oi';
    }

    const vaiExecutar = false;

    console.log(vaiExecutar && falaOi());

    const corUsuario = null;
    const corPadrao = corUsuario || "preto"; // retorna preto caso corUsuario seja null (ou falsy). Caso contrario, retorna o valor definido pelo usuario.

    console.log(corPadrao);
}
shortCircuit();


