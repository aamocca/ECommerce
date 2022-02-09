let express = require("express");
let apiControllers = require("../controllers/apiController");
let router = express.Router();

router.get("/products", apiControllers.index);
router.get("/suggested", apiControllers.suggested);

module.exports = router;
