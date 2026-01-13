function validarFormulario() {
    let errores = [];

    let nombre = document.getElementById("nombre").value.trim();
    let mail = document.getElementById("email").value.trim();
    let telefono = parseInt(document.getElementById("telefono").value);
    let clave1 = document.getElementById("clave1").value.trim();
    let clave2 = document.getElementById("clave2").value.trim();

    // validar el nombre
    if (nombre === "") {
        errores.push("El campo nombre no puede estar vacío.");
    }
    // validar correo
    if (!mail.includes("@")) {
        errores.push("Debe ingresar correo valido.");
    }
    // validar edad
    if (isNaN(telefono) || (telefono.length) != 9) {
        errores.push("Ingrese un numero valido.")
    }
    // validar contraseñas
    if (clave1.length < 6) {
        errores.push("La contraseña debe tener al menos 6 caracteres.")
    }
    // confirmar contraseña
    if (clave1 !== clave2) {
        errores.push("Las contraseñas no coinciden.")
    }

    // mostrar mensajes
    let mensajesDiv = document.getElementById("mensajes");
    mensajesDiv.innerHTML = "";

    if (errores.length > 0) {
        mensajesDiv.innerHTML = mensajesDiv.innerHTML = `
        <div class="alert alert-danger" role="alert">
            <ul>
                <li>${errores.join('</li><li>')}</li>
            </ul>
        </div>
    `;
    } else {
      mensajesDiv.innerHTML = mensajesDiv.innerHTML = `
        <div class="alert alert-success" role="alert">
            👌Registro exitoso
        </div>
    `;  
    }
}
