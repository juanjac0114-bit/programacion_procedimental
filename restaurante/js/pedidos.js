let nombre = document.getElementsByName("nombre")[0].value;
let producto = document.getElementsByName("producto")[0].value;
let cantidad = document.getElementById("cantidad").value;
let direccion = document.getElementById("direccion").value;
let telefono = document.getElementById("telefono").value;
let pago = document.getElementById("pago").value;


if (nombre.trim() === "") {
    alert("Ingrese su nombre");
    return;
}

if (producto.trim() === "") {
    alert("Ingrese el producto");
    return;
}

if (cantidad === "" || cantidad <= 0) {
    alert("Ingrese una cantidad válida");
    return;
}

if (direccion.trim() === "") {
    alert("Ingrese la dirección");
    return;
}

if (telefono.trim() === "") {
    alert("Ingrese el teléfono");
    return;
}

// Validar teléfono (10 dígitos)
if (!/^\d{10}$/.test(telefono)) {
    alert("El teléfono debe tener 10 dígitos");
    return;
}

if (pago === "") {
    alert("Seleccione un método de pago");
    return;
}

alert("Datos validados correctamente.");