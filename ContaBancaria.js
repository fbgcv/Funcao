class ContaBancaria{
    constructor(saldoInicial) {
        this.saldo = saldoInicial || 0;
    }

    // Desposito
    depositar(valor){
        this.saldo += valor;
        console.log (`Depósito de R$${valor} relaizado. Saldo atual: R$${this.saldo}`);
    }

    // Sacar
    sacar(valor){
        if (valor > this.saldo){
            console.log("Saldo insuficiente.");
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }

    // Extrato
    extrato(){
        console.log(`Saldo atual: R$${this.saldo}`);
    }
}