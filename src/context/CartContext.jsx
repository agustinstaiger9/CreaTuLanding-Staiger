import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar o actualizar productos en el carrito
  const addToCart = (product, quantity) => {
    const validQuantity = parseInt(quantity, 10);

    if (isNaN(validQuantity) || validQuantity <= 0) {
      console.error("Cantidad inválida:", quantity);
      return;
    }

    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);

      // Si el producto ya existe en el carrito, actualiza la cantidad
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        // Si ya existe, solo actualizamos la cantidad correctamente
        const existingQuantity = updatedCart[existingProductIndex].quantity || 0;
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: existingQuantity + validQuantity,
        };
        return updatedCart;
      } else {
        // Si el producto no existe en el carrito, lo agrega con la cantidad
        return [...prevCart, { ...product, quantity: validQuantity }];
      }
    });
  };

  // Eliminar un producto del carrito
  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Obtener el total de productos en el carrito
  const getCartCount = () => cart.reduce((total, item) => total + item.quantity, 0);

  // Obtener el total de precio del carrito
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, clearCart, getCartCount, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
