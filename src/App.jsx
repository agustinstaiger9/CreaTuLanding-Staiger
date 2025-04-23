import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/Navbar"; // <-- asegurate que exista

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar /> {/* Asegúrate de que se muestre en todas las páginas */}
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
