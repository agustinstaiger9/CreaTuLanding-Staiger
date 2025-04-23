import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Usamos Link para redirigir a la página de detalle

const ItemListContainer = () => {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true); // Estado para gestionar la carga

  useEffect(() => {
    setLoading(true);
    // Realiza la solicitud a la API para obtener todos los productos
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products); // Almacena los productos en el estado
        setLoading(false); // Cambia el estado de carga a falso
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
        setLoading(false);
      });
  }, []); // Solo se ejecuta una vez cuando se carga el componente

  if (loading) {
    return <p>Cargando productos...</p>; // Muestra mensaje mientras carga
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
          gap: "20px", // Añadí un espacio entre los productos
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
              src={product.thumbnail}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
