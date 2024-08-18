import { useState, useEffect, createContext, useContext } from "react";

const cartContext = createContext();

export const { Provider } = cartContext; //Esto nos va a dar un proveedor

export const useCartContext = () => {
  return useContext(cartContext);
};

const CartContextProvider = ({ children }) => {
  //Añadimos un estado para los items
  const [qtyItems, setQtyItems] = useState(0);
  //cantidad total carrito
  const [cart, setCart] = useState([]);
  //cantidad total de plata.
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart"));
    const localTotal = JSON.parse(localStorage.getItem("total"));
    const localQtyItems = JSON.parse(localStorage.getItem("qtyItems"));

    //Si hay algo en el localStorage, lo cogemos
    if (localCart && localTotal && localQtyItems) {
      setCart(localCart);
      setTotal(localTotal);
      setQtyItems(localQtyItems);
    }
  }, []);

  useEffect(() => {
    // Cada vez que se actualicen `cart`, `total`, o `qtyItems`, almacenamos los nuevos valores en `localStorage`
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", JSON.stringify(total));
    localStorage.setItem("qtyItems", JSON.stringify(qtyItems));
  }, [cart, total, qtyItems]);

  const isInCart = (id) => {
    //Comprobamos si el elemento ya existe en el carrito
    return cart.find((elem) => elem.id === id);
  };

  const addToCart = (item, qty) => {
    setQtyItems(qtyItems + qty);
    setTotal(total + item.price * qty);
    let newCart = [];

    //Este map me va generando un nuevo carrito
    //Si el item ya existe en el carrito, le aumentamos la cantidad,
    //es decir si hay 1 vela X y se agrega 2, la cantidad de vela X va a ser 3
    if (isInCart(item.id)) {
      newCart = cart.map((elem) => {
        if (elem.id == item.id) {
          return { ...elem, qty: elem.qty + qty };
        } else {
          return elem;
        }
      });
    } else {
      newCart = [...cart, { ...item, qty }];
    }

    console.log(newCart);
    setCart(newCart);
  };

  const removeItem = (item, qty) => {
    let newCart;
  
    if (isInCart(item.id)) {
      newCart = cart
        .map((elem) => {
          if (elem.id === item.id) {
            const newQty = elem.qty - qty;
            return newQty > 0 ? { ...elem, qty: newQty } : null;
          } else {
            return elem;
          }
        })
        .filter(Boolean); // Elimina elementos con cantidad 0
  
      setCart(newCart);
  
      const adjustedQty = qty > item.qty ? item.qty : qty;
  
      setQtyItems(qtyItems - adjustedQty);
      setTotal(total - item.price * adjustedQty);
    }
  };
  
  //Exponemos los componentes
  const contextValue = {
    qtyItems: qtyItems,
    addToCart,
    removeItem,
  };

  /**Nos devuelve el provider que es el contexto general*/
  return <Provider value={contextValue}>{children}</Provider>;
};

export default CartContextProvider;
