import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar
import Footer from './components/Footer'; // Footer component
import './App1.css';
import Contact from './components/Contact';
import BurgerCreator from './components/BurgerCreator';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUp';
import Error from './components/Error'; 
import CheckoutPage from './components/Checkout';
import BurgerPresets from './components/BurgerPresets';
import TermsAndConditions from './components/TermsAndConditions';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section className="hero">
  <div className="hero-content">
    <div className="hero-text">
      <h2>Welcome to Burger Builder</h2>
      <h3>Build Your Own Burger</h3>
      <p>At Burger Builder, we believe in making every burger an experience. Whether
        you’re in the mood for a classic cheeseburger, a plant-based veggie delight, or
        something unique, we’ve got you covered with Delicious ingredients, endless combinations, unforgettable flavors.</p>
    </div>
    <div className="hero-image">
      <img 
        src="./img/login.png" 
        alt="Burger" 
        className="burger-img"
      />
    </div>
  </div>
  </section>

        {/* Content Section with Routes */}
        <div className="content">
          <Routes>
            <Route path="/contact" element={<Contact/>} />
            {/* Add more routes as needed */}
            <Route path="/burgerbuild" element={<BurgerCreator />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/checkout" element={<CheckoutPage/>}/>
            <Route path="/presets" element={<BurgerPresets/>}/>
            <Route path ="*" element ={<Error/>}/>
            <Route path ="/terms" element ={<TermsAndConditions/>}/>

          </Routes>
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;