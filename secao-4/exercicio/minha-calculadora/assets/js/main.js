function Calculator() {
    this.display = document.querySelector('.calculator-screen');

    this.inicia = () => {
        clicks();
        apertaEnter();
    }

    const apertaEnter = () => {
        this.display.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                resultado();
            }
            const regex = new RegExp(/^[0-9\n\/\*\-\+\.\(\)]+$/);
            if (!regex.test(String(this.display.value))){
                e.key = '';
                console.log(e.key);
            } // TODO ->> Fazer a validação funcionar
        })
    };

    const limpaDisplay = () => {
        this.display.value = '';
    };

    const apagar = () => {
        let valor = this.display.value;
        this.display.value = valor.slice(0, -1);
    }

    const resultado = function () {
        let resultado = this.display.value;
        resultado = eval(resultado);

        try {
            if (!resultado) {
                alert('Conta inválida!');
                return;
            }

            this.display.value = String(resultado);

        } catch (ex) {
            alert(ex);
        }
    }.bind(this)

    const clicks = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.display.value += el.textContent;
            }

            if (el.id === 'btn-eq') {
                resultado();
            }

            if (el.id === 'btn-c') {
                limpaDisplay();
                this.display.focus();
            }

            if (el.id === 'btn-apagar') {
                apagar();
                this.display.focus();
            }
        })
    }
}

const calculator = new Calculator();
calculator.inicia();