//load modules
const dotenv = require("dotenv");
dotenv.config();
const configurationManager = require("./src/config/config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//Create the Express App
const app = express();

//Setup Request body JSON Parsing
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Enable All CORS Requests
app.use(cors());

//"mongodb://localhost:27017/SPM"

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
