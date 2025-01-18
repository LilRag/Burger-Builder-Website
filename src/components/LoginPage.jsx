import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import '../styles/LoginPage.css'; 
import { useUser } from '../Users/UserContext'; 

export const LoginPage = () => {
  const [user, setUser] = useState({
    username: "", 
    password: ""
  });

  const { login } = useUser(); // Get login function from context
  const navigate = useNavigate(); 

  const handleInput = (e) => {
    let name = e.target.name; 
    let value = e.target.value; 

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      console.log("login form", response); 

      if (response.ok) {
        const result = await response.json(); // Get user data from response
        
        // Store JWT and user ID in local storage
        localStorage.setItem('token', result.token); 
        localStorage.setItem('userId', result.userId); // Store user ID

        // Save username in context
        login(result.username); 
        
        alert("Login Successful"); 
        navigate("/"); // Redirect to home page after successful login
      } else {
        const errorData = await response.json(); // Get error message from response
        alert(errorData.message || "Invalid credentials"); // Show specific error message
      }
    } catch (error) {
      console.log("Error during login:", error); 
      alert("An error occurred while trying to log in.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-popup">
        <div className="image-container">
          <img src="/img/login.png" alt="Login" />
        </div>
        <div className="login-container">
          <img src="/img/logo_new.png" alt="Logo" className="logo" />
          <h2>Welcome Back!</h2>
          <p>Enter your username and password to proceed.</p>

          <form onSubmit={handleSubmit}> 
            <div className="input-container">
              <input type="text" placeholder="Username" required name="username" id="username" autoComplete='off' value={user.username} onChange={handleInput} />
            </div>
            <div className="input-container">
              <input type="password" placeholder="Password" required name="password" id="password" value={user.password} onChange={handleInput} autoComplete='off'/>
            </div>

            <button type="submit" className="button">Login</button>
            <div className="or-text">Don't have an account? </div>
            <Link to="/signup" className="button">Sign Up</Link>
            <div className="terms">
              By continuing, you agree to our{' '}
              <Link to="/terms">Terms & Conditions</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;