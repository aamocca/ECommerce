const fetch = require("node-fetch2");
const fs = require("fs");
const api = require("../controllers/apiController");
let url = "https://dhfakestore.herokuapp.com/api/products";
let productsController = {
  index: async (req, res) => {
    let id = req.params.id;

    let response = await fetch(url);
    let data = await response.json();
    const productoFiltrado = data.find((product) => product._id == id);
    if (!productoFiltrado) {
      res.send("Error 404, Not found");
    } else {
      res.render("pages/producto.ejs", (product = productoFiltrado));
    }
  },
};

module.exports = productsController;
