import { useContext } from "react";
import { CartContext } from "../context/CartContext"; // Importamos el contexto
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

function CartWidget() {
  // Accedemos a los datos del carrito desde el contexto
  const { cartItems } = useContext(CartContext);  // Usamos cartItems desde el contexto

  // Calculamos el total de items en el carrito
  const itemsInCart = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      {itemsInCart > 0 && <div className="cart-bubble">{itemsInCart}</div>}
    </div>
  );
}

export default CartWidget;
