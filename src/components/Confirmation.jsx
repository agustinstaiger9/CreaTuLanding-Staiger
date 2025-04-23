import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const { cart, getTotalPrice } = useCart();
  const navigate = useNavigate();

  // Si no hay productos en el carrito, redirigir al home
  if (cart.length === 0) {
    navigate("/");
    return null;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>¡Gracias por tu compra!</h2>
      <p>Tu compra fue exitosa.</p>

      <h3>Resumen de la compra:</h3>
      <div>
        {cart.map((item) => (
          <div key={item.id} style={{ marginBottom: "10px" }}>
            <h4>{item.title}</h4>
            <p><strong>Cantidad:</strong> {item.quantity}</p>
            <p><strong>Precio por unidad:</strong> ${item.price}</p>
            <p><strong>Total por producto:</strong> ${item.price * item.quantity}</p>
            <hr />
          </div>
        ))}
      </div>

      <h3><strong>Total de la compra: ${getTotalPrice()}</strong></h3>

      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Volver al inicio
      </button>
    </div>
  );
};

export default Confirmation;
