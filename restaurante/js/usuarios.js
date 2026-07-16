function ValidarDatos(){
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


    if (
    nombre === "" ||
    apellido === "" ||
    numero_documento === "" ||
    telefono === "" ||
    correo === ""
) {
    Swal.fire({
  title: "¿RELLENASTE LOS CAMPOS?",
  text: "Rellena los campos por favor",
  icon: "question"
});
} else {

    
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
       Swal.fire({
  title: "EL NOMBRE ES INVALIDO",
  text: "Por favor escribe el nombre con caracteres validos",
  icon: "question"
});
    }

  
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido)) {
       Swal.fire({
  title: "EL APELLIDO ES INVALIDO",
  text: "por favor escribe el apellido con caracteres validos",
  icon: "question"
});
    }

  
    if (numero_documento.length !== 10 || isNaN(numero_documento)) {
        Swal.fire({
  title: "¿ESTO ES UN NUMERO DE DOCUMENTO?",
  text: "El numero de documento solo debe tener 10 digitos",
  icon: "question"
});
    }

    if (
        telefono.length !== 10 ||
        !/^\d+$/.test(telefono)
    ) {
      Swal.fire({
  title: "TELEFONO INVALIDO",
  text: "El numero de telefono debe tener 10 digitos",
  icon: "question"
});
    }

    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
       Swal.fire({
  title: "CORREO INVALIDO",
  text: "El correo debe tener un @",
  icon: "question"
});
    }
}

Swal.fire({
        title: "EXCELENTE, TU PEDIDO SALDRA PRONTO",
        icon: "success",
        draggable: true,
        timer: undefined
    });
}

document.getElementById("btguardar").onclick = validarDatos;