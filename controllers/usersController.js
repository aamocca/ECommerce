const req = require("express/lib/request");
const functions = require("../models/userModel.js");

let usersMethod = {
    registro: (req, res) => {
        let arregloUsuario = functions.leerJson();
        let { email, pass, ValidPass } = req.body;
        if (pass == ValidPass) {
            if (arregloUsuario.find((usuario) => usuario.email == email)) {
                res.send("Error");
            } else {
                arregloUsuario.push({
                    email: email,
                    password: pass,
                });
            }
        }
        res.redirect("/login");
        // functions.escribirJson(arregloUsuario);
        console.log(arregloUsuario);
    },
};

module.exports = usersMethod;