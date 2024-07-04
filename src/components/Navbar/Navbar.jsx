//debemos crear una funcion
import Navitem from "../Navitem/Navitem";
import { categorias, title } from "../../components/mock/MockData";

const Navbar = ({ categorias, title }) => {
  console.log(categorias);
  return (
    <>
      <div>
        <a href="#">{categorias[0]} </a>
        <a href="#">{categorias[1]} </a>
        <a href="#">{categorias[2]} </a>
      </div>
      <div>
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default Navbar;
