let fs = require("fs");

let email = document.querySelector("#NomUsr");
let pass = document.querySelector("#pass");
let boton = document.querySelector("#botonIniciarSesion");
let form = document.querySelector(".cuadroLogReg");

let leerJSON = function () {
  return JSON.parse(
    fs.readFileSync(
      require("path").resolve(__dirname, "..", "data", "users.json"),
      "utf-8"
    )
  );
};

console.log(leerJSON());

form.addEventListener("click", (e) => {
  console.log(leerJSON());
  if (email.value.split("").length == 0 && pass.value.split("").length !== 0) {
    e.preventDefault();
  }
});
