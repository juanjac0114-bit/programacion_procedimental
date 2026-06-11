let codigo_producto = document.getElementById("codigo_producto").Value;
let nombre_producto = document.getElementsByName("nombre_producto").Value;
let cantidad = document.getElementById("cantidad").Value;
let marca = document.getElementsByName("marca").Value;

// Validar campos vacíos
if (
    codigo_producto === "" ||
    nombre_producto === "" ||
    cantidad === "" ||
    marca === ""
) {
    alert("Todos los campos son obligatorios");
    return;
}

// Validar que código y cantidad sean números
if (isNaN(codigo_producto)) {
    alert("El código del producto debe ser numérico");
    return;
}

if (isNaN(cantidad)) {
    alert("La cantidad debe ser numérica");
    return;
}

// Validar que nombre y marca solo contengan letras
let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

if (!soloLetras.test(nombre_producto)) {
    alert("El nombre del producto solo debe contener letras");
    return;
}

if (!soloLetras.test(marca)) {
    alert("La marca solo debe contener letras");
    return;
}

alert("Datos válidos");