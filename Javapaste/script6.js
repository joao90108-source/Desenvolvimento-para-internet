let PrimeiroSabor = document.querySelector("#PrimeiroSabor")
let SegundoSabor = document.querySelector("#SegundoSabor")
let TerceiroSabor = document.querySelector("#TerceiroSabor")
let QuartoSabor = document.querySelector ("#QuartoSabor")
let QuantidadeRefri = document.querySelector("#QuantidadeRefri")
let btCalcular = document.querySelector("#btCalcular")
let ValoraPagar = document.querySelector("#ValoraPagar")

function CalcularPreco(){
    let Quantidade = Number(QuantidadeRefri.value)

    let valortotal = (4*12.00) + (Quantidade *7)
    
    ValoraPagar.innerHTML = "Valorer a pagar:<br>"+
                               "Primeiro sabor: "+PrimeiroSabor.value+"<br>"+
                               "Segundo sabor: "+SegundoSabor.value+"<br>"+
                               "Terceiro sabor: "+TerceiroSabor.value+"<br>"+
                               "Quarto sabor: "+QuartoSabor.value+"<br>"+
                               "Valor total: "+valortotal+"<br>"
} 

btCalcular.onclick = function(){

    CalcularPreco();
}