const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    priceOrigin: { type: Number, require: true },
    discount: { type: Number, default: "0" },
    gift: { type: String },
    rate: { type: Number },
    img: { type: String },
    cate: { type: String },
    status: { type: String, enum: ["TO SELL", "SELLING", "SOLD"] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", ItemSchema);
