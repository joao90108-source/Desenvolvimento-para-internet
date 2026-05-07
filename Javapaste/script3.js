let ValorPago = document.querySelector("#ValorPago");
let ValorRecebido = document.querySelector("#ValorRecebido");
let Troco = document.querySelector("#Troco");
let btCalcularTroco = document.querySelector("#btCalcularTroco");

function CalcularTroco(){
       let num1 = Number (ValorPago.value);
       let num2 = Number (ValorRecebido.value);
       let resultado = num1 - num2;

       Troco.textContent= resultado;
    } 

btCalcularTroco.onclick = function(){
    CalcularTroco();
}