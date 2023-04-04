const produto = { nome: 'Camiseta', preco: 1.8 };
const outraCoisa = {...produto, estoque: 10}; // forma de usar spread operator para atribuir valores de outras variáveis

// console.log(outraCoisa);

const caneca = Object.assign({}, outraCoisa, { material: 'porcelana' });
// console.log(caneca);

console.log(Object.keys(caneca));
console.log(Object.values(caneca));

console.log(Object.getOwnPropertyDescriptor(caneca, 'material'));

for (const [chave, valor] of Object.entries(caneca)) { // é possível iterar sobre os pares chave-valor e inclusive usar o destructuring
    console.log(chave, valor); 
};