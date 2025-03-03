// src/components/Navbar.jsx
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brandname">eCommerce Staiger</div>
      
      <ul className="categories">
        <li>Celulares</li>
        <li>Tecnología</li>
        <li>PC</li>
      </ul>
      
      <CartWidget />
    </nav>
  );
}

export default Navbar;
