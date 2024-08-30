import { useCartContext } from "../context/CartContext";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useState } from "react";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../components/firebase/dbConnection";

const Cart = () => {
  const { cart, total, clearCart } = useCartContext();
  const [formData, setFormData] = useState({ name: "", email: "", tel: "" });

  const handleOnClear = () => {
    console.log("Se limpió el carrito");
    clearCart();
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateStock = async () => {
    const updatePromises = cart.map(async (item) => {
      const productRef = doc(db, "products", item.id); // referencia al documento del producto
      const newStock = item.stock - item.qty; // Calculamos el nuevo stock

      if (newStock < 0) {
        throw new Error(
          `No hay stock suficiente de ${item.name}. Stock disponible: ${item.stock}.`
        );
      }

      await updateDoc(productRef, { stock: newStock }); // Actualizamos el stock en la base de datos
    });

    await Promise.all(updatePromises); // Esperamos a que todas las actualizaciones se completen
  };

  const handleSaveCart = async () => {
    // Verificamos que el formulario esté completo
    if (!formData.name || !formData.email || !formData.tel) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Verificamos que haya suficiente stock disponible para cada producto
    for (let item of cart) {
      if (item.qty > item.stock) {
        alert(`No hay stock suficiente de ${item.name}`);
        return;
      }
    }

    const orderCollection = collection(db, "orders");
    const newOrder = {
      buyer: formData,
      items: cart,
      date: new Date(),
      total: total,
    };

    try {
      // Añadimos la orden a la base de datos de Firebase
      const docRef = await addDoc(orderCollection, newOrder);
      alert(`Número identificador del pedido: ${docRef.id}`);

      // Actualizamos el stock
      await updateStock();

      // Limpiamos el carrito y el formulario
      clearCart();
      setFormData({ name: "", email: "", tel: "" });
    } catch (error) {
      console.error("Error al procesar el pedido:", error);
      alert(`Error al añadir el pedido: ${error}`);
    }
  };

  return (
    <Container className="my-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <h2 className="text-center mb-4">Carrito :</h2>
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
            <div className="mt-3">
              <input
                className="form-control mb-2 text-center"
                type="text"
                name="name"
                id="name"
                placeholder="Ingrese su nombre"
                value={formData.name}
                onChange={handleOnChange}
              />
              <input
                className="form-control mb-2 text-center"
                type="tel"
                name="tel"
                id="tel"
                placeholder="Ingresa tu teléfono"
                value={formData.tel}
                onChange={handleOnChange}
              />
              <input
                className="form-control mb-2 text-center"
                type="email"
                name="email"
                id="email"
                placeholder="Ingresa tu email"
                value={formData.email}
                onChange={handleOnChange}
              />
            </div>
            <Col xs={12} className="text-center mt-4">
              <Button
                onClick={handleSaveCart}
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
