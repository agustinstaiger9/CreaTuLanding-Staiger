import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <div className="card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="card-img-top"
      />
      <div className="card-body">
        <h5>{product.title}</h5>
        <p>{product.description}</p>
        <button className="btn btn-success" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
        <Link to={`/item/${product.id}`} className="btn btn-primary" style={{ marginLeft: "10px" }}>
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
