import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const bgStyle = {
    backgroundImage: 'url(/img/new_bg.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div style={bgStyle} role="img" aria-label="Delicious burger background image">
      <div id="overlay">
        <div id="home_center">
          <img src="/img/logo_new.png" alt="Burger Builder Logo" />
          <h2 id="main_head">Serving Customized Burgers</h2>
          <p id="main_text">
            We offer numerous gluten-free options as well as delicious
            vegetarian and vegan foods.
          </p>
          <div className="button-container">
            <Link to="/login" id="primary">
              Login 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;