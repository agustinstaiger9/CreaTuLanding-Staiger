import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Hook para manejar el carrito
import ItemCount from "./ItemCount"; // Importamos el componente ItemCount

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null); // Estado para almacenar el producto
  const { id } = useParams(); // Obtiene el id del producto de la URL
  const { addToCart } = useCart(); // Hook para agregar al carrito

  const [quantity, setQuantity] = useState(1); // Estado para manejar la cantidad seleccionada

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error al cargar el producto:", error));
  }, [id]); // Ejecuta nuevamente cuando cambia el id

  if (!product) {
    return <p>Cargando detalles del producto...</p>;
  }

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity }; // Agregar la cantidad seleccionada al producto
    addToCart(productWithQuantity); // Agregar al carrito
  };

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

      {/* Componente ItemCount */}
      <ItemCount
        stock={product.stock} // Pasamos el stock disponible
        initial={1} // Cantidad inicial
        onAdd={(quantity) => addToCart(product, quantity)} // Pasa la cantidad seleccionada al carrito
      />


    </div>
  );
};

export default ItemDetailContainer;
