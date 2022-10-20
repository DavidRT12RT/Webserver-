const { Router } = require("express");
const { getAbout } = require("../controllers/about");

const router = Router();

router.get("/", getAbout);

module.exports = router;
