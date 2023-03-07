function adicionaTexto() {
    const section = document.querySelector('.container');
    const div = document.createElement('div');

    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 3'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'}
    ];

    for (const element of elementos) {
        let createdElement = document.createElement(`${element.tag}`);
        createdElement.innerHTML = element.texto
        div.appendChild(createdElement);
    }

    section.appendChild(div);
}

adicionaTexto();