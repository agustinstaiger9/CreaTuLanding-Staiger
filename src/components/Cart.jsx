import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clearCart } = useCart();

  if (cart.length === 0) {
    return <p style={{ textAlign: "center" }}>El carrito está vacío.</p>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Tu carrito</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cart.map((product) => (
          <li key={product.id} style={{ marginBottom: "20px" }}>
            <img
              src={product.image || "https://via.placeholder.com/50x50?text=Img"}
              alt={product.title}
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <p>{product.title}</p>
            <p>Precio: ${product.price}</p>
            <p>Cantidad: {product.quantity}</p>
            <button
              onClick={() => removeItem(product.id)}
              style={{ marginBottom: "10px" }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={clearCart}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Vaciar carrito
        </button>

        <Link to="/checkout">
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Finalizar compra
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
