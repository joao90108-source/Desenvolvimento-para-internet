let ValorX = document.querySelector("#ValorX");
let ValorY = document.querySelector("#ValorY");
let ValorZ = document.querySelector("#ValorZ");
let ResultadoDoCalculo1 = document.querySelector("#ResultadoDoCalculo1");
let h3Resultado1 = document.querySelector("#h3Resultado1");

function CalcularTriangulo(){

 let x = Number(ValorX.value);
 let y = Number(ValorY.value);
 let z = Number(ValorZ.value);

 if (x < y + z && y < x + z && z < x + y) {

        if (x === y && y === z) {
            h3Resultado1.textContent = "Triângulo Equilátero";
        }
        else if (x === y || x === z || y === z) {
            h3Resultado1.textContent = "Triângulo Isósceles";
        }
        else {
            h3Resultado1.textContent = "Triângulo Escaleno";
        }

    } else {
        h3Resultado1.textContent = "Os valores não formam um triângulo";
    }
}

ResultadoDoCalculo1.onclick = function () {
    CalcularTriangulo();
};

let CampoParaPeso = document.querySelector("#CampoParaPeso");
let CampoParaAltura = document.querySelector("#CampoParaAltura");
let ResultadoDoCalculo2 = document.querySelector("#ResultadoDoCalculo2");
let h3Resultado2 = document.querySelector("#h3Resultado2");

function CalcularIMC(){

let peso = Number(CampoParaPeso.value);
    let altura = Number(CampoParaAltura.value);

    let imc = peso / (altura * altura);

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso normal";
    }
    else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Sobrepeso";
    }
    else if (imc >= 30 && imc <= 34.9) {
        classificacao = "Obesidade grau 1";
    }
    else if (imc >= 35 && imc <= 39.9) {
        classificacao = "Obesidade grau 2";
    }
    else {
        classificacao = "Obesidade grau 3";
    }

    h3Resultado2.textContent =
        "IMC: " + imc.toFixed(2) +
        " | Classificação: " + classificacao;

}

ResultadoDoCalculo2.onclick = function () {
    CalcularIMC();
};

let AnoDoCarro = document.querySelector("#AnoDoCarro");
let ValorDoCarro = document.querySelector("#ValorDoCarro");
let Imposto = document.querySelector("#Imposto");
let h3Resultado3 = document.querySelector("#h3Resultado3");

function CalcularImposto() {

    let ano = Number(AnoDoCarro.value);
    let valor = Number(ValorDoCarro.value);

    let imposto;

    if (ano < 1990) {
        imposto = valor * 0.01;
    }
    else {
        imposto = valor * 0.015;
    }

    h3Resultado3.textContent =
        "Imposto a pagar: R$ " + imposto.toFixed(2);
}

Imposto.onclick = function () {
    CalcularImposto();
};

let SalarioDoFuncionario = document.querySelector("#SalarioDoFuncionario");
let CampoCodigo = document.querySelector("#CampoCodigo");
let NovoSalario = document.querySelector("#NovoSalario");
let h3Resultado4 = document.querySelector("#h3Resultado4");

function CalcularNovoSalario (){

    let salario = Number(SalarioDoFuncionario.value);
    let codigo = Number(CampoCodigo.value);

    let percentual;

    if (codigo === 101) {
        percentual = 0.10;
    }
    else if (codigo === 102) {
        percentual = 0.20;
    }
    else if (codigo === 103) {
        percentual = 0.30;
    }
    else {
        percentual = 0.40;
    }

    let aumento = salario * percentual;
    let novoSalario = salario + aumento;

    h3Resultado4.textContent =
        "Salário antigo: R$ " + salario.toFixed(2) +
        " | Novo salário: R$ " + novoSalario.toFixed(2) +
        " | Diferença: R$ " + aumento.toFixed(2);
}

NovoSalario.onclick = function(){
    CalcularNovoSalario ()
}

let SaldoMedio = document.querySelector ("#SaldoMedio");
let SaldoValor = document.querySelector("#SaldoValor");
let h3Resultado5 = document.querySelector("#h3Resultado5");

