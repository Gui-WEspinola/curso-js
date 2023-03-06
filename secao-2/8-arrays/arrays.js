const arraysTeste = ['Luiz', 'Maria', 'João', 1, true, null]; // os data types não necessariamente serão os mesmos

console.log(arraysTeste);

arraysTeste.push('Cristiana')
arraysTeste.unshift('Fernando'); // adiciona no início do array

console.log(arraysTeste);

delete arraysTeste[0] // deletará o elemento selecionado, não alterando o índice dos outros elementos

console.log(arraysTeste[50]) // é possível tentar acessar valores que não existem. o JS retornará undefined por padrão

console.log(arraysTeste.slice(0,2));
console.log(arraysTeste.slice(0,-1)); // inicia o slice pelo final da string, contando do final (índice final -1 = penultimo)
