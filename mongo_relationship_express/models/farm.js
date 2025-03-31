const mongoose = require("mongoose");
const Product = require("./product");
const { Schema } = mongoose;

const farmSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  produce: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

farmSchema.pre("findOneAndDelete", async function (next) {
  const farm = await this.model.findOne(this.getQuery());
  if (farm && farm.produce.length) {
    const res = await Product.deleteMany({ _id: { $in: farm.produce } });
    console.log(res);
  }
  next();
});

const Farm = mongoose.model("Farm", farmSchema);

module.exports = Farm;
