function calculoIMC() {

    const form = document.querySelector('.formulario');

    form.addEventListener('submit', function (ev) {

        ev.preventDefault();

        const inputPeso = ev.target.querySelector('#peso');
        const inputAltura = ev.target.querySelector('#altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if (!peso && !altura) {
            setResultado('Peso e altura inválidos', false);
            return;
        }
        if (!peso) {
            setResultado('Peso inválido', false);
            return;
        }
        if (!altura) {
            setResultado('Altura inválida', false);
            return;
        }

        const imc = calcularImc(peso, altura);
        const outputText = generateText(imc);

        setResultado(outputText, true);
    });

    function criaP(msg, isValid) {
        const p = document.createElement('p');

        isValid ? p.classList.add('valid-input-p') : p.classList.add('invalid-input-p');

        p.innerHTML = msg
        return p;
    }

    function calcularImc(peso, altura) {
        return peso / altura ** 2;
    }

    function generateText(imc) {
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Sobrepeso';
        } else if (imc >= 30 && imc < 35) {
            return 'Obesidade grau 1';
        } else if (imc >= 35 && imc < 40) {
            return 'Obesidade grau 2';
        } else if (imc >= 40) {
            return 'Obesidade grau 3';
        }
    }

    function setResultado(msg, isValid) {
        const resultado = document.querySelector('.resultado');
        const p = criaP(msg, isValid);

        resultado.innerHTML = '';

        resultado.appendChild(p);
    }
}

calculoIMC();
