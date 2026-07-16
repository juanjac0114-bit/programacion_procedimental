function validarDatos() {
    let producto = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidad").value;
    let nombre = document.getElementById("nombre").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    let pago = document.getElementById("pago").value;

    console.log(nombre);
    if (nombre.trim() === "") {
        Swal.fire({
            title: "¿A QUIEN LE LLEGARA EL DOMICILIO?",
            text: "Debe ingresar su nombre",
            icon: "question"
        });;
        return;
    }

    

    if (producto.trim() === "") {
        Swal.fire({
            title: "¿QUE PRODUCTO QUIERES LLEVAR?",
            text: "Selecciona tu producto",
            icon: "question"
        });
        return;
    }

    if (cantidad === "" || cantidad <= 0) {
        Swal.fire({
            title: "¿CUANTOS DESEAS?",
            text: "selecciona la cantidad",
            icon: "question"
        });
        return;
    }

    if (direccion.trim() === "") {
        Swal.fire({
            title: "¿A DONDE LLEGARÁ EL PRODUCTO?",
            text: "Indica la dirección",
            icon: "question"
        });
        return;
    }

    if (telefono.trim() === "") {
        Swal.fire({
            title: "¿A DONDE LLAMAREMOS?",
            text: "That thing is still around?",
            icon: "question"
        });
        return;
    }

    // Validar teléfono (10 dígitos)
    if (!/^\d{10}$/.test(telefono)) {
        Swal.fire({
            title: "NUMERO INVALIDO",
            text: "Ingrese su numero de telefono",
            icon: "question"
        });
        return;
    }

    if (pago === "") {
        Swal.fire({
            title: "¿COMO NOS VAS A PAGAR?",
            text: "Selecciona tu metodo de pago",
            icon: "question"
        });
        return;
    }

    Swal.fire({
        title: "EXCELENTE, TU PEDIDO SALDRA PRONTO",
        icon: "success",
        draggable: true,
        timer: undefined
    });
}

document.getElementById("btnguardar").onclick = validarDatos;