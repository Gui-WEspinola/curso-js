function exemplo() {
    const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
    const [primeiroNumero, segundoNumero, ...resto] = numeros;

    console.log(primeiroNumero, segundoNumero);
    console.log(resto);

    const array = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
    const [lista1, lista2, lista3] = array;
    console.log(lista1)
    console.log(lista2)
    console.log(lista3)
}
exemplo()
