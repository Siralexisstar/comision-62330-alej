import React, { useEffect, useState } from "react";
import ProductList from "../ProductList/ProductList";
import { getProducts } from "../utils/fetchData";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default ItemListContainer;
