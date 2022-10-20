const { Router } = require("express");

const router = Router();
const { getHome } = require("../controllers/home.js");

router.get("/", getHome);

module.exports = router;
