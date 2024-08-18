/** @jsxImportSource @emotion/react */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AromaticCandles,
  NonAromaticCandles,
  Contacto,
} from "./components/CandlesCategories";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListCointainer";
import { title, categorias } from "./components/mock/MockData";
import CartContextProvider from "./components/context/CartContext";

function App() {
  return (
    <CartContextProvider> 
      <Router>
        <Navbar categorias={categorias} title={title} />
        <div>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/aromatic-candles" element={<AromaticCandles />} />
            <Route
              path="/non-aromatic-candles"
              element={<NonAromaticCandles />}
            />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </Router>
    </CartContextProvider>
  );
}

export default App;
