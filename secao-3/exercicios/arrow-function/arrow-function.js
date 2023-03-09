// é a mesma coisa que uma função normal
const max2 = (x, y) => {
    return x > y ? x : y;
}

// é possível escrever arrow functions sem chaves e omitindo o retorno, no caso de funções em uma linha
const max = (x, y) => x > y ? x : y;

// outro exemplo de arrow function
const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1080, 1920));
