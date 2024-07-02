/** @jsxImportSource @emotion/react */
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ButtonLink from "./components/Button/ButtonLink";

function App() {
  const title = "Primera aplicacion React";
  const subTitle = "Texto subtitulo";

  return (
    <>
      <Navbar />
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
