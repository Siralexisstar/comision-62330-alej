/** @jsxImportSource @emotion/react */
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ButtonLink from "./components/Button/ButtonLink";
import {categorias} from "./components/mock/MockData";

function App() {
  const title = "Bienvenido al e-commerce de coches de alta gama";
  const subTitle = "Texto subtitulo";

  return (
    <>
      <Navbar categorias={categorias}/>
      <div>
        <h1>Titulo: {title}</h1>
        <h2>Subtitulo: {subTitle}</h2>
      </div>
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
