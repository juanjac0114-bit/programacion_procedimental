function ValidarDatos(event) {
    event.preventDefault();

    let codigo_producto = document.getElementById("codigo_producto").value.trim();
    let nombre_producto = document.getElementById("nombre_producto").value.trim();
    let cantidad = document.getElementById("cantidad").value.trim();
    let marca = document.getElementById("marca").value.trim();

    
    if (
        codigo_producto === "" ||
        nombre_producto === "" ||
        cantidad === "" ||
        marca === ""
    ) {
        Swal.fire({
            title: "¿RELLENASTE TODOS LOS CAMPOS?",
            text: "Todos los campos deben estar completos.",
            icon: "warning"
        });
        return;
    }

    
    if (isNaN(codigo_producto)) {
        Swal.fire({
            title: "CÓDIGO INVÁLIDO",
            text: "El código del producto debe contener solo números.",
            icon: "error"
        });
        return;
    }


    if (isNaN(cantidad)) {
        Swal.fire({
            title: "CANTIDAD INVÁLIDA",
            text: "La cantidad debe contener solo números.",
            icon: "error"
        });
        return;
    }


    let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (!soloLetras.test(nombre_producto)) {
        Swal.fire({
            title: "NOMBRE INVÁLIDO",
            text: "El nombre del producto solo debe contener letras.",
            icon: "error"
        });
        return;
    }

    if (!soloLetras.test(marca)) {
        Swal.fire({
            title: "MARCA INVÁLIDA",
            text: "La marca solo debe contener letras.",
            icon: "error"
        });
        return;
    }

    
    Swal.fire({
        title: "¡EXCELENTE!",
        text: "Los datos fueron validados correctamente.",
        icon: "success"
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("guarda").addEventListener("click", ValidarDatos);
});