const express = require("express");

const { registerController } = require("../controllers/userController");

const router = express.Router();

// registration

router.post("/register", registerController);

module.exports = router;
