import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
        setLoading(false);
      });
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
            <img
              src={product.images[0]} // <-- Usamos la primera imagen del array
              alt={product.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h3>{product.title}</h3>
            <p>
              <strong>Precio:</strong> ${product.price}
            </p>
            <Link to={`/item/${product.id}`}>Ver detalles</Link>
            <br />
            <button
              onClick={() => addToCart(product)}
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
