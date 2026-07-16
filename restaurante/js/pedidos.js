let nombre = document.getElementsByName("nombre")[0].value;
let producto = document.getElementsByName("producto")[0].value;
let cantidad = document.getElementById("cantidad").value;
let direccion = document.getElementById("direccion").value;
let telefono = document.getElementById("telefono").value;
let pago = document.getElementById("pago").value;

function validarDatos(){
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
    alert("El teléfono debe tener 10 dígitos");
    return;
}

if (pago === "") {
    alert("Seleccione un método de pago");
    return;
}

alert("Datos validados correctamente.");}

document.getElementById("btnguardar").onclick = validarDatos;