const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDb = require("./config/db");

dotenv.config();

connectDb();

const app = express();

app.use(cors());

app.use(express.json()); // to send and recieve json data
app.use(morgan("dev"));

app.use("/api/v1/auth", require("./routes/userRoutes"));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`.bgGreen.white);
});
