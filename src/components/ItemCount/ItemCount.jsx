import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  // hay que hacer hooks para cambiar el estado
  const [qty, setqty] = useState(initial);
  const [error, setError] = useState("");

  const handleClick = (op) => {
    op == "+" ? handleClickMas() : handleClickMenos();
  };

  const handleClickMenos = () => {
    if (qty > 0) {
      setqty(qty - 1);
      console.log(qty);
    } else {
      alert("No se puede reducir la cantidad");
    }
  };

  const handleClickMas = () => {
    if (qty == stock) {
      alert("No hay stock suficiente");
    }
    setqty(qty + 1);
    console.log(qty);
  };

  return (
    <div>
      {/* necessary to invoke handleClick */}
      <button onClick={() => handleClick("-")}>-</button>
      <span>{qty}</span>
      <button onClick={() => handleClick("+")}>+</button>
    </div>
  );
};
export default ItemCount;
