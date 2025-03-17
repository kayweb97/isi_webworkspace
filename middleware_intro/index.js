const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("common"));
app.use((req, res, next) => {
  console.log("THIS IS MY FIRST MIDDLEWARE");
  next();
});

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.get("/dogs", (req, res) => {
  res.send("woof woof");
});

app.listen(3000, () => {
  console.log("App is running on host:3000");
});
