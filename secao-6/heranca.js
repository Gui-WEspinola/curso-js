// Heranca -> Produtos -> camiseta, caneca
// Produto -> aumento, desconto
// camiseta pode ter cor, caneca pode ter material
function heranca() {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    Produto.prototype.aumento = function(quantia) {
        this.preco += quantia
    };
    Produto.prototype.desconto = function(quantia) {
        this.preco -= quantia
    };

    function Camiseta(nome, preco, cor) {
        Produto.call(this, nome, preco);
        this.cor = cor;
    }
    Camiseta.prototype = Object.create(Produto.prototype);
    Camiseta.prototype.constructor = Camiseta; // essa atribuicao remove a referência ao construtor de camiseta que a linha anterior faz

    Camiseta.prototype.pintarCamisa = function(cor) {
        this.cor = cor;
    }

    Camiseta.prototype.aumento = function(porcentagem) { // sobrescrever o método com percentual
        this.preco = this.preco + (this.preco * (porcentagem / 100));
    }

    const camiseta = new Camiseta('Regata', 8, 'Preta');
    camiseta.pintarCamisa("Azul");
    camiseta.aumento(50);

    console.log(camiseta);

    function Caneca(nome, preco, material, estoque) {
        Produto.call(this, nome, preco);
        this.material = material;

        Object.defineProperty(this, 'estoque', {
            enumerable: true,
            configurable: false,
            get: function() {
                return estoque;
            },
            set: function(valor) {
                if (typeof valor !== 'number') return;
                estoque = valor;
            }
        });
    }

    Caneca.prototype.desconto = function(porcentagem) {
        this.preco = this.preco - (this.preco * (porcentagem / 100));
    }
    Caneca.prototype = Object.create(Produto.prototype);
    Caneca.prototype.constructor = Caneca;

    const caneca = new Caneca('Especial', 25, 'Madeira', 5);
    const produto = new Produto('Fio', 55);
    console.log(caneca.estoque); // não foi necessário declarar o value em defineProperty no construtor de Caneca
    console.log(produto);
}
heranca();