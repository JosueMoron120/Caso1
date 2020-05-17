

function boton62(){
    window.location = "otrascantidades.html"
}
function retsoles(){
    window.location = "retirosoles.html"
}
function confirmar(){
        var elemento = document.getElementById("caja-password").value;
            if(elemento == ""){
                alert("Ingrese un monto porfavor...");
            }else{
              if(elemento%10 == 0){
                window.location = "transaccion.html";
                 /*var montodescuento = document.getElementById("monto").value;
                 var saldo = 5000;
                 var Cuenta = new User(saldo);
                alert(saldo - montodescuento);*/
                }else{
                  alert("Solo múltiplos de 10");
                }
            }
}
function gracias1(){
    window.location = "gracias.html"
}



     

  
  

  




