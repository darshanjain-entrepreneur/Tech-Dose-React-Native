const express = require("express");

const {
  registerController,
  logincontroller,
} = require("../controllers/userController");

const router = express.Router();

// registration

router.post("/register", registerController);

// login

router.post("/login", logincontroller);

module.exports = router;
