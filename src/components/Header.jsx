import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToContact = () => {
    if (location.pathname !== '/') {
      navigate('/#contact');
      return;
    }
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isHomePage = location.pathname === '/';

  return (
    <header id="top-header">
      <div id="logo">
        <button 
          onClick={() => navigate('/')} 
          className="logo-button"
          aria-label="Home"
        >
          <img src="/img/logo_new.png" alt="Burger Builder Logo" />
        </button>
      </div>
      
      <nav>
        <button 
          onClick={() => navigate('/burgerbuild')} 
          className="link-style"
        >
          Burger Creator
        </button>
        
        <button 
          onClick={() => navigate('/checkout')} 
          className="link-style"
        >
          Checkout
        </button>
        
        <button 
          onClick={scrollToContact}
          className="link-style"
        >
          Contact Us
        </button>
      </nav>
    </header>
  );
}