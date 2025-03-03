// src/App.jsx
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="¡Bienvenidos a nuestra eCommerce!" />
    </div>
  );
}

export default App;
