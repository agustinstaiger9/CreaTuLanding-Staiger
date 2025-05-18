import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles.css";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, getTotalPrice } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Tu carrito</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cartItems.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
              borderBottom: "1px solid #ccc",
              paddingBottom: "1rem",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h3>{item.title}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio unitario: ${item.price}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                height: "2rem",
                alignSelf: "center",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                padding: "0 1rem",
              }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <h3>Total: ${getTotalPrice()}</h3>

      <div className="cart-buttons" style={{ marginTop: "2rem" }}>
        <button
          onClick={clearCart}
          style={{
            backgroundColor: "#ffc107",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Vaciar carrito
        </button>
        <Link
          to="/checkout"
          style={{
            backgroundColor: "#28a745",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            textDecoration: "none",
            textAlign: "center",
            marginTop: "0.5rem",
          }}
        >
          Finalizar compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
