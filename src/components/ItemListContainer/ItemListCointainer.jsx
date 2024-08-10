import React, { useEffect, useState } from "react";
import ProductList from "../ProductList/ProductList";
import ProductFilter from "../Filters/ProductFilter";
import { getProducts } from "../utils/fetchData";
import "bootstrap/dist/css/bootstrap.min.css";

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
    const fetchProducts = async () => {
      try {
        const productList = await getProducts(category);
        let sortedProducts = [...productList];

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
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, order, itemsPerPage, perRow]);

  if (loading) {
    return <p>Cargando...</p>;
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
          className="text-decoration-underline fw-bold"
          style={{ cursor: "pointer" }}
        >
          {filterVisible ? "Ocultar filtros" : "Mostrar filtros"}
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
