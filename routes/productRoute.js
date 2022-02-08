let express = require("express");
const { oneProduct } = require("../controllers/productController");
let router = express.Router();
let productController = require("../controllers/productController");

router.get("/", productController.index);
router.get("/:id");
router.get("/api/products", productController.getAllProductss);
router.get("/api/products/:id", productController.oneProduct);
router.get("/api/products/suggested", productController.losMasMostrados);

module.exports = router;
