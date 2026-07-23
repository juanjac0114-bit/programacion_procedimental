function validarDatos(event) {
    event.preventDefault();

    let producto = document.getElementById("producto").value.trim();
    let cantidad = document.getElementById("cantidad").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let pago = document.getElementById("pago").value;

    let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (nombre === "") {
        Swal.fire({
            title: "¿A QUIÉN LE LLEGARÁ EL DOMICILIO?",
            text: "Debe ingresar su nombre.",
            icon: "warning"
        });
        return;
    }

    if (!soloLetras.test(nombre)) {
        Swal.fire({
            title: "NOMBRE INVÁLIDO",
            text: "El nombre solo debe contener letras.",
            icon: "error"
        });
        return;
    }

 
    if (producto === "") {
        Swal.fire({
            title: "¿QUÉ PRODUCTO QUIERES LLEVAR?",
            text: "Selecciona tu producto.",
            icon: "warning"
        });
        return;
    }

  
    if (cantidad === "" || isNaN(cantidad) || Number(cantidad) <= 0) {
        Swal.fire({
            title: "¿CUÁNTOS DESEAS?",
            text: "Ingrese una cantidad válida.",
            icon: "warning"
        });
        return;
    }


    if (direccion === "") {
        Swal.fire({
            title: "¿A DÓNDE LLEGARÁ EL PRODUCTO?",
            text: "Indica la dirección.",
            icon: "warning"
        });
        return;
    }

   
    if (telefono === "") {
        Swal.fire({
            title: "¿A DÓNDE LLAMAREMOS?",
            text: "Debe ingresar su número de teléfono.",
            icon: "warning"
        });
        return;
    }

    if (!/^\d{10}$/.test(telefono)) {
        Swal.fire({
            title: "NÚMERO INVÁLIDO",
            text: "El teléfono debe tener exactamente 10 dígitos.",
            icon: "error"
        });
        return;
    }

    // Validar método de pago
    if (pago === "") {
        Swal.fire({
            title: "¿CÓMO NOS VAS A PAGAR?",
            text: "Selecciona tu método de pago.",
            icon: "warning"
        });
        return;
    }

    // Todo correcto
    Swal.fire({
        title: "¡EXCELENTE!",
        text: "Tu pedido saldrá pronto.",
        icon: "success"
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnguardar").addEventListener("click", validarDatos);
});