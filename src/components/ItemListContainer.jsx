import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({});
  const { addToCart } = useCart();
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const productsRef = collection(db, "productos");
        let q;

        const normalizedCategoryId = categoryId?.toLowerCase().trim();

        console.log("Filtrando por categoría:", normalizedCategoryId);

        if (normalizedCategoryId) {
          
          q = query(productsRef, where("category", "==", normalizedCategoryId));
        } else {
          q = productsRef;
        }

        const querySnapshot = await getDocs(q);
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(items);

        
        const initialQuantities = {};
        items.forEach((item) => {
          initialQuantities[item.id] = 1;
        });
        setQuantities(initialQuantities);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);
  const increment = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const decrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] - 1),
    }));
  };

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
              src={
                product.image ||
                "https://via.placeholder.com/200x200?text=Imagen"
              }
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

            {}
            <div style={{ margin: "10px 0" }}>
              <button onClick={() => decrement(product.id)}>-</button>
              <span style={{ margin: "0 10px" }}>{quantities[product.id]}</span>
              <button onClick={() => increment(product.id)}>+</button>
            </div>

            <Link to={`/item/${product.id}`}>Ver detalles</Link>
            <br />
            <button
              onClick={() => addToCart(product, quantities[product.id])}
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
