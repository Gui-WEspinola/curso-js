const paragrafos = document.querySelector('.paragrafos');

const ps = paragrafos.querySelectorAll('p'); // resulta uma NodeList (parecido com Array)

const bodyStyles = getComputedStyle(document.body); // possuem tudo de CSS atrelado ao body.
const backgroundColorBody = bodyStyles.backgroundColor; // acessado a cor de fundo do background para ser atribuída

for (let p of ps) {
    p.style.color = 'white';
    p.style.backgroundColor = backgroundColorBody;
}

// for (let p of ps) { // forma de resolver o problema de maneira "simples", mas não adequada.
//     p.style.color = `white`;
//     p.style.backgroundColor = `var(--primary-color)`;
// }
