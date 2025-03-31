const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose
  .connect("mongodb://localhost:27017/relationshipDemo", {
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

const productSchema = new Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ["Spring", "Summer", "Fall", "Winter"],
  },
});

const farmSchema = new Schema({
  name: String,
  city: String,
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

const Product = mongoose.model("Product", productSchema);
const Farm = mongoose.model("Farm", farmSchema);
// Product.insertMany([
//   { name: "water yam", price: 4.99, season: "Summer" },
//   { name: "sweet corn", price: 1.99, season: "Spring" },
//   { name: "yellow yam", price: 2.99, season: "Summer" },
// ]);

// const makeFarm = async () => {
//   const farm = new Farm({ name: "Full Belly Farms", city: "Guinda, CA" });
//   const waterYam = await Product.findOne({ name: "water yam" });
//   farm.products.push(waterYam);
//   await farm.save();
//   console.log(farm);
// };

// makeFarm();

const addProduct = async () => {
  const farm = await Farm.findOne({ name: "Full Belly Farms" });
  const sweetCorn = await Product.findOne({ name: "sweet corn" });
  farm.products.push(sweetCorn);
  await farm.save();
  console.log(farm);
};

Farm.findOne({ name: "Full Belly Farms" })
  .populate("products")
  .then((farm) => console.log(farm));
