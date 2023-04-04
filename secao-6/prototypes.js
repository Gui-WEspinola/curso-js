// a propriedade prototype se refere ao parent do objeto criado, que contém propriedades e métodos que podem ser HERDADOS por esse objeto criado.
function Produto(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
};

Produto.prototype.precoTotalEstoque = function () {
    return this.quantidade * this.preco;
}

const televisão = new Produto('televisão', 2000, 30);
console.log(televisão.precoTotalEstoque());