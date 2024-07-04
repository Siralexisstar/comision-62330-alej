/** @jsxImportSource @emotion/react */
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ButtonLink from "./components/Button/ButtonLink";
import { title, categorias } from "./components/mock/MockData";

function App() {
  const subTitle = "Texto subtitulo";

  return (
    <>
      <Navbar title = {title} categorias={categorias}/>
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
