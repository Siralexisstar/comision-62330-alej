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
      <Navbar categorias={categorias} />
      <ItemListContainer title={title} />
      <div>
        <ButtonLink href="https://www.youtube.com/watch?v=Lq9prEqKr7k">
          Hi voyager
        </ButtonLink>
        <ButtonLink href="https://www.youtube.com/watch?v=OgLQ_D9CHXE">
          Hello
        </ButtonLink>
      </div>
    </>
  );
}

export default App;
