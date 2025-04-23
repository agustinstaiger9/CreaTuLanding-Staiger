import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar o actualizar productos en el carrito
  const addToCart = (product, quantity) => {
    // Asegurarse de que quantity sea un número válido y mayor que 0
    const validQuantity = parseInt(quantity, 10);
    if (isNaN(validQuantity) || validQuantity <= 0) {
      console.error("Cantidad inválida:", quantity);
      return; // No agregamos el producto si la cantidad no es válida
    }

    setCart((prevCart) => {
      // Verificar si el producto ya está en el carrito
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);

      if (existingProductIndex !== -1) {
        // Si el producto ya está, actualizamos la cantidad
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += validQuantity; // sumamos la cantidad
        return updatedCart;
      } else {
        // Si el producto no está, lo agregamos con la cantidad seleccionada
        return [...prevCart, { ...product, quantity: validQuantity }];
      }
    });
  };

  // Obtener el total de productos en el carrito
  const getCartCount = () => cart.reduce((total, item) => total + item.quantity, 0); // Sumar todas las cantidades

  return (
    <CartContext.Provider value={{ cart, addToCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
