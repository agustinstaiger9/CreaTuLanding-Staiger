import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        let url = "https://dummyjson.com/products?limit=10";
        if (categoryId) {
            url = `https://dummyjson.com/products/category/${categoryId}`;
        }
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error al cargar los productos:", error);
                setLoading(false);
            });
    }, [categoryId]);

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", padding: "20px" }}>
            {products.map((product) => (
                <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "10px", textAlign: "center" }}>
                    <h3>{product.title}</h3>
                    <img src={product.thumbnail} alt={product.title} style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "5px" }} />
                    <p><strong>Precio:</strong> ${product.price}</p>
                    <Link to={`/product/${product.id}`} style={{ display: "block", marginTop: "10px", textDecoration: "none", color: "blue" }}>
                        Ver detalles
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ItemListContainer;
