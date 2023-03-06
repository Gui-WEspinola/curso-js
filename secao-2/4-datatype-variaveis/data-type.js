let nome; // valor será UNDEFINED por padrão -> não aponta para local nenhum da memória 
let nome2 = null; // valor será nulo -> não aponta para local nenhum da memória
// String, number, undefined, null, boolean, symbol (ver dps)

console.log(typeof nome);
console.log(typeof nome2);

// dados por referência apontam para o mesmo objeto, como por exemplo:
let a = 2;
let b = a;
console.log(a, b); // 2 2
a = 3;
console.log(a, b); // 3 3
const c = a;
a = 4;
console.log(a,c); // 4 3 