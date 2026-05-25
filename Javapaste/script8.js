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
   let ano1 = Number(inputAno1.value);
   let ano2 = Number(inputAno2.value);
   let ano3 = Number(inputAno3.value);
 
   let nome1 = inputNome1.value;
   let nome2 = inputNome2.value;
   let nome3 = inputNome3.value;
   
   let anoAtual = 2026;

   //Calculando a idade de cada um
   let idade1 = anoAtual - ano1;
   let idade2 = anoAtual - ano2;
   let idade3 = anoAtual - ano3;

   //Variaveis para armazenar os resultados obtidos
   let maisVelha="";
   let segunda="";
   let maisNova=""; 
   
   //Verificar se o nome1 é o mais velho
   if(idade1 >= idade2 && idade1>= idade3){
      maisVelha = nome1 +"-"+idade1+"anos"
        //Verificar quem é o mais velho entr 2 e 3   
        if(idade2 >= idade3){
            segunda = nome2 +"-"+ idade2+" anos";
            maisNova = nome3 +"-"+idade3+ "anos";   
        }else{
            segunda = nome3+"-"+idade3+" anos";
            maisNova = nome2+"-"+idade2+" anos";
        }     
    }else if(idade2 >= idade1 && idade2>= idade3){
      maisVelha = nome2 +"-"+idade2+"anos"
      
        if(idade1 >= idade3){
            segunda = nome1 +"-"+ idade1+" anos";
            maisNova = nome3 +"-"+idade3+ "anos";   
        }else{
            segunda = nome3+"-"+idade3+" anos";
            maisNova = nome1+"-"+idade1+" anos";
        }     
    }else{
        maisVelha = nome3 +"-"+idade3+"anos"
        if(idade1 >= idade2){
            segunda = nome1 +"-"+idade1+" anos";
            maisNova = nome2+"-"+idade2+" anos";
        }else{
            segunda = nome2+"-"+idade2+" anos";
            maisNova = nome1+"-"+idade1+" anos";
        }
    }    
   
    h3NomesOrdenados.innerHTML= "Pessoa mais velha: "+maisVelha+"<br>"+
                                "2 pessoa mais velha: "+segunda+"<br>"+
                                "Pessoa mais nova: "+maisNova            
} 
     

btOrdenar.onclick = function(){
    verificarIdades();
}