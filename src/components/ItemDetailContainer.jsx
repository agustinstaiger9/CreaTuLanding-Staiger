import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { doc, getDoc } from "firebase/firestore"; // Asegúrate de tener estos métodos para obtener el documento
import { db } from "../firebase"; // Aquí importamos la base de datos

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false); // Nuevo estado para saber si se ha agregado al carrito

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "productos", id); // Asumiendo que "productos" es la colección en Firestore
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setProduct(docSnap.data()); // Establecemos los datos del producto
        } else {
          console.log("No se encontró el producto");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true); // Establece el estado a "producto agregado"
  };

  if (!product) {
    return <p>Cargando detalles del producto...</p>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{product.title}</h2>
      <img
        src={product.image || "https://via.placeholder.com/200x200?text=Imagen"} // Imagen por defecto
        alt={product.title}
        style={{
          width: "100%",
          maxWidth: "400px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <p><strong>Precio:</strong> ${product.price}</p>
      <p>{product.description}</p> {/* Aquí se muestra la descripción */}

      {!addedToCart ? (
        <ItemCount
          stock={product.stock}
          initial={1}
          onAdd={handleAddToCart} // Aquí pasamos el producto con la cantidad
          quantity={quantity} // Se pasa la cantidad al componente
          setQuantity={setQuantity} // Función para actualizar la cantidad
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
