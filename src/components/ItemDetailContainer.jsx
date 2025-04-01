import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
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
        </div>
    );
};

export default ItemDetailContainer;
