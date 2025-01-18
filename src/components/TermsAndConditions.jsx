import React from 'react';
import '../styles/TermsAndConditions.css'; // Import your CSS file
import { NavLink } from "react-router-dom";
const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>Last updated: [21-11-2024]</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to Burger Builder! These Terms and Conditions govern your use of our website and services. By using our services, you agree to these terms.
      </p>

      <h2>2. Acceptance of Terms</h2>
      <p>
        By accessing or using the Burger Builder services, you confirm that you accept these Terms and agree to comply with them. If you do not agree with any part of these terms, you must not use our services.
      </p>

      <h2>3. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on this page. It is your responsibility to review these Terms periodically.
      </p>

      <h2>4. User Responsibilities</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to:
        <ul>
          <li>Provide accurate and complete information when creating an account.</li>
          <li>Notify us immediately of any unauthorized use of your account.</li>
          <li>Not engage in any fraudulent or illegal activities while using our services.</li>
        </ul>
      </p>

      <h2>5. Order Processing</h2>
      <p>
        All orders placed through Burger Builder are subject to acceptance by us. We reserve the right to refuse or cancel any order for reasons including but not limited to:
        <ul>
          <li>Product availability.</li>
          <li>Errors in the product or pricing information.</li>
          <li>Fraudulent or unauthorized transactions.</li>
        </ul>
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Burger Builder shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or products.
      </p>

      <h2>7. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these Terms shall be resolved in the courts located in [Your Jurisdiction].
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at support@burgerbuilder.com.
      </p>
      <div >
            <NavLink to ="/login"> return to login</NavLink>
        </div>
    </div>
  );
};

export default TermsAndConditions;