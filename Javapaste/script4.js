let inputCotacao = document.querySelector("#inputCotacao")
let btCalcular = document.querySelector("#btCalcular")
let h3ValorCotacao = document.querySelector("#h3ValorCotacao")

function calcularCotacao(){
    let valorCotacao = Number(inputCotacao.value)
    
    //calcular 1%
    let valor1porcento = valorCotacao + (valorCotacao * (1/100));
    
    //calcular 2%
    let valor2porcento = valorCotacao + (valorCotacao * (2/100));

    //calcular 5%
    let valor5porcento = valorCotacao + (valorCotacao * (5/100));

    //calcular 10%
    let valor10porcento = valorCotacao + (valorCotacao * (10/100));

    h3ValorCotacao.innerHTML = "Valores atualizados:<br>"+
                               "Reajuste atualizadores 1%: "+valor1porcento+
                               "Reajuste atualizadores 2%: "+valor2porcento+
                               "Reajuste atualizadores 5%: "+valor5porcento+
                               "Reajuste atualizadores 10%: "+valor10porcento+"<br>"
} 
btCalcular.onclick = function(){
     calcularCotacao();
}
