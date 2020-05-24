var constraseña_real = "1234567";

class Usuario{
    constructor(constraseña){
        this.constraseña = constraseña;
    };
    constraseña(){
        return this.constraseña;
    };
};


function ok(){
    var user = new Usuario(document.getElementById("caja-password").value)
    if(user.constraseña == constraseña_real){
        document.getElementById("contraincorrecta").style.display="block";
        document.getElementById("contraincorrecta").innerHTML="*LOGEO CORRECTO*";
        
        logeado = true;
        if(logeado){
           function ok1(){

            window.location = "menu.html"
           }
           setTimeout(ok1,2200); 

        }else{
            document.getElementById("contraincorrecta").style.display="block";
            var elemento = document.getElementById("caja-password");
            elemento.value = "";
        }
    }else{
        document.getElementById("contraincorrecta").style.display="block";
        var elemento = document.getElementById("caja-password");
        elemento.value = ""; 
    }
}
