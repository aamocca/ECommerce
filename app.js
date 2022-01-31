const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("assets"));
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("El servidor esta corriendo");
});

app.get("/", (req, res) => {
  res.render("./pages/index.ejs");
});

app.get("/products/:id", (req, res) => {
  res.render("./pages/producto.ejs");
});

app.get("/cart", (req, res) => {
  res.render("./pages/checkout.ejs");
});

app.get("/register", (req, res) => {
  res.render("./pages/register.ejs");
});
app.get("/login", (req, res) => {
  res.render("./pages/login.ejs");
});