function CalcularCredito (){

    let saldoMedio = Number(SaldoMedio.value);

    let percentual;
    let credito;

    if (saldoMedio >= 0 && saldoMedio <= 200) {
        percentual = 0;
    }
    else if (saldoMedio <= 400) {
        percentual = 0.20;
    }
    else if (saldoMedio <= 600) {
        percentual = 0.30;
    }
    else {
        percentual = 0.40;
    }

    credito = saldoMedio * percentual;

    h3Resultado5.textContent =
        "Saldo medio: R$ " + saldoMedio.toFixed(2) +
        " | Credito: R$ " + credito.toFixed(2);
}

SaldoValor.onclick = function () {
    CalcularCredito();
};

let CodigoDoItem = document.querySelector("#CodigoDoItem");
let QuantidadeDoItem = document.querySelector("#QuantidadeDoItem");
let ValorDaCompra = document.querySelector("#ValorDaCompra");
let h3Resultado6 = document.querySelector("#h3Resultado6");

function CalcularValor(){
 
let codigo = Number(CodigoDoItem.value);
    let quantidade = Number(QuantidadeDoItem.value);

    let preco;
    let produto;

    if (codigo === 100) {
        produto = "Cachorro Quente";
        preco = 11.00;
    }
    else if (codigo === 101) {
        produto = "Bauru";
        preco = 8.50;
    }
    else if (codigo === 102) {
        produto = "Misto Quente";
        preco = 8.00;
    }
    else if (codigo === 103) {
        produto = "Hambúrguer";
        preco = 9.00;
    }
    else if (codigo === 104) {
        produto = "Cheeseburger";
        preco = 10.00;
    }
    else if (codigo === 105) {
        produto = "Refrigerante";
        preco = 4.50;
    }
    else {
        h3Resultado6.textContent = "Código inválido.";
        return;
    }

    let total = preco * quantidade;

    h3Resultado6.textContent =
        "Produto: " + produto +
        " | Quantidade: " + quantidade +
        " | Total a pagar: R$ " + total.toFixed(2);

}

ValorDaCompra.onclick = function () {
    CalcularValor();
};

let PrecoProduto = document.querySelector("#PrecoProduto");
let CodigoPagamento = document.querySelector("#CodigoPagamento");
let ResultadoDoCalculo = document.querySelector("#ResultadoDoCalculo");
let h3Resultado7 = document.querySelector("#h3Resultado7");

function CalcularPagamento() {

    let preco = Number(PrecoProduto.value);
    let codigo = CodigoPagamento.value.toLowerCase();

    let valorFinal;

    if (codigo === "a") {
        valorFinal = preco - (preco * 0.10);
    }
    else if (codigo === "b") {
        valorFinal = preco - (preco * 0.15);
    }
    else if (codigo === "c") {
        valorFinal = preco;
    }
    else if (codigo === "d") {
        valorFinal = preco + (preco * 0.10);
    }
    else {
        h3Resultado7.textContent = "Código inválido.";
        return;
    }

    h3Resultado7.textContent =
        "Valor a pagar: R$ " + valorFinal.toFixed(2);
}

ResultadoDoCalculo.onclick = function () {
    CalcularPagamento();
};

let NivelProfessor = document.querySelector("#NivelProfessor");
let HoraAula = document.querySelector("#HoraAula");
let Salario = document.querySelector("#Salario");
let h3Resultado8 = document.querySelector("#h3Resultado8");

function CalcularSalario() {

    let nivel = Number(NivelProfessor.value);
    let qtdAulas = Number(HoraAula.value);

    let valorHora;

    if (nivel === 1) {
        valorHora = 12;
    }
    else if (nivel === 2) {
        valorHora = 17;
    }
    else if (nivel === 3) {
        valorHora = 25;
    }
    else {
        h3Resultado8.textContent = "Nível inválido.";
        return;
    }

    let salario = valorHora * qtdAulas * 4.5;

    h3Resultado8.textContent =
        "Salario do professor: R$ " + salario.toFixed(2);
}

Salario.onclick = function () {
    CalcularSalario();
};



