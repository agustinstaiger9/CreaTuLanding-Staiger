import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { getCartCount } = useCart();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Inicio</Link>
        </li>
        <li className="navbar-item">
          <Link to="/category/smartphones" className="navbar-link">Smartphones</Link>
        </li>
        <li className="navbar-item">
          <Link to="/category/laptops" className="navbar-link">Laptops</Link>
        </li>
        <li className="navbar-item">
          <Link to="/cart" className="navbar-link cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-bubble">{getCartCount()}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
