const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`database is connected to ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`database is not working ${error}`);
  }
};

module.exports = connectDb;
