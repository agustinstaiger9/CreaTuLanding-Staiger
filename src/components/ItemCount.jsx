import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd, quantity, setQuantity }) => {
  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1); // Aumenta la cantidad
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Disminuye la cantidad
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={decrement} style={{ marginRight: "10px" }}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={increment} style={{ marginLeft: "10px" }}>
          +
        </button>
      </div>
      <button
        onClick={() => onAdd(quantity)} // Pasa la cantidad seleccionada al carrito
        style={{
          padding: "8px 16px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
