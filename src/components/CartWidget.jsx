import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

function CartWidget() {
  const itemsInCart = 3;

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      {itemsInCart > 0 && <div className="cart-bubble">{itemsInCart}</div>}
    </div>
  );
}

export default CartWidget;
