const express = require("express");
const router = express.Router();
const users = require("../controllers/users");

router.get("/", users.getAll);
router.get("/:id", users.getOne);
router.post("/add", users.register);
router.get("/delete/:id", users.deleteOne);

router.post("/login", users.login);

module.exports = router;