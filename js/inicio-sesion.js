function validarFormularioInicio(){
    let errores = [];
   
    let email = document.getElementById("correo").value.trim()
    let clave = document.getElementById("contraseña").value;
   
    let mensajesDiv = document.getElementById("mensajes");
   
    // Validaciones
   
    if (email === "") {
       errores.push("Porfavor ingrese un email valido")
    }
    if (clave === "") {
       errores.push("Porfavor ingrese una clave valida")
    }
     // Usuarios definidos en el código
     const usuarios = [
       { email: "admin@duoc.cl", clave: "admin123", rol: "admin" },
       { email: "cliente@gmail.com", clave: "cliente456", rol: "cliente" }
     ];
   
     // Buscar coincidencia
     const usuarioValido = usuarios.find(
       (usuario) => usuario.email === email && usuario.clave === clave
     );
   
   
     if (usuarioValido) {
       mensajesDiv.innerHTML = `<div class="alert alert-success">✅ Inicio de sesión exitoso</div>`;
   
       // Redirigir según el rol
       if (usuarioValido.rol === "admin") {
         window.location.href = "../administrador/pages/home.html";
   
       } else {
         window.location.href = "../../index.html";
       }
     } else {
       mensajesDiv.innerHTML = `<div class="alert alert-danger">❌ Correo o clave incorrectos</div>`;
     }
   }
   