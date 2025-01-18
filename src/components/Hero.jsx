import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Welcome to Burger Builder';

  useEffect(() => {
    let currentText = '';
    let index = 0;
    const typingSpeed = 100;

    const typeWriter = () => {
      if (index < fullText.length) {
        currentText += fullText.charAt(index);
        setTypedText(currentText);
        index++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        setIsTyping(false);
      }
    };

    typeWriter();

    return () => {
      setIsTyping(false);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="typewriter">
            {typedText}
            <span className={`cursor ${isTyping ? 'typing' : ''}`}>|</span>
          </h2>
          <h3>Build Your Own Burger</h3>
          <p>
            At Burger Builder, we believe in making every burger an experience. Whether
            you're in the mood for a classic cheeseburger, a plant-based veggie delight, or
            something unique, we've got you covered with delicious ingredients, endless combinations, unforgettable flavors.
          </p>
        </div>
        <div className="hero-image">
          <img 
            src="./img/login.png" 
            alt="Burger" 
            className="burger-img"
          />
          <div className="login-btn-container">
            <Link to="/login" className="login-btn">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;