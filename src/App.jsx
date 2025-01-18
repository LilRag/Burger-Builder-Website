import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import BurgerCreator from './components/BurgerCreator';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUp';
import Error from './components/Error'; 
import CheckoutPage from './components/Checkout';
import BurgerPresets from './components/BurgerPresets';
import TermsAndConditions from './components/TermsAndConditions';

// Create a ScrollToTop component
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash === '#contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Contact />
          </>
        } />
        <Route path="/burgerbuild" element={<BurgerCreator />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/presets" element={<BurgerPresets/>}/>
        <Route path ="*" element ={<Error/>}/>
        <Route path ="/terms" element ={<TermsAndConditions/>}/>
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;