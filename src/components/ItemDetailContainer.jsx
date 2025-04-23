import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false); // <- Nuevo estado

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error al cargar el producto:", error));
  }, [id]);

  const handleAddToCart = (quantity) => {
    addToCart(product, quantity);
    setAddedToCart(true); // Oculta el contador después de agregar
  };

  if (!product) {
    return <p>Cargando detalles del producto...</p>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "100%",
          maxWidth: "400px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <p><strong>Precio:</strong> ${product.price}</p>
      <p>{product.description}</p>

      {!addedToCart ? (
        <ItemCount
          stock={product.stock}
          initial={1}
          onAdd={handleAddToCart}
        />
      ) : (
        <p style={{ marginTop: "1rem", color: "green" }}>
          Producto agregado al carrito ✔️
        </p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
