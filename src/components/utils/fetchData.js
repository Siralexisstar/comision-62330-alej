import { products } from "../../components/mock/MockData";

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      resolve(products);
    } else {
      reject("No hay productos");
    }
  });
};
