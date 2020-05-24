
function confirmar(){
  let saldo = 5000;
    var elemento = document.getElementById("caja-password").value;
    if(elemento == ""){
        document.getElementById("valid_mul").style.display="block";
        document.getElementById("valid_mul").innerHTML="*INGRESE UN VALOR*";
    }else{
      if(elemento > saldo){
        document.getElementById("valid_mul").style.display="block";
      document.getElementById("valid_mul").innerHTML="SALDO INSUFICIENTE"
    }else{
      if(elemento%10 == 0){
        document.getElementById("valid_mul").style.display="block";
        document.getElementById("valid_mul").innerHTML="PROCESANDO TRANSACCION "
        function graciasfinal(){
            window.location = "transaccion.html"
        }
        setTimeout(graciasfinal,2200);
      }else{
        document.getElementById("valid_mul").style.display="block";
        document.getElementById("valid_mul").innerHTML="NO ES MULTIPLO DE 10 "
        
      }
    }
  }

}
        
        

           
        

