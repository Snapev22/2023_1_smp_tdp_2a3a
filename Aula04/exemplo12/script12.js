function coletarDados(){
   let peso = Number(document.getElementById("peso").value)
   let altura = Number (document.getElementById("altura").value)
   calcularIMC(peso,altura)
}

function calcularIMC(argPeso, argAltura){
   let imc =  argPeso / (argAltura * argAltura)
   document.getElementById("res").innerHTML = imc
   classificarIMC(imc)

}
function classificarIMC(argImc){
   var classificacao = ""
  
   if(imc<18.5){
     classificacao = "Desnutrição"
   }
   else if(imc < 25){
     classificacao = "Peso normal"
   }
   else if(imc <30){
      classificacao = "Sobrepeso"
   }
   else if(imc <35){
      classificacao = "Obesidade 1"
   }
   else if(imc < 40){
      classificacao = "Obesidade11"
   }
   document.getElementById("status").innerHTML = classificacao
}
