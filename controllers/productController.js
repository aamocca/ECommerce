const fetch = require("node-fetch2");
const fs = require("fs");

let productsController = {
  index: (req, res) => {
    res.render("pages/producto.ejs");
  },
};

module.exports = productsController;
