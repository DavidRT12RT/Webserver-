const { Router } = require("express");
const { getContact } = require("../controllers/contact");

const router = Router();

router.get("/", getContact);

module.exports = router;
