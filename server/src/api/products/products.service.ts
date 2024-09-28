import Product from "./products.model";

const getProducts = async () => {
  const products = await Product.find();
  return products;
};

export { getProducts };
