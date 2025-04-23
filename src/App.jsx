import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart"; // Importamos el componente Cart
import { CartProvider } from "./context/CartContext"; // Importamos el CartProvider
import './styles.css';  // Asegúrate de que la ruta al archivo CSS sea correcta


function App() {
  return (
    // Envolvemos toda la aplicación con CartProvider para proporcionar el contexto
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} /> {/* Ruta actualizada */}
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
