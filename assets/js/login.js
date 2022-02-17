let email = document.querySelector("#NomUsr");
let pass = document.querySelector("#pass");
let boton = document.querySelector("#botonIniciarSesion");
let form = document.querySelector(".cuadroLogReg");
let myalert = document.querySelector(".myalert");
let cerrar = document.querySelector(".cerrar");
let aceptar = document.querySelector(".aceptar");
let check = document.querySelector(".remember");

form.addEventListener("click", (e) => {
  if (email.value.split("").length == 0 && pass.value.split("").length !== 0) {
    e.preventDefault();
    myalert.style.display = "revert";
  }

  if (
    email.value == localStorage.getItem("correo") &&
    pass.value == localStorage.getItem("contraseña")
  ) {
  }
});

check.addEventListener("click", () => {
  email.addEventListener("blur", () => {
    email.value = localStorage.getItem("correo");
  });
});

cerrar.addEventListener("click", () => {
  myalert.style.display = "none";
});

aceptar.addEventListener("click", () => {
  myalert.style.display = "none";
});
