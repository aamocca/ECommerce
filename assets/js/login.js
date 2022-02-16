let email = document.querySelector("#NomUsr");
let pass = document.querySelector("#pass");
let boton = document.querySelector("#botonIniciarSesion");
let form = document.querySelector(".cuadroLogReg");

form.addEventListener("click", (e) => {
  if (email.value.split("").length == 0 && pass.value.split("").length !== 0) {
    e.preventDefault();
  }
});
