import { useCart } from "../context/CartContext"; // Importa el hook useCart

const Cart = () => {
  const { cart, removeItem, clearCart } = useCart(); // Accede a los elementos del carrito

  if (cart.length === 0) {
    return <p>El carrito está vacío.</p>;
  }

  return (
    <div>
      <h2>Tu carrito</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <p>{product.title}</p>
            <p>Precio: ${product.price}</p>
            <p>Cantidad: {product.quantity}</p>
            <button onClick={() => removeItem(product.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
