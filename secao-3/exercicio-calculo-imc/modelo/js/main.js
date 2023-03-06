function calculoIMC () {
    
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    function recebeEvento(evento) {

        evento.preventDefault();

        let peso = form.querySelector(".peso");
        let altura = form.querySelector(".altura");

        const pesoNumber = Number(peso.value);
        const alturaNumber = Number(altura.value);

        let imc = pesoNumber / alturaNumber ** 2;

        if (imc < 18.5) {
            resultado.innerHTML = '<p class="imc-sucesso">Abaixo do peso</p>'
        } else if (imc >= 18.5 && imc < 25) {
            resultado.innerHTML = '<p class="imc-sucesso">Peso normal</p>'
        } else if (imc >= 25 && imc < 30) {
            resultado.innerHTML = '<p class="imc-sucesso">Sobrepeso</p>'
        } else if (imc >= 30 && imc < 35) {
            resultado.innerHTML = '<p class="imc-sucesso">Obesidade grau 1</p>'
        } else if (imc >= 35 && imc < 40) {
            resultado.innerHTML = '<p class="imc-sucesso">Obesidade grau 2</p>'
        } else if (imc >= 40) {
            resultado.innerHTML = '<p class="imc-sucesso">Obesidade grau 3</p>'
        } else if (isNaN(imc)) {
            resultado.innerHTML = '<p class ="imc-invalido">Digite peso e altura válidos</p>'
        }
    }

    form.addEventListener('submit', recebeEvento);
}
calculoIMC();
