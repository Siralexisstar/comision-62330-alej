/** @jsxImportSource @emotion/react */
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ButtonLink from "./components/Button/ButtonLink";
import ItemListContainer from "./components/ItemListContainer/ItemListCointainer";
import ItemCount from "./components/ItemCount/ItemCount";
import { title, categorias } from "./components/mock/MockData";

function App() {
  const subTitle = "Texto subtitulo";

  return (
    <>
      <Navbar categorias={categorias} title={title} />
      <ItemListContainer />
      <div>
        <ButtonLink href="https://www.youtube.com/watch?v=MjLS5Zri7IM">
          Candle Making video 1
        </ButtonLink>
        <ButtonLink href="https://www.youtube.com/watch?v=SEiLNPbSBbc">
          Candle Making video 2
        </ButtonLink>
      </div>
    </>
  );
}

export default App;
