const fs = require("fs");

let functions = {
    leerJson: function() {
        return JSON.parse(
            fs.readFileSync(
                require("path").resolve(__dirname, "..", "data", "users.json"),
                "utf-8"
            )
        );
    },
    escribirJson: function(arregloNuevo) {
        return fs.writeFileSync(
            require("path").resolve(
                __dirname,
                "..",
                "data",
                "users.json",
                JSON.stringify(arregloNuevo, null, "")
            )
        );
    },
};

module.exports = functions;