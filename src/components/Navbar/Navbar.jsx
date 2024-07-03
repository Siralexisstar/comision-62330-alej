//debemos crear una funcion
import Navitem from "../Navitem/Navitem";
import { categorias } from "../../components/mock/MockData";

const Navbar = (props) => {
  const categorias = props.categorias;
  console.log(categorias);
  return (
    <>
      <div>
        {/* vamos a subir todo un nivel */}
        <a href="#">{categorias[0]} </a>
        <a href="#">{categorias[1]} </a>
        <a href="#">{categorias[2]} </a>
        {
          // <Navitem name={categorias[0]} />
          // <Navitem name={categorias[1]} />
          // <Navitem name={categorias[2]} />
        }
      </div>
    </>
  );
};

export default Navbar;
