import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const itemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-widget" aria-label="Carrito de compras">
      <FaShoppingCart className="cart-icon" aria-hidden="true" />
      {itemsInCart > 0 && (
        <div className="cart-bubble" aria-live="polite" aria-atomic="true">
          {itemsInCart}
        </div>
      )}
    </div>
  );
};

export default CartWidget;
