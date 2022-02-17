window.addEventListener("load", function() {
    let email = document.querySelector("#NomUsr");
    let pass = document.querySelector("#pass");
    let vpass = document.querySelector("#vpass");
    let frase = document.querySelector("#validar");
    let vfrase = document.querySelector("#fraseValidar");
    let form = document.querySelector(".cuadroLogReg");
    let boton = document.querySelector(".botonIniciarSesion");

    pass.addEventListener("keyup", () => {
        if (pass.value.split("").length >= 1) {
            pass.style.border = "2px solid red";
            frase.style.display = "block";
            frase.style.color = "red";
            frase.innerHTML = "Too Short";
        }
        if (pass.value.split("").length > 7) {
            pass.style.border = "2px solid green";
            frase.style.display = "block";
            frase.style.color = "green";
            frase.innerHTML = "Good";
        }
        if (pass.value.split("").length > 8) {
            pass.style.border = "2px solid green";
            frase.style.display = "block";
            frase.style.color = "green";
            frase.innerHTML = "Pretty good";
        }
    });

    vpass.addEventListener("keyup", () => {
        if (vpass.value == pass.value) {
            vfrase.innerHTML = "Contraseña coincide ";
            vfrase.style.display = "block";
            vfrase.style.color = "green";
            vpass.style.border = "2px solid green";
        }
        if (vpass.value !== pass.value) {
            vfrase.innerHTML = "Contraseña no coincide";
            vfrase.style.display = "block";
            vfrase.style.color = "red";
            vpass.style.border = "2px solid red";
        }
        if (vpass.value.length == 0) {
            vfrase.innerHTML = "Contraseña no coincide";
            vfrase.style.display = "block";
            vfrase.style.color = "red";
            vpass.style.border = "2px solid red";
        }
    });

    pass.addEventListener("blur", () => {
        if (!pass.value) {
            // console.log("No puede estar vacio");
            pass.placeholder = "No puede estar vacio";
        }
    });
    form.addEventListener("click", (e) => {
        localStorage.setItem("correo", email.value);
        localStorage.setItem("contraseña", pass.value);
        if (
            email.value.split("").length == 0 &&
            pass.value.split("").length !== 0 &&
            vpass.value.split(" ").length !== 0
        ) {
            e.preventDefault();
        }
    });
});