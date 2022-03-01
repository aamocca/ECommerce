const fs = require("fs");
const usersController = require("../controllers/usersController");

let functionsProduct = {
  leerJson: function () {
    return JSON.parse(
      fs.readFileSync(
        require("path").resolve(__dirname, "..", "data", "products.json"),
        "utf-8"
      )
    );
  },
  escribirJson: function (arregloNuevo) {
    return fs.writeFileSync(
      require("path").resolve(__dirname, "..", "data", "products.json"),
      JSON.stringify(arregloNuevo, null, 2)
    );
  },
  retornarJson: function () {
    return fs.readFileSync(
      require("path").resolve(__dirname, "..", "data", "products.json")
    );
  },
};

module.exports = functionsProduct;
