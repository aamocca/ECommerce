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
    let name = req.body.nombre;
    let valor = req.body.valor;
    let stock = req.body.stock;
    let descripcion = req.body.descripcion;
    let tienda = req.body.tienda;
    let id = req.body.id;
    let img = req.body.img;
    objetosjson.push({
      gallery: [],
      mostwanted: false,
      stock: stock,
      store: tienda,
      _id: id,
      title: name,
      price: valor,
      description: descripcion,
      image: img,
      category: null,
      __v: 0,
    });
    funciones.escribirJson(objetosjson);
    return res.send();
  },

  deleteItem: (req, res) => {
    let objetosjson = funciones.leerJson();
    const { id } = req.body;
    const busqueda = objetosjson.filter((element) => element._id !== id);
    console.log(busqueda);

    funciones.escribirJson(busqueda);
    return res.send(busqueda);
  },

  editItem: (req, res) => {
    let objetosjson = funciones.leerJson();
    const { id } = req.body;
    const name = req.body.nombre;
    const valor = req.body.valor;
    const stock = req.body.stock;
    const descripcion = req.body.descripcion;
    const tienda = req.body.tienda;
    const newimg = req.body.newimg;
    const img1 = req.body.img1;
    const img2 = req.body.img2;
    const img3 = req.body.img3;
    const mostWanted = req.body.mostwanted;
    const category = req.body.category;
    const busqueda = objetosjson.filter((element) => element._id !== id);

    console.log(busqueda);
    funciones.escribirJson(busqueda);

    busqueda.push({
      gallery: [img1, img2, img3],
      mostwanted: mostWanted,
      stock: stock,
      store: null,
      _id: id,
      title: name,
      price: valor,
      description: descripcion,
      image: newimg,
      category: category,
    });
    funciones.escribirJson(busqueda);
    return res.send(busqueda);
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
    let objetosjson = funciones.leerJson();
    // let response = await fetch(url);
    // let data = await response.json();
    const productoFiltrado = objetosjson.find((product) => product._id == id);
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
