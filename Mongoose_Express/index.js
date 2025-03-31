const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/farmStand", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO ERROR!!!!");
    console.log(err);
  });

const categories = ["fruit", "vegetable", "grocery"];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/produce", async (req, res) => {
  const { category } = req.query;
  if (category) {
    const produce = await Product.find({ category });
    res.render("produce/index", { produce, category });
  } else {
    const produce = await Product.find({});
    res.render("produce/index", { produce, category: "All" });
  }
});

app.get("/produce/new", (req, res) => {
  res.render("produce/new", { categories });
});

app.post("/produce", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect(`/produce/${newProduct._id}`);
});

app.get("/produce/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("produce/show", { product });
});

app.get("/produce/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("produce/edit", { product, categories });
});

app.put("/produce/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
  });
  res.redirect(`/produce/${product._id}`);
});

app.delete("/produce/:id", async (req, res) => {
  const { id } = req.params;
  const deleteProduct = await Product.findByIdAndDelete(id);
  res.redirect("/produce");
});

app.listen(3000, () => {
  console.log("SERVER IS RUNNING ON PORT 3000");
});
