import { useCartContext } from "../context/CartContext";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../components/firebase/dbConnection";

const Cart = () => {
  const { cart, total, clearCart } = useCartContext();
  const [formData, setFormData] = useState({ name: "", email: "", tel: "" });

  const handleOnClear = () => {
    console.log("Se limpio el carrito");
    clearCart();
  };

  /** Esta funcion se puede hacer generica para cualquier input */
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function handleSaveCart(e) {
    //Que hago cuando finalizo la compra
    console.log("Saving in the database");
    console.log("formData", formData);
    console.log("cart", cart);

    const orderCollection = collection(db, "orders");
    const newOrder = {
      buyer: formData,
      items: cart,
      date: new Date(),
      total: total,
    };

    //Añadimos la orden a la bbdd de firebase
    addDoc(orderCollection, newOrder)
      .then((doc) => {
        alert(`Numero identificador del pedido: ${doc.id}`);
        //Limpiamos el carrito
        clearCart();
        //Limpiamos el formulario
        setFormData({ name: "", email: "", tel: "" });
      })
      .catch((error) => {
        alert(`Error al añadir el pedido: ${error}`); 
      });
  }

  return (
    <Container className="my-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <h2 className="text-center mb-4">Carrito : </h2>
      {cart.length === 0 ? (
        <p className="text-center">Tu carrito está vacío</p>
      ) : (
        <>
          <Row>
            {cart.map((item) => (
              <Col md={6} lg={4} className="mb-4" key={item.id}>
                <div className="text-center p-3 border rounded shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.name}
                    thumbnail
                    className="mb-3"
                  />
                  <h4 className="font-weight-bold">{item.name}</h4>
                  <p>Cantidad: {item.qty}</p>
                  <p>Precio: {item.price}€</p>
                  <p>Total: {item.qty * item.price}€</p>
                </div>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Col xs={12} className="text-center mt-4">
              <Button
                variant="danger"
                size="lg"
                className="mt-3"
                onClick={handleOnClear}
              >
                Limpiar Carrito
              </Button>
            </Col>
            {/** Esto es para el formulario del carrito */}
            <div>
              <input
                className="text-center"
                type="text"
                name="name"
                id="name"
                placeholder="Ingrese su nombre"
                onChange={(e) => handleOnChange(e)}
              ></input>
              <input
                type="number"
                name="tel"
                id="tel"
                placeholder="Ingresa tu telefono"
                onChange={(e) => handleOnChange(e)}
              ></input>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ingresa tu email"
                onChange={(e) => handleOnChange(e)}
              ></input>
            </div>
            <Col xs={12} className="text-center mt-4">
              <Button
                onClick={() => {
                  handleSaveCart();
                }}
                variant="primary"
                size="lg"
                className="mt-3"
              >
                Proceder al pago
              </Button>
            </Col>
            <h3>Total del carrito: {total}€</h3>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
