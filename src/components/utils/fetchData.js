import { products } from "../../components/mock/MockData";

export const getProducts = (category) => {
  return new Promise((resolve, reject) => {
    const filteredProducts = category
      ? products.filter((product) => product.category.includes(category))
      : products;

    if (filteredProducts.length > 0) {
      resolve(filteredProducts);
    } else {
      reject("No hay productos para mostrar");
    }
  });
};
