import { useContext } from "react";
import { CartContext } from "../context/cartcontext"; // Importamos el contexto

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext); // Usamos el contexto para acceder al carrito

  if (cart.length === 0) {
    return <p>El carrito está vacío.</p>;
  }

  return (
    <div>
      <h2>Tu carrito</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} style={{ width: "50px", height: "50px", objectFit: "cover" }} />
            <p>{product.title}</p>
            <p>Precio: ${product.price}</p>
            <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
