const fetch = require("node-fetch2");
const fs = require("fs");

let apiControllers = {
  index: async (req, res) => {
    let url = "https://fakestoreapi.com/products";

    let response = await fetch(url);
    let data = await response.json();
    let cortar = data.slice(0, 5);
    res.send(data);

    return data;
  },

  suggested: async (req, res) => {
    let url = "https://fakestoreapi.com/products";

    let response = await fetch(url);
    let data = await response.json();
    let cortar = data.slice(0, 5);
    res.send(cortar);
  },
};

module.exports = apiControllers;
