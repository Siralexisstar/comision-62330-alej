import { useCartContext } from "../context/CartContext";
const CardWidget = () => {
  // le pasamos el qty que es la cantidad que se ha seleccionado en el evento
  //de esta manera usando el contexto podemos pasar la cantidad de items al carrito
  const { qtyItems } = useCartContext();

  return (
    <>
      <div>
        <i>{qtyItems}</i>
        <i class="bi bi-bag"></i>
      </div>
    </>
  );
};
export default CardWidget;
