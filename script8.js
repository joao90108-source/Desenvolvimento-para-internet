let inputNome1 = document.querySelector ("#inputNome1");
let inputNome2 = document.querySelector ("#inputNome2");
let inputNome3 = document.querySelector ("#inputNome3");
let inputAno1 = document.querySelector ("#inputAno1");
let inputAno2 = document.querySelector ("#inputAno2");
let inputAno3 = document.querySelector ("#inputAno3");
let btOrdenar = document.querySelector ("#btOrdenar");
let h3NomesOrdenados = document.querySelector ("#h3NomesOrdenados");

function verificarIdades(){

   //retirando o ano digitado e convertendo para número
   let ano1 = number(inputAno1.value);
   let ano2 = number(inputAno2.value);
   let ano3 = number(inputAno3.value);

   let anoAtual = 2026;

   //Calculando a idade de cada um
   let idade1 = anoAtual - ano1;
   let idade2 = anoAtual - ano2;
   let idade3 = anoAtual - ano3;

}

btOrdenar.onclick = function(){
    verificarIdades();
}