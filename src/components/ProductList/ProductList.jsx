import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from "../../components/mock/MockData";
import "./ProductList.css";

const ProductList = ({products}) => {
  // Crear un estado para rastrear el índice del producto que tiene el mouse encima
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <div className="container my-5">
      {/* <h2 className="text-center mb-4">VER COLECCIÓN</h2> */}
      <div className="row">
        {products.map((product, index) => (
          <div key={product.id} className="col-md-3 col-sm-6 mb-4">
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
                <button
                  className="btn btn-primary mt-2 position-relative"
                  onMouseEnter={() => setHoveredProduct(index)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {hoveredProduct === index ? (
                    <i
                      className="fas fa-shopping-cart"
                      style={{
                        fontSize: "1.5rem",
                        color: "#fff",
                      }}
                    ></i>
                  ) : (
                    "AÑADIR CARRITO"
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
