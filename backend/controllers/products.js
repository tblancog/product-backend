const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
});
const ProductModel = mongoose.model("products", ProductSchema);

const getProducts = async (_, res) => {
  try {
    const products = await ProductModel.find({});
    res.send(products);
  } catch (error) {
    console.error(`Get products error: ${error}`);
  }
};

const getProductById = async (req, res) => {
  let products = [];
  try {
    const { id } = req.params;
    const products = await ProductModel.find({ _id: id });
    res.send(products);
  } catch (error) {
    console.error(`Get products error: ${error}`);
    res.send(products);
  }
};

const createProduct = async (req, res) => {
  const createdProduct = await ProductModel.create(req.body);
  return createdProduct;
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
};
