function validarDatos() {

    let fecha = document.getElementById("fecha").value;
    let concepto = document.getElementById("concepto").value;
    let valor = document.getElementById("valor").value;
    let ingresos = document.getElementById("ingresos").value;
    let egresos = document.getElementById("egresos").value;
    let categoria = document.getElementById("categoria").value;

    if (
        fecha === "" ||
        concepto === "" ||
        valor === "" ||
        ingresos === "" ||
        egresos === "" ||
        categoria === "Seleccione una opción"
    ) {
        Swal.fire({
            title: "¿COMPLETASTE TODOS LOS CAMPOS?",
            text: "Todos los campos son obligatorios.",
            icon: "warning"
        });
        return;
    }

    if (isNaN(valor)) {
        Swal.fire({
            title: "VALOR INVÁLIDO",
            text: "El campo Valor solo debe contener números.",
            icon: "error"
        });
        return;
    }

    if (isNaN(ingresos)) {
        Swal.fire({
            title: "INGRESOS INVÁLIDOS",
            text: "El campo Ingresos solo debe contener números.",
            icon: "error"
        });
        return;
    }

    if (isNaN(egresos)) {
        Swal.fire({
            title: "EGRESOS INVÁLIDOS",
            text: "El campo Egresos solo debe contener números.",
            icon: "error"
        });
        return;
    }

    Swal.fire({
        title: "¡EXCELENTE!",
        text: "Datos válidos.",
        icon: "success"
    });
}

document.getElementById("guardar").addEventListener("click", validarDatos);