import React, { useEffect, useState } from "react";
import ProductList from "../ProductList/ProductList";
import { getProducts } from "../utils/fetchData";

const ItemListContainer = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts(category)
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        setError(err);
      });
  }, [category]);

  return (
    <div>{error ? <p> {error} </p> : <ProductList products={products} />}</div>
  );
};

export default ItemListContainer;
