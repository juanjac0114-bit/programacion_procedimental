console.log("hola beiby")
let nombre  = document.getElementsByName("nombre").Value;
let apellido  = document.getElementsByName("apellido").Value;
let documento = document.getElementById("documento").Value;
let numero_documento  = document.getElementById("numero_documento").Value;
let telefono  = document.getElementById("telefono").Value;
let genero = document.querySelector('input[name="genero"]:checked').Value;
let cargo  = document.getElementsByName("cargo").Value;
let fecha_nacimiento = document.getElementById("fecha_nacimiento").Value;
let correo = document.getElementById("correo").Value;
let contraseña = document.getElementById("contraseña").Value;

function ValidarDatos(){
    if(nombre == '' || apellido == '' || numero_documento =='' || telefono== '' || correo == '' ){
        console.log("los campos estan vacios")
    }
    else{
        if( nombre != /[a-zA_Z]/){
            console.log('Los datos son incorrectos')
        }
        if( apellido != /[a-zA_Z]/){
            console.log("los datos son incorrectos")
        }
        if( numero_documento.length() ==10){
            console.log("los datos son incorrectos")
        }
        if( telefono.length() > 10 || telefono==/[a-zA_Z]/){
            console.log("los datos son incorrectos")
        }
        if(correo != /[@]/){
            console.log("los datos son incorrectos")
        }
    }
    
}