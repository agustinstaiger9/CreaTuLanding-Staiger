import React from "react";

const ItemCount = ({ stock, quantity, setQuantity, onAdd }) => {
  const increment = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="item-count">
      <div className="counter-controls">
        <button
          onClick={decrement}
          aria-label="Disminuir cantidad"
          disabled={quantity <= 1}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={increment}
          aria-label="Aumentar cantidad"
          disabled={quantity >= stock}
        >
          +
        </button>
      </div>
      <button
        onClick={() => onAdd(quantity)}
        className="add-to-cart-btn"
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
