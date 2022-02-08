const fetch = require("node-fetch2");
const fs = require("fs");

let productsController = {
  index: (req, res) => {
    res.render("pages/producto.ejs");
  },

  getAllProductss: async (req, res) => {
    let url = "https://fakestoreapi.com/products";

    let response = await fetch(url);
    let data = await response.json();
    res.send(data);

    return data;
  },

  oneProduct: async (req, res) => {
    let id = req.params.id;
    let url2 = this.getAllProductss;
  },

  losMasMostrados: async (req, res) => {
    let url2 = "https://fakestoreapi.com/products";

    let response2 = await fetch(url2);
    let data2 = await response2.json();
    let cortar = data2.slice(0, 5);
    res.send(cortar);
  },
};

module.exports = productsController;
