import { Link } from "react-router-dom";
import "../app.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/category/smartphones">Smartphones</Link>
        </li>
        <li>
          <Link to="/category/laptops">Laptops</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
