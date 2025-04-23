import { createContext, useContext, useState, useEffect } from "react";

// Crear y exportar el contexto
export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un ítem al carrito
  const addItem = (item, quantity) => {
    const existingItem = cartItems.find((prod) => prod.id === item.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity }]);
    }
  };

  // Función para eliminar un ítem del carrito
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Función para obtener el total de productos en el carrito
  const getTotalItems = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, removeItem, clearCart, getTotalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};