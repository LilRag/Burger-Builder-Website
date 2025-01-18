import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '/img/logo_new.png'; // Adjusted path



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
        <img src={logo} alt="Burger Builder Logo" />

        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/burgerbuild">Burger Creator</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
