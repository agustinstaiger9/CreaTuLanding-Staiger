import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item, quantity) => {
    const existingItem = cartItems.find(prod => prod.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(prod =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity }]);
    }
  };

  const getTotalItems = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};
