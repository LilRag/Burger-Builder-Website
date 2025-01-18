import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignUp.css';
import {useState} from "react" ; 
import { useNavigate } from 'react-router-dom';

export const SignUp=()=>{
const [user,setUser]= useState({
  name:"",
  phone_no:"",
  username:"",
  password:"",
}); 


const navigate = useNavigate(); 
// handling the input values 
const handleInput =(e) =>{
  console.log(e); 
  let name = e.target.name; 
  let value = e.target.value; 


  setUser({
    ...user,
    [name]:value , 
  })
}

// handling the form submission
const handleSubmit = async (e) => {
  e.preventDefault(); 
//  console.log(user) ; 
try{  
 const response = await fetch(`http://localhost:5000/api/auth/signup`,{
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user), 
 }); 
 if (response.ok){
  setUser( { name:"",
    phone_no:"",
    username:"",
    password:""}); 
    alert("Signup Successful");
    console.log("Signup Successful"); 
    navigate("/"); 

 }
 console.log(response); }
 catch(error) {
  console.log("signup",error); 
  alert("Error occurred while signing up");
 }
};


  return (
    <div className="signup-page">
      <div className="signup-popup">
        <div className="image-container">
          <img src="/img/login.png" alt="Sign Up" className="img1"/>
        </div>
        <div className="signup-container">
          <img src="/img/logo_new.png" alt="Logo" className="logo" />
          <h2>Sign Up</h2>
          <form  onSubmit={handleSubmit}>
          <div>
          <label ></label>
          <input  className="input-container" type="text" name="name"  placeholder='Name'id="name" required autoComplete="off" value={user.name}  onChange={handleInput}/>
          </div>
          <div>
          <label ></label>
          <input className="input-container" type="number" name="phone_no"  placeholder='Phone Number'id="phone_no" required autoComplete="off" value={user.phone_no}  onChange={handleInput}/>
          </div>
          <div>
          <label></label>
          <input className="input-container" type="text" name="username"  placeholder='Username'id="username" required autoComplete="off" value={user.username} onChange={handleInput}/>
          </div>
          <div>
          <label ></label>
          <input className="input-container"  type="password" name="password"  placeholder='Password'id="pass" required autoComplete="off" value={user.password}  onChange={handleInput}/>
          </div>
          <div class="checkbox-container">
                <input type="checkbox" id="updates-offers" required/>
                <label for="updates-offers">You agree to receive messages about updates and offers</label>
            </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
          <p>
            <div className='terms'>
            By continuing, you agree to our{' '}
            <Link to="/terms">Terms & Conditions</Link>,{' '}
            </div>
          </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;