const h1 = document.querySelector('.container h1');
const data = new Date();
const config = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleDateString('pt-BR', config);

// ou então para simplificar:

h1.innerHTML = data.toLocaleDateString('pt-BR', { dataStyle: 'full', timeStyle: 'short' });