import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Asegurate que el archivo se llame así o ajustá el path

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, "productos");
        const querySnapshot = await getDocs(productsRef);
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(items);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Cargando productos...</p>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Productos disponibles</h2>
      <div
        className="product-list"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              margin: "10px",
              width: "200px",
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Podés poner una imagen por defecto si aún no cargaste imagenes en Firestore */}
            <img
              src={product.image || "https://via.placeholder.com/200x200?text=Imagen"} 
              alt={product.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h3>{product.title}</h3>
            <p><strong>Precio:</strong> ${product.price}</p>
            <Link to={`/item/${product.id}`}>Ver detalles</Link>
            <br />
            <button
              onClick={() => addToCart(product, 1)}
              style={{
                marginTop: "10px",
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
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
