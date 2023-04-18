import soma, {nome as nome2, sobrenome, idade, Pessoa} from "./modulo1"; // é possível atribuir aliases
import * as MeuModulo from "./modulo1";

console.log(MeuModulo.dividirPorDois(10));

const nome = 'gui';
console.log(nome, nome2)

const humano = new Pessoa('Guilherme', 'Espinola');
console.log(humano.nomeCompleto);

console.log(nome2, sobrenome, idade, soma(5, 5));
//
import qualquerNome from ".modulo1";
console.log(qualquerNome(5, 5));
// import qualquerNome from './modulo1';
//
// console.log(qualquerNome(5,5));