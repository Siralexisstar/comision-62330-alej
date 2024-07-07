//debemos crear una funcion
import Navitem from "../Navitem/Navitem";
import { categorias, title } from "../../components/mock/MockData";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = ({ categorias, title }) => {
  console.log(categorias);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {categorias[0]}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {categorias[1]}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {categorias[2]}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div>
        <a href="#">{categorias[0]} </a>
        <a href="#">{categorias[1]} </a>
        <a href="#">{categorias[2]} </a>
      </div> */}
      <div>
        <CartWidget />
      </div>
      <div>
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default Navbar;
