const express = require("express");
const app = express();

app.get("/greet", (req, res) => {
  res.send("Hello World!");
});

app.get("/setname", (req, res) => {
  res.cookie("name", "John Doe");
  res.send("Cookie set!");
});

app.listen(3000, () => {
  console.log("SERVING");
});
