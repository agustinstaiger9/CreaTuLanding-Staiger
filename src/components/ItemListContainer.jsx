import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; // Usamos useParams para obtener la categoría
import { useCart } from "../context/CartContext";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const { categoryId } = useParams(); // Obtenemos el parámetro categoryId de la URL

  useEffect(() => {
    setLoading(true); // Reestablecemos el estado de carga
    let url = "https://dummyjson.com/products"; // URL base de productos

    // Si hay un categoryId en la URL, filtramos los productos por esa categoría
    if (categoryId) {
      url = `https://dummyjson.com/products/category/${categoryId}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products); // Asignamos los productos a la variable de estado
        setLoading(false); // Terminamos de cargar
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
        setLoading(false); // En caso de error, también terminamos de cargar
      });
  }, [categoryId]); // Este useEffect se ejecuta cuando cambia el categoryId

  if (loading) {
    return <p style={{ textAlign: "center" }}>Cargando productos...</p>; // Mensaje mientras carga
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{categoryId ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1) : "Productos disponibles"}</h2>
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
              src={product.images[0]} // Usamos la primera imagen del array de imágenes
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
              onClick={() => addToCart(product, 1)} // Aquí pasamos la cantidad de 1
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
