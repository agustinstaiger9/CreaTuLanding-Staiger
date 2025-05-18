import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setProduct(docSnap.data());
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
    setAddedToCart(true);
  };

  if (!product) {
    return <p>Cargando detalles del producto...</p>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{product.title}</h2>
      <img
        src={product.image || "https://via.placeholder.com/200x200?text=Imagen"}
        alt={product.title}
        style={{
          width: "100%",
          maxWidth: "400px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <p><strong>Precio:</strong> ${product.price}</p>
      <p>{product.description}</p> {}

      {!addedToCart ? (
        <ItemCount
          stock={product.stock}
          initial={1}
          onAdd={handleAddToCart}
          quantity={quantity}
          setQuantity={setQuantity}
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
