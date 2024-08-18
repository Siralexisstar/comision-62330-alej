import { useState } from "react";
import "./ItemCount.css";
import { FiMinus, FiPlus } from "react-icons/fi"; // Íconos minimalistas

const ItemCount = ({ stock, initial, handleOnBuy, handleOnRemove }) => {
  const [qty, setQty] = useState(initial);
  const [hovered, setHovered] = useState(false);

  const handleClick = (op) => {
    op === "+" ? handleClickMas() : handleClickMenos();
  };

  const handleClickMenos = () => {
    if (qty > 0) {
      setQty(qty - 1);
      handleOnRemove(1); // Resta 1 unidad del carrito
    }
  };

  const handleClickMas = () => {
    if (qty < stock) {
      setQty(qty + 1);
    } else {
      alert("No hay stock suficiente");
    }
  };

  //Añadimos la cantidad a la compra
  //le pasamos el qty que es la cantidad que se ha seleccionado en el evento
  const handleAddToCart = () => {
    handleOnBuy(qty);
    // handleOnRemove(qty);
  };

  return (
    <>
      <div className="item-count d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center mb-2">
          <button
            onClick={() => handleClick("-")}
            className="btn btn-outline-secondary"
            style={{
              borderRadius: "12px",
              padding: "0.3rem 0.6rem",
              margin: "0 0.5rem",
              border: "1px solid #ccc",
              backgroundColor: "transparent",
              color: "#333",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FiMinus size={20} />
          </button>

          <span
            className="mx-2"
            style={{ fontSize: "1.2rem", fontWeight: "400", color: "#555" }}
          >
            {qty}
          </span>

          <button
            onClick={() => handleClick("+")}
            className="btn btn-outline-secondary"
            style={{
              borderRadius: "12px",
              padding: "0.3rem 0.6rem",
              margin: "0 0.5rem",
              border: "1px solid #ccc",
              backgroundColor: "transparent",
              color: "#333",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FiPlus size={20} />
          </button>
        </div>
      </div>
      <div>
        <button
          className="btn btn-primary mt-2 position-relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={handleAddToCart}
          style={{ width: "100%" }}
        >
          {hovered ? (
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
    </>
  );
};

export default ItemCount;
