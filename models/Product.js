const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    thumbnail: { type: String, required: true },
    title: { type: String, required: true },
    price: {
      type: Number,
      min: [1, "wrong min price"],
      max: [10000, "wrong max price"],
    },
    quantity: { type: Number },
  },
  { timestamps: true }
);

const virtual = productSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
productSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Product = mongoose.model("Product", productSchema);
