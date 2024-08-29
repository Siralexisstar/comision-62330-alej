import React, { useEffect, useState } from "react";
import ProductList from "../ProductList/ProductList";
import ProductFilter from "../Filters/ProductFilter";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from "../../components/firebase/dbConnection";
import { collection, doc, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [order, setOrder] = useState("default");
  const [viewMode, setViewMode] = useState("grid");
  const [perRow, setPerRow] = useState(4);
  const [error, setError] = useState(null);
  const [filterVisible, setFiltersVisible] = useState(false);

  useEffect(() => {
    console.log("Category prop received:", category); 
    setLoading(true);
    const fetchProducts = async () => {

      try {
        //productsCollections tiene todos los productos de la base de datos
        const productsCollection = collection(db, "products");

        //Construimos la consulta
        let q;
        if (category) {
          q = query(productsCollection, where("category", "array-contains", category));
          console.log("Firebase query with category:", q);
        } else {
          q = query(productsCollection); //Todos los productos
          console.log("Firebase query without category:", q);

        }

        const querysnapshot = await getDocs(q);
        const productList = querysnapshot.docs.map((doc) => ({
          //Generamos un array de objetos de los productos
          id: doc.id,
          ...doc.data(), //del documento obtené la data
        }));

        let sortedProducts = [...productList];

        //Ordenar productos
        if (order === "price-desc") {
          sortedProducts.sort((a, b) => b.price - a.price);
        } else if (order === "price-asc") {
          sortedProducts.sort((a, b) => a.price - b.price);
        } else if (order === "alpha-asc") {
          sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (order === "alpha-desc") {
          sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        }

        setProducts(sortedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, order, itemsPerPage, perRow]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto">
      <div className="d-flex justify-content-end mb-4">
        <a
          href="#!"
          onClick={() => setFiltersVisible(!filterVisible)}
          className="nav-item"
          style={{ cursor: "pointer" }}
        >
          {filterVisible ? "Filtrar" : "Filtrar"}
        </a>
      </div>

      {filterVisible && (
        <div className="d-flex justify-content-end">
          <ProductFilter
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            order={order}
            setOrder={setOrder}
            viewMode={viewMode}
            setViewMode={setViewMode}
            perRow={perRow}
            setPerRow={setPerRow}
          />
        </div>
      )}
      <ProductList
        products={products.slice(0, itemsPerPage)}
        viewMode={viewMode}
        perRow={perRow}
      />
    </div>
  );
};

export default ItemListContainer;
