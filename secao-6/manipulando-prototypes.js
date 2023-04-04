// é o mesmo que chamada ao new Object -> chamada ao Object.prototype
function manipulandoPrototypes() {
    const objA = {
        chaveA: 'A'
    }; // __proto__: Object.prototype -> é chamado pela engine do JS

    const objB = {
        chaveB: 'B'
    };
    Object.setPrototypeOf(objB, objA); // é possível atrelar o prototype a outro objeto
    console.log(objB.chaveA); // dessa forma, é possível acessar os elementos de outros objetos
    Object.getPrototypeOf(objB); // o indicado é utilizar getters e setters para acessar prototypes
}

function exemploRealProto() {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    } // colocar métodos internamente em funções construtoras não é performático. O ideal é utilizar o prototype
    // para declarar novos métodos por razões de performance.

    Produto.prototype.desconto = function(percentual) {
        this.preco = this.preco - (this.preco * (percentual / 100));
    };

    Produto.prototype.aumento = function(percentual) {
        this.preco = this.preco + (this.preco * (percentual / 100));
    };

    const p1 = new Produto('Camiseta', 50);
    p1.aumento(100);
    console.log(p1);

    p1.desconto(100);
    console.log(p1);

    const p2 = {
        nome: 'Caneca',
        preco: '20'
    };
    Object.setPrototypeOf(p2, Produto.prototype); // atrelando um objeto criado a um prototype de outro objeto
    p2.desconto(30);
    p2.aumento(45);
    console.log(p2);

    const p3 = Object.create(Produto.prototype, {
        preco: {
            writable: true,
            configurable: true,
            enumerable: true,
            value: 100
        },
        nome: {
            writable: true,
            configurable: true,
            enumerable: true,
            value: "Garrafa"
        }
    });
    p3.desconto(20);
    console.log(p3);

}
manipulandoPrototypes();
exemploRealProto();