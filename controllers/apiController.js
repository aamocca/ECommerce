const fetch = require("node-fetch2");
const functions = require("../models/userModel.js");
const funciones = require("../models/productModel.js");
const path = require("path");
const fs = require("fs");
const { nextTick } = require("process");
let url = "https://dhfakestore.herokuapp.com/api/products";
let apiControllers = {
  newIndex: (req, res) => {
    let objetosjson = funciones.leerJson();
    res.send(objetosjson);
  },

  writeNew: (req, res) => {
    let objetosjson = funciones.leerJson();
    let { nombre, value, stock, descripcion, shop, imagen, img1, img2, img3 } =
      req.body;
    objetosjson.push({
      gallery: [img1, img2, img3],
      mostwanted: false,
      stock: stock,
      store: shop,
      title: nombre,
      price: value,
      description: descripcion,
      image: imagen,
      category: "Alimentos",
      __v: 0,
    });
    funciones.escribirJson(objetosjson);
  },

  index: async (req, res) => {
    let response = await fetch(url);
    let data = await response.json();
    let cortar = data.slice(0, 5);
    res.send(data);

    return data;
  },

  suggested: async (req, res) => {
    let response = await fetch(url);
    let data = await response.json();
    let cortar = data.slice(0, 5);
    res.send(cortar);
  },

  idProduct: async (req, res) => {
    let id = req.params.id;

    let response = await fetch(url);
    let data = await response.json();
    const productoFiltrado = data.find((product) => product._id == id);
    if (!productoFiltrado) {
      res.send("Error 404, Not found");
    } else {
      res.send(productoFiltrado);
    }
  },
  sameCategory: async (req, res) => {
    let id = req.params.id;

    let response = await fetch(url);
    let data = await response.json();
    const productoFiltrado = data.find((product) => product._id == id);

    if (!productoFiltrado) {
      res.send("Error 404, Not found");
    } else {
      const categoria = data.filter(
        (categoria) => categoria.category == productoFiltrado.category
      );
      res.send(categoria);
      console.log(categoria);
    }
  },
  mostWanted: async (req, res) => {
    let response = await fetch(url);
    let data = await response.json();
    const mostwanted = data.filter((wanted) => wanted.mostwanted === true);
    res.send(mostwanted);
  },
};

module.exports = apiControllers;
