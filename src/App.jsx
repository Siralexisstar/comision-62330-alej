/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
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
        <ButtonLink
          href={"https://www.youtube.com/watch?v=Lq9prEqKr7k"}
          css={buttonStyle}
        >
          Hi voyager
        </ButtonLink>
        <ButtonLink
          href={"https://www.youtube.com/watch?v=OgLQ_D9CHXE"}
          css={buttonStyle}
        >
          Hello
        </ButtonLink>
      </div>
    </>
  );
}

export default App;
