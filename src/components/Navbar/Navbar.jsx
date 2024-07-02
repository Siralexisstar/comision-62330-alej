//debemos crear una funcion
import Navitem from "../Navitem/Navitem";
function Navbar() {
  return (
    <>
      <ul>
        <Navitem href = "https://www.google.com" text = "Google Home"/>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </>
  );
}

export default Navbar;
