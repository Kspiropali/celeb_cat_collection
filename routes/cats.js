const express = require("express");
const router = express.Router();
const cats = require("../controllers/cats");

router.get("/", cats.getAll);
router.get("/:id", cats.getOne);
router.get("/add/:name", cats.addOne);
router.get("/delete/:id", cats.deleteOne);

module.exports = router;
