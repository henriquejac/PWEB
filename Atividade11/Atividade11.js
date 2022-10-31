class Retangulo{

    constructor(altura, base) {
        this._altura = altura;
        this._largura = base;
        };

    calcArea(){ return this._altura * this._largura};
}

function Conta(){
    var nome;
    var banco;
    var numConta;
    var saldo;

    this.setNome = function(vNome){this.nome = vNome};
    this.getNome = function(){return this.nome};

    this.setBanco = function(vBanco){this.banco = vBanco};
    this.getBanco = function(){return this.banco};

    this.setConta = function(vConta){this.numConta = vConta};
    this.getConta = function(){return this.numConta};

    this.setSaldo = function(vSaldo){this.saldo = vSaldo};
    this.getSaldo = function(){return this.saldo};
}

function ContaCorrente(){
    var saldoEspec;

    this.setSaldoEspec = function(vSaldoEspec){this.saldoEspec = vSaldoEspec};
    this.getSaldoEspec = function(){return this.saldoEspec};
}

function ContaPoupanca(){
    var juros;
    var dataVenc

    this.setJuros = function(vJuros){this.juros = vJuros};
    this.getJuros = function(){return this.juros};

    this.setDataVenc = function(vDataVenc){this.dataVenc = vDataVenc};
    this.getDataVenc = function(){return this.dataVenc};
}

function retangulo(){
    var alt = prompt("Digite a altura: ");
    var base = prompt("Digite a base: ");

    var ret = new Retangulo(alt, base);

    alert("A área é " + ret.calcArea());
}

function correntePoupa(){
    var nome = "Henrique";
    var banco = "Teste Banco";
    var numConta = 125558;
    var saldo = 1520.60;
    var especial = 650;
    var juros = 0.12;
    var dataVenc = "03/05/2026";

    ContaCorrente.prototype = new Conta();
    ContaPoupanca.prototype = new Conta();

    var corrente = new ContaCorrente();
    var poupanca = new ContaPoupanca();

    corrente.setNome(nome);
    poupanca.setNome(nome);

    corrente.setBanco(banco);
    poupanca.setBanco(banco);

    corrente.setConta(numConta);
    poupanca.setConta(numConta);

    corrente.setSaldo(saldo);
    poupanca.setSaldo(saldo);

    corrente.setSaldoEspec(especial);

    poupanca.setJuros(juros);
    poupanca.setDataVenc(dataVenc);

    alert('Corrente: \n' + JSON.stringify(corrente));
    console.log(corrente);
    alert('Corrente: \n' + JSON.stringify(poupanca));
    console.log(poupanca);


}
