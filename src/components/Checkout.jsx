import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("efectivo");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    const order = {
      buyer: { name, email, paymentMethod },
      items: cartItems.map(({ id, title, price, quantity }) => ({
        id,
        title,
        price,
        quantity,
      })),
      total: getTotalPrice(),
      date: new Date(),
    };

    try {
      const orderRef = await addDoc(collection(db, "orders"), order);

      window.localStorage.setItem("orderId", orderRef.id);
      window.localStorage.setItem("orderTotal", order.total.toString());

      clearCart();

      navigate("/confirmation");
    } catch (error) {
      console.error("Error al crear la orden:", error);
      alert("Error al finalizar la compra");
    }
  };

  return (
    <div className="checkout-container">
      <form onSubmit={handleSubmit} className="checkout-form">
        <h2 className="checkout-title">Último paso para finalizar tu pedido</h2>

        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="checkout-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="checkout-input"
        />

        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
          className="checkout-select"
        >
          <option value="efectivo">Efectivo</option>
          <option value="transferencia">Transferencia</option>
          <option value="tarjeta">Tarjeta</option>
        </select>

        <button type="submit" className="checkout-button">
          Finalizar compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;
