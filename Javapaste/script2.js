//importando o elemento do html para dentro do javaScript
let inputNumero1 = document.querySelector("#inputNumero1")
let inputNumero2 = document.querySelector("#inputNumero2")
let btSomar = document.querySelector("#btSomar")
let h3Resultado = document.querySelector ("#h3Resultado")

function somarNumeros(){
        let num1 = Number(inputNumero1.value);
        let num2 = Number(inputNumero2.value);
        let resultado = num1 + num2;

        h3Resultado.textContent= resultado;
    
    }

btSomar.onclick = function(){
    somarNumeros();
}