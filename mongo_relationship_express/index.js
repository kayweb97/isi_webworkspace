const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const Product = require("./models/product");
const Farm = require("./models/farm");

mongoose
  .connect("mongodb://localhost:27017/farmStandTake2", {
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

//FARM ROUTE

app.get("/farms", async (req, res) => {
  const farms = await Farm.find({});
  res.render("farms/index", { farms });
});

app.get("/farms/new", (req, res) => {
  res.render("farms/new");
});

app.get("/farms/:id", async (req, res) => {
  const farm = await Farm.findById(req.params.id).populate("produce");
  res.render("farms/show", { farm });
});

app.delete("/farms/:id", async (req, res) => {
  const farm = await Farm.findByIdAndDelete(req.params.id);
  res.redirect("/farms");
});

app.post("/farms", async (req, res) => {
  const farm = new Farm(req.body);
  await farm.save();
  res.redirect("/farms");
});

app.get("/farms/:id/produce/new", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id);
  res.render("produce/new", { categories, farm });
});

app.post("/farms/:id/produce", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id);
  const { name, price, category } = req.body;
  const product = new Product({ name, price, category });
  farm.produce.push(product);
  product.farm = farm;
  await farm.save();
  await product.save();
  res.redirect(`/farms/${id}`);
});
//  PRODUCT ROUTE
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
  const product = await Product.findById(id).populate("farm", "name");
  console.log(product);
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
