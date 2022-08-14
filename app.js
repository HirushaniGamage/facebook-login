const dotenv = require("dotenv");
dotenv.config();
const configurationManager = require("./src/config/config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

mongoose.connect(configurationManager.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("Connect Database");
});

app.use("/api/v1/clone", require("./src/routes/clone.routes"));

app.get("/", (request, response) => {
  response.send("<h3>Welcome API Documentation</h3>");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Web API Development: ${port}`);
});
