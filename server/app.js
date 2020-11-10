const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");

require("./models/user");

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});
mongoose.connection.on("error", (err) => {
  console.log("error in connecting mongodb", err);
});

//77qbVnnhnd5yBmSi

app.listen(PORT, () => {
  console.log("Server is started at", PORT, "CC dug dug dug dug dug.......");
});
