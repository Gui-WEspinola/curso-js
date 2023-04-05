// Em JS só existe o polimorfismo de sobrescrita, onde um método é reescrito, e não polimorfismo de sobrecarga.

function polimorfismo() {
    function Conta(agencia, conta, saldo) {
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    }

    Conta.prototype.sacar = function(valor) { 
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente: R$${this.saldo}`)
            return;
        }
        this.saldo -= valor;
        this.verSaldo();
        };

    Conta.prototype.depositar = function(valor) { 
        this.saldo += valor;
        this.verSaldo();
    };
    Conta.prototype.verSaldo = function() { 
        console.log(`Ag/conta: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
    };

    const conta1 = new Conta(1111, 22222, 10);
    console.log(conta1);

    function ContaCorrente(agencia, conta, saldo, limite) {
        Conta.call(this, conta, agencia, saldo);
        this.limite = limite;
    }

    ContaCorrente.prototype = Object.create(Conta.prototype);
    ContaCorrente.prototype.constructor = ContaCorrente;

    ContaCorrente.prototype.sacar = function(valor) { 
        if (valor > (this.saldo + this.limite)) {
            console.log(`Saldo insuficiente: R$${this.saldo}`)
            console.log(`Seu limite é de: R$${this.limite}`)
            return;
        }
        this.saldo -= valor;
        this.verSaldo();
    };

    function ContaPoupanca(agencia, conta, saldo) {
        Conta.call(this, conta, agencia, saldo);
    }

    ContaPoupanca.prototype = Object.create(Conta.prototype);
    ContaPoupanca.prototype.constructor = ContaPoupanca;
    
    const contaCorrente = new ContaCorrente(1234, 23456, 2000, 5000);
    contaCorrente.sacar(7500);
    console.log(contaCorrente);

    const cp = new ContaPoupanca(1234, 23456, 2000);
    cp.sacar(2500);



};

polimorfismo();