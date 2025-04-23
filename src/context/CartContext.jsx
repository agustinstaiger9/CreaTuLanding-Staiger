import React, { createContext, useState, useContext } from "react";

// Crear el contexto del carrito
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Estado para almacenar los productos en el carrito

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Añade el producto al carrito
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el carrito
export const useCart = () => {
  return useContext(CartContext);
};
