/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Navbar from './components/Navbar/Navbar';

const buttonStyle = css`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

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
        <button css={buttonStyle}>Click me</button>
      </div>
    </>
  );
}

export default App;
