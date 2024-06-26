//debemos crear una funcion
import Navitem from "../Navitem/Navitem";
function Navbar() {
  return (
    <>
      <ul>
        <Navitem />
        <li>About</li>
        <li>Contact</li>
      </ul>
    </>
  );
}

export default Navbar;
