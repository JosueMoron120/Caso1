
function confirmar(){
    var elemento = document.getElementById("caja-password").value;
    if(elemento == ""){
        document.getElementById("valid_mul").style.display="block";
        document.getElementById("valid_mul").innerHTML="*INGRESE UN VALOR*";
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
        var elemento = document.getElementById("caja-password");
        elemento.value = "";
        
      }
  }
}
        
        

           
        

