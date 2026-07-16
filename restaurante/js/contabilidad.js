let fecha = document.getElementById("fecha").Value;
let concepto = document.getElementsByName("concepto").Value;
let valor = document.getElementById("valor").Value;
let ingresos = document.getElementById("ingresos").Value;
let egreso = document.getElementById("egresos").Value;
let categoria = document.getElementsByName("categoria").Value;

// Validar campos vacíos
if (
    fecha === "" ||
    concepto === "" ||
    valor === "" ||
    ingresos === "" ||
    egresos === "" ||
    categoria === ""
) {
    alert("Todos los campos son obligatorios");
    return;
}

if (isNaN(valor)) {
    alert("El campo Valor no puede contener letras");
    return;
}

if (isNaN(ingresos)) {
    alert("El campo Ingresos no puede contener letras");
    return;
}

if (isNaN(egresos)) {
    alert("El campo Egresos no puede contener letras");
    return;
}

alert("Datos válidos");