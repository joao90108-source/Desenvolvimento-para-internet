let PrimeiroNumeroI = document.querySelector("#PrimeiroNumeroI")
let SegundoNumeroI = document.querySelector("#SegundoNumeroI")
let btCalcular = document.querySelector("#btCalcular")
let Operações = document.querySelector ("#Operações")

function CalcularOperações(){

 let num1 = Number (PrimeiroNumeroI.value);
 let num2 = Number (SegundoNumeroI.value);

 let soma = num1 + num2;
 let subtração = num1 - num2;
 let multiplicação = num1 * num2;
 let divisão = num1/num2;

Operações.innerHTML = "Valores do calculo:<br>"+
                               "Soma: "+soma+"<br>"+
                               "Subtração: "+subtração+"<br>"+
                               "Multiplicação: "+multiplicação+"<br>"+
                               "Divisão: "+divisão+"<br>"
} 

btCalcular.onclick = function(){
    CalcularOperações();
}