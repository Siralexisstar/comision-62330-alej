import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductList.css";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../context/CartContext";

const ProductList = ({ products, viewMode, perRow }) => {
  const { addToCart, removeItem } = useCartContext();
  const handleOnBuy = (product, quantity) => {
    console.log(
      `Se agregaron ${quantity} productos de ${product.name} al carrito`
    );

    //Cada vez que alguien clique en el carrito, se actualiza la cantidad de items
    addToCart(product, quantity);
  };

  const handleOnRemove = (product, quantity) => {
    console.log(
      `Se removieron ${quantity} productos de ${product.name} del carrito`
    );
    removeItem(product, quantity);
  };

  return (
    <div className="container my-5">
      <div
        className={`row ${
          viewMode === "grid"
            ? `row-cols-1 row-cols-md-${perRow}`
            : "d-flex flex-column"
        }`}
      >
        {products.map((product) => (
          <div key={product.id} className="col mb-4">
            <div className="card h-100 shadow-sm">
              <div className="position-relative">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="position-absolute top-0 end-0 p-2">
                  <i className="fas fa-heart fa-lg text-secondary"></i>
                </div>
              </div>
              <div className="card-body text-center d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text flex-grow-1">{product.description}</p>
                <p className="card-text">
                  <strong>{product.price}€ IVA incluido</strong>
                </p>
                <ItemCount
                  stock={product.stock}
                  initial={1}
                  handleOnBuy={(quantity) => handleOnBuy(product, quantity)}
                  handleOnRemove={(quantity) =>
                    handleOnRemove(product, quantity)
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
