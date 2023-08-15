const express = require("express");
const router = express.Router();
const home = require("../controllers/home");

router.get("/index", home.index);
router.get("/register", home.register);
router.get("/login", home.login);
router.get("/homepage", home.homepage);

module.exports = router;