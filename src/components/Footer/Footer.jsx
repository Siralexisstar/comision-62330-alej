import { products } from "../../components/mock/MockData.js";
import { db } from "../../components/firebase/dbConnection";
import { collection, addDoc } from "firebase/firestore";

const Footer = () => {
  //Esto lo que hace es agarrar los productos y subirlos a la bbdd
  const addProducts = () => {
    const productsCollection = collection(db, "products");

    // Corregido: se usa forEach en lugar de foreach
    products.forEach((p) => {
      addDoc(productsCollection, p)
        .then((doc) => {
          //El id es el id generado automaticamente por firebase
          console.log("Document added with ID:", doc.id);
        })
        .catch((error) => {
          console.error("Error adding document:", error);
        });
    });
  };

  return (
    <footer>
      {/* <button onClick={addProducts}> agregar productos a la bbdd</button> */}
    </footer>
  );
};

export default Footer;
