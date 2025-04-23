import { useContext } from "react";
import { CartContext } from "../context/cartcontext"; // Importamos el contexto
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

function CartWidget() {
  // Accedemos a los datos del carrito desde el contexto
  const { cart } = useContext(CartContext);
  
  // Calculamos el total de items en el carrito
  const itemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      {itemsInCart > 0 && <div className="cart-bubble">{itemsInCart}</div>}
    </div>
  );
}

export default CartWidget;
