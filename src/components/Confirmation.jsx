import React from "react";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!window.localStorage.getItem("orderId")) {
      navigate("/");
    }
  }, [navigate]);

  const orderId = window.localStorage.getItem("orderId");
  const orderTotal = window.localStorage.getItem("orderTotal");

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>¡Gracias por tu compra!</h2>
      <p>Tu compra fue exitosa.</p>

      <h3>ID de la orden: <strong>{orderId}</strong></h3>

      <h3>Total de la compra: <strong>${orderTotal || "0"}</strong></h3>

      <button
        onClick={() => {
          window.localStorage.removeItem("orderId");
          window.localStorage.removeItem("orderTotal");
          navigate("/");
        }}
      >
        Volver al inicio
      </button>
    </div>
  );
};

export default Confirmation;
