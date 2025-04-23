import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const { cart, clearCart, getTotalPrice } = useCart();
  const navigate = useNavigate();

  // Función para manejar los cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.name || !userData.email || !userData.address) {
      alert("Por favor completa todos los campos.");
      return;
    }


    // Limpiar el carrito después de la compra
    clearCart();
    alert("Gracias por tu compra!");
    navigate("/"); // Redirigir al inicio (puedes cambiarlo según sea necesario)
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Formulario de Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Correo electrónico:
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Dirección:
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <h3>Total: ${getTotalPrice()}</h3>
        </div>
        <div>
          <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px" }}>
            Confirmar compra
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
