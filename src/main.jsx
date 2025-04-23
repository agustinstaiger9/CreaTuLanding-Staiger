import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext"; // Importamos el proveedor del carrito

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider> {/* Aquí envolvemos la app con el CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);
