const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hey lets make a instagram clone");
});

app.listen(PORT, () => {
  console.log("Server is started at", PORT, "CC dug dug dug dug dug.......");
});
