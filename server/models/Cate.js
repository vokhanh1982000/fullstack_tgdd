const mongoose = require("mongoose");

const CateSchema = new mongoose.Schema(
  {
    nameCate: { type: String, require: true, unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Categories", CateSchema);
