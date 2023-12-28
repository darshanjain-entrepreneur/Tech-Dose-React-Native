const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json()); // to send and recieve json data
app.use(morgan("dev"));

app.get("/", (req, res) => {
  sucess: true;
  message: "full stack app";
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`.bgGreen.white);
});
