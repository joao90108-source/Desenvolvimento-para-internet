let inputNota1 = document.querySelector("#inputNota1");
let inputNota2 = document.querySelector("#inputNota2");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularMedia(){
   let nota1 = Number(inputNota1.value);
   let nota2 = Number(inputNota2.value);
   let media = (nota1+nota2)/2;

   if(media >= 6){
      h3Resultado.textContent = "Aluno APROVADO com a média:" +media;
   }else{
    h3Resultado.textContent = "Aluno REPROVADO com a media: " +media; 
}
//&& = e; || = ou.
//if(media >= 6 && media === 9){

//}
//if(media>=6 || media === 9);

}

btCalcular.onclick = function(){
    calcularMedia();

}

