import { useCartContext } from "../context/CartContext";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const Cart = () => {
  const { cart, total, clearCart } = useCartContext();

  const handleOnClear = () => {
    console.log("Se limpio el carrito");
    clearCart();
  };

  return (
    <Container className="my-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <h2 className="text-center mb-4">Tu Carrito</h2>
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
            <Col xs={12} className="text-center mt-4">
              <h3>Total del carrito: {total}€</h3>
              <Button variant="primary" size="lg" className="mt-3">
                Proceder al pago
              </Button>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <h3>Total del carrito: {total}€</h3>
            <Button
              variant="danger"
              size="lg"
              className="mt-3"
              onClick={handleOnClear}
            >
              Limpiar Carrito
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
