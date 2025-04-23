import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext"; // Importamos el contexto

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext); // Usamos el contexto para acceder a la función addToCart

  useEffect(() => {
    setLoading(true);
    // Corregimos la interpolación de la URL
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar el producto:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const handleAddToCart = () => {
    addToCart(product); // Llamamos a la función addToCart del contexto para agregar el producto
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{product.title}</h2>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: "300px", height: "auto", borderRadius: "10px" }}
      />
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <button onClick={handleAddToCart}>Agregar al carrito</button> {/* Botón para agregar al carrito */}
    </div>
  );
};

export default ItemDetailContainer;
