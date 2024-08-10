import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Asegúrate de que Font Awesome esté incluido

const ProductFilter = ({
  itemsPerPage,
  setItemsPerPage,
  order,
  setOrder,
  viewMode,
  setViewMode,
  perRow,
  setPerRow,
}) => {
  return (
    <div className="d-flex justify-content-end align-items-center mb-4">
      <div className="d-flex align-items-center me-3">
        <span className="me-2">Mostrar:</span>
        <select
          className="form-select form-select-sm"
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="36">36</option>
        </select>
      </div>
      <div className="d-flex align-items-center me-3">
        <span className="me-2">Ordenar:</span>
        <select
          className="form-select form-select-sm"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="default">Orden Predeterminado</option>
          <option value="price-desc">Precio: Alto a Bajo</option>
          <option value="price-asc">Precio: Bajo a Alto</option>
          <option value="alpha-asc">Alfabético: A-Z</option>
          <option value="alpha-desc">Alfabético: Z-A</option>
        </select>
      </div>
      <div className="d-flex align-items-center">
        <span className="me-2">Visualización:</span>
        <div className="d-flex">
          <i
            className={`fas fa-th-large fa-lg ${
              perRow === 2 ? "text-primary" : "text-secondary"
            }`}
            onClick={() => setPerRow(2)}
            style={{ cursor: "pointer" }}
            title="2 columnas"
          ></i>
          <i
            className={`fas fa-th fa-lg ms-3 ${
              perRow === 3 ? "text-primary" : "text-secondary"
            }`}
            onClick={() => setPerRow(3)}
            style={{ cursor: "pointer" }}
            title="3 columnas"
          ></i>
          <i
            className={`fas fa-th fa-lg ms-3 ${
              perRow === 4 ? "text-primary" : "text-secondary"
            }`}
            onClick={() => setPerRow(4)}
            style={{ cursor: "pointer" }}
            title="4 columnas"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
