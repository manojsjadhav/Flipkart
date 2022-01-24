import { products } from "./constants/product.js";
import Product from "./model/productSchema.js";

const DefaultData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data imported succesfully");
  } catch (error) {
    console.log("error:", error.massege);
  }
};

export default DefaultData;
