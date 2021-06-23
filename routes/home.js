const express = require("express");
const homeControler = require("./../controllers/homeController");

const router = express.Router();

router.route("/").get(homeControler.getHomePage);

module.exports = router;
