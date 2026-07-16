function ValidarDatos() {
    let codigo_producto = document.getElementById("codigo_producto").Value;
    let nombre_producto = document.getElementsByName("nombre_producto").Value;
    let cantidad = document.getElementById("cantidad").Value;
    let marca = document.getElementsByName("marca").Value;


    if (
        codigo_producto === "" ||
        nombre_producto === "" ||
        cantidad === "" ||
        marca === ""
    ) {
        Swal.fire({
  title: "¿RELLENASTE TODOS LOS CAMPOS?",
  text: "todos los campos deben estar completos",
  icon: "question"
});
        return;
    }


    if (isNaN(codigo_producto)) {
        Swal.fire({
  title: "¿USASTE SOLO NUMEROS?",
  text: "El codigo del producto debe ser numerico",
  icon: "question"
});
        return;
    }

    if (isNaN(cantidad)) {
       Swal.fire({
  title: "¿CUAL ES LA CANTIDAD?",
  text: "La cantidad debe ser numerica",
  icon: "question"
});
        return;
    }


    let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (!soloLetras.test(nombre_producto)) {
       Swal.fire({
  title: "NOMBRE INVALIDO",
  text: "El nombre del producto debe contener solo letras",
  icon: "question"
});
        return;
    }

    if (!soloLetras.test(marca)) {
       Swal.fire({
  title: "CARACTERES INVALIDOS",
  text: "La marca slo debe contener letras",
  icon: "question"
});
        return;
    }

    Swal.fire({
        title: "EXCELENTE,",
        icon: "success",
        draggable: true,
        timer: undefined
    });
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("guarda".addEventListener("click", ValidarDatos));
})