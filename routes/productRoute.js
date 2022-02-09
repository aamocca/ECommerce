let express = require("express");
const req = require("express/lib/request");

let router = express.Router();
let productController = require("../controllers/productController");
let apiController = require("../controllers/apiController");

router.get("/:id", productController.index);

module.exports = router;
