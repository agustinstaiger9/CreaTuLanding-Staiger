import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { getCartCount } = useCart();

  return (
    <nav className="navbar" style={{ backgroundColor: "#333", padding: "10px" }}>
      <ul
        className="navbar-list"
        style={{
          listStyle: "none",
          display: "flex",
          gap: "20px",
          margin: 0,
          padding: 0,
          alignItems: "center",
        }}
      >
        <li className="navbar-item">
          <Link
            to="/"
            className="navbar-link"
            style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
          >
            Inicio
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/category/smartphones"
            className="navbar-link"
            style={{ color: "white", textDecoration: "none" }}
          >
            Smartphones
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/category/laptops"
            className="navbar-link"
            style={{ color: "white", textDecoration: "none" }}
          >
            Laptops
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/cart"
            className="navbar-link cart-icon"
            style={{ position: "relative", color: "white", textDecoration: "none" }}
          >
            <i className="fas fa-shopping-cart" style={{ fontSize: "18px" }}></i>
            {getCartCount() > 0 && (
              <span
                className="cart-bubble"
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-12px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {getCartCount()}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
