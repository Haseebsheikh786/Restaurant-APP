const { Product } = require("../models/Product");

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  product.discountPrice = Math.round(
    product.price * (1 - product.discountPercentage / 100)
  );
  try {
    const doc = await product.save();
    console.log("success");
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
    console.log("error");
  }
};

exports.fetchAllProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.SearchProductByTitle = async (req, res) => {
  const title = new RegExp(req.params.title, "i");
  try {
    const product = await Product.find({ title: title });
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err, "product no found");
  }
};

exports.fetchProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    product.discountPrice = Math.round(
      product.price * (1 - product.discountPercentage / 100)
    );
    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(400).json(err);
  }
};
