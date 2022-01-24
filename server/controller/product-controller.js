import product from "../model/productSchema.js";
import Product from "../model/productSchema.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.json(products);
  } catch (error) {
    console.log("error:", error.massege);
  }
};

export const getProductById = async (req, res) => {
  try {
    const productId = await product.findOne({ id: req.params.id });
    res.json(productId);
  } catch (error) {
    console.log("error:", error.massege);
  }
};
