/** @jsxImportSource @emotion/react */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AromaticCandles from "./components/CandlesCategories/AromaticCandles";
import NonAromaticCandles from "./components/CandlesCategories/NonAromaticCandles";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListCointainer";
import { title, categorias } from "./components/mock/MockData";

function App() {
  return (
    <Router>
      <Navbar categorias={categorias} title={title} />
      <div>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/aromatic-candles" element={<AromaticCandles />} />
          <Route path="/non-aromatic-candles" element={<NonAromaticCandles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
