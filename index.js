const express = require("express");
const app = express();

app.listen(25000, () => {
  console.log("Application started and Listening on port 25000");
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index/html");
});

app.get("/invite", (req, res) => {
  res.sendFile(__dirname + "/invite/html");
});