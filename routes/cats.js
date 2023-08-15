const express = require("express");
const router = express.Router();
const cats = require("../controllers/cats");
const authenticator = require("../middleware/authenticator");

router.get("/", authenticator, cats.getAll);
router.get("/:id", authenticator, cats.getOne);
router.post("/add", authenticator, cats.addOne);
router.get("/delete/:id", authenticator, cats.deleteOne);

module.exports = router;
