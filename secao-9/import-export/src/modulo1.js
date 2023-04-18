export const nome = 'Luiz';
export const sobrenome = 'Miranda';
export const idade = 30;

export default function soma (x,y) {
    return x + y;
}

export function dividirPorDois(x){
    return x / 2;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nomeCompleto = nome + ' ' + sobrenome;
    }
}

export { nome, sobrenome, idade, soma }; // também é possível passar alias na exportação