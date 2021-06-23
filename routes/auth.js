const express = require("express");
const authControllers = require("./../controllers/authControllers");

const router = express.Router();

router.route("/login").get(authControllers.login).post(authControllers.getUser);

router
  .route("/signup")
  .get(authControllers.signup)
  .post(authControllers.createUser);

module.exports = router;
