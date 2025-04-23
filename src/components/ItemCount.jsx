import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <div>
        <button onClick={decrement}>-</button>
        <span>{quantity}</span>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <button
          onClick={() => onAdd(quantity)} // Ahora se pasa la cantidad seleccionada
          disabled={stock === 0}
        >
          Agregar al carrito
        </button>
      </div>
      {stock === 0 && <p>Producto fuera de stock</p>}
    </div>
  );
};

export default ItemCount;
