const { hashPassword } = require("../helpers/authHelper");
const userModel = require("../models/userModels");

//registercontroller
const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.status(404).send({
        success: false,
        message: "name is required",
      });
    }
    if (!email) {
      return res.status(404).send({
        success: false,
        message: "email is required",
      });
    }

    if (!password || password.length < 6 || password.length > 60) {
      return res.status(404).send({
        success: false,
        message: "email is required",
      });
    }

    // existing user
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(500).send({
        success: false,
        message: "Email already exists",
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = await userModel({
      name,
      email,
      password: hashedPassword,
    }).save();

    return res.status(201).send({
      success: true,
      message: "Registration Successfull",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Registration api",
      error,
    });
  }
};

module.exports = { registerController };
