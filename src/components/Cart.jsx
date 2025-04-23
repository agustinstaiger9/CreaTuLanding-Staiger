import { useContext } from "react";
import { CartContext } from "../context/CartContext"; // Asegúrate de que la ruta esté correcta

const Cart = () => {
  const { cartItems, removeItem, clearCart } = useContext(CartContext); // Usamos cartItems en lugar de cart

  if (cartItems.length === 0) {
    return <p>El carrito está vacío.</p>;
  }

  return (
    <div>
      <h2>Tu carrito</h2>
      <ul>
        {cartItems.map((product) => ( // Cambié cart por cartItems
          <li key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <p>{product.title}</p>
            <p>Precio: ${product.price}</p>
            <button onClick={() => removeItem(product.id)}>Eliminar</button> {/* Cambié removeFromCart por removeItem */}
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
