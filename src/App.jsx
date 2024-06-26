import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Navitem from "./components/Navitem/Navitem";

function App() {
  //función que solo devuelve un h1

  const title = "Primera aplicacion React";
  const subTitle = "Texto subtituloº";

  //accediendo al valor de la variables Jvs
  //si devuevlo mas de un elemento se tiene que hacer con div
  return (
    //esto me encierra todo en un elemento sin ponerle un elemento extra (un div)
    <>
      <Navbar />
      <div>
        <h1>Titulo : {title}</h1>
        <h2>Subtitulo : {subTitle}</h2>
      </div>
    </>
  );
}

export default App;
