// Getters e setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;    

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoquePrivado;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem de erro!');
            }
            estoquePrivado = valor;
        }
    });
}
const p1 = new Produto('camiseta', 20, 3);

console.log(p1.estoque);
p1.estoque = 10;
console.log(p1.estoque);

// exemplo para função factory

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('camiseta', 'tênis'); // é possível interceptar os valores passados em getters e setters
            nome = valor;
        }
    };
}

const p2 = criaProduto('camiseta');
console.log(p2.nome);

p2.nome = 'camiseta';
console.log(p2.nome);