let express = require("express");
let apiControllers = require("../controllers/apiController");
let router = express.Router();

router.get("/products", apiControllers.index);
router.get("/suggested", apiControllers.suggested);
router.get("/mostWanted", apiControllers.mostWanted);
router.post("/users");
router.post("/users/login");
router.get("/:id", apiControllers.idProduct);
router.get("/:id/related", apiControllers.sameCategory);

module.exports = router;
