class DispositivoEletronico {
    constructor (nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + " já ligado");
            return;
        }
        this.ligado = true;
    }
    desligar() {
        if (!this.ligado) {
            console.log(this.nome + " já está desligado");
            return;
        }
        this.ligado = false;
    }

}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo
    }
}
const s1 = new Smartphone('Samsung', 'Branco', 'S23');
s1.ligar();
console.log(s1);