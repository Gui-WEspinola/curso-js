// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: false
        }
    });

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // atrela o valor ao parâmetro recebido
        writable: false, // possibilidade de o valor ser alterado, redifinido. PODE SER DELETADO.
        configurable: false // Configurável - se é possível reconfigurar a propriedade
    });
}
const p1 = new Produto('camiseta', 20, 3);
p1.estoque = 5000; // não é possível alterar já que writable = false
delete p1.estoque; // não é possível deletar o campo pois não é configurable.
console.log(p1);