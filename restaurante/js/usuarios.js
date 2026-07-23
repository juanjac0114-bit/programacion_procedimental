function ValidarDatos() {

    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let documento = document.getElementById("documento").value;
    let numero_documento = document.getElementById("numero_documento").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let genero = document.querySelector('input[name="genero"]:checked');
    let cargo = document.getElementById("cargo").value.trim();
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    let correo = document.getElementById("correo").value.trim();
    let contraseña = document.getElementById("contraseña").value.trim();

    if (
        nombre == "" ||
        apellido == "" ||
        documento == "" ||
        numero_documento == "" ||
        telefono == "" ||
        genero == null ||
        cargo == "" ||
        fecha_nacimiento == "" ||
        correo == "" ||
        contraseña == ""
    ) {
        Swal.fire({
            title: "¿RELLENASTE LOS CAMPOS?",
            text: "Todos los campos son obligatorios.",
            icon: "warning"
        });
        return;
    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
        Swal.fire({
            title: "NOMBRE INVÁLIDO",
            text: "Solo letras.",
            icon: "error"
        });
        return;
    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(apellido)) {
        Swal.fire({
            title: "APELLIDO INVÁLIDO",
            text: "Solo letras.",
            icon: "error"
        });
        return;
    }

    if (!/^\d{10}$/.test(numero_documento)) {
        Swal.fire({
            title: "DOCUMENTO INVÁLIDO",
            text: "Debe tener 10 números.",
            icon: "error"
        });
        return;
    }

    if (!/^\d{10}$/.test(telefono)) {
        Swal.fire({
            title: "TELÉFONO INVÁLIDO",
            text: "Debe tener 10 números.",
            icon: "error"
        });
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        Swal.fire({
            title: "CORREO INVÁLIDO",
            text: "Ingrese un correo válido.",
            icon: "error"
        });
        return;
    }

    Swal.fire({
        title: "¡EXCELENTE!",
        text: "Usuario registrado correctamente.",
        icon: "success"
    });

}

document.getElementById("btguard").addEventListener("click", ValidarDatos);