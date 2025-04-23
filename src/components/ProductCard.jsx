import React from "react";
import { useCart } from "../context/CartContext"; // Importa el hook useCart

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Accede a la función addToCart desde el CartContext

  // Esta función se llama cuando el usuario hace clic en "Agregar al carrito"
  const handleAddToCart = () => {
    addToCart(product, 1); // 1 es la cantidad predeterminada, por defecto agregamos 1 producto
  };

  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} className="card-img-top" />
      <div className="card-body">
        <h5>{product.title}</h5>
        <p>{product.description}</p>
        <button className="btn btn-success" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
        <a href={`/item/${product.id}`} className="btn btn-primary">
          Ver detalles
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
