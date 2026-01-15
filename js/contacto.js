function validarFormularioContacto(){
    let errores = [];
 
 let nombre = document.getElementById("nombre").value.trim()
 let correo = document.getElementById("correo").value.trim()
 let contenido = document.getElementById("contenido").value.trim()

 if(nombre === "") {
    errores.push("El nombre no puede estar vacío.")
}
// Validacion nombre mayor a 100 caracteres
if (nombre.length > 100){
    errores.push("El nombre no puede ser mayor a 100 caracteres.")
}
// Validacion email mayor a 100 caracteres
if (correo.length > 100){
    errores.push("El correo no puede ser mayor a 100 caracteres.")
}
if (correo === "") {
    errores.push("El correo no puede estar vacío")


}
  // Validacion comentario vacio
  if (contenido === ""){
    errores.push("El comentario no puede estar vacío")
}

 if (!correo.includes("@duoc.cl") && !correo.includes("@profesor.duoc.cl") && !correo.includes("@gmail.com")) {
    errores.push("Solo pueden ser correos @duoc.cl, @profesor.duoc.cl o @gmail.com")
}

// Validacion comentario caracteres
if (contenido.length > 500){
    errores.push("No puede ser mayor a 500 caracteres")
}


let mensajesDiv = document.getElementById("mensajes");
mensajesDiv.innerHTML = "";

  if (errores.length > 0) {
  mensajesDiv.innerHTML = `<div class="alert alert-danger"><ul><li>${errores.join("</li><li>")}</li></ul></div>`;
} else {
  mensajesDiv.innerHTML = `<div class="alert alert-success">✅ Mensaje enviado</div>`;
}

}