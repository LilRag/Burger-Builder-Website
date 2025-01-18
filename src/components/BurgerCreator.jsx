import React, { useState } from 'react';
import '../styles/BurgerCreator.css';
import { useUser } from '../Users/UserContext'; // Import the custom hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import Footer from './Footer'; 

const BurgerCreator = () => {
    const { user } = useUser(); // Get user context
    const navigate = useNavigate(); // Hook for navigation
    const [burgers, setBurgers] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({
        bread: 'white',
        patty: 'chicken',
        fillings: [],
        sauces: [],
        cheese: 'mozzarella',
    });

    // Check if user is logged in and get username
    const currentUsername = user ? user.username : null; // Use null if no user is logged in

    const options = {
        bread: [
            { value: 'white', label: 'White Bread', img: '/img/white.jpg', price: 30 },
            { value: 'whole wheat', label: 'Whole Wheat Bread', img: '/img/wholewheat1.jpg', price: 35 },
            { value: 'gluten-free', label: 'Gluten-Free Bread', img: '/img/glutenfree.jpg', price: 45 },
            { value: 'multigrain', label: 'Multigrain Bread', img: '/img/mulitgrain1.jpeg', price: 40 },
        ],
        patty: [
            { value: 'mutton', label: 'Mutton Patty', img:'/img/mutton.jpeg', price: 120 },
            { value: 'chicken', label:'Chicken Patty', img:'/img/chicken.jpg', price: 100 },
            { value:'veggie', label:'Veggie Patty', img:'/img/vegpat.jpg', price: 80 },
            { value:'paneer', label:'Paneer Patty', img:'/img/paneer.jpg', price: 90 },
        ],
        fillings: [
            { value:'lettuce', label:'Lettuce', img:'/img/lettuce.jpg', price: 20 },
            { value:'tomato', label:'Tomato', img:'/img/tomato.jpeg', price: 15 },
            { value:'onion', label:'Onion', img:'/img/onion.jpeg', price: 10 },
            { value:'avocado', label:'Avocado', img:'/img/avacado.jpeg', price: 50 },
            { value:'mushroom', label:'Mushroom', img:'/img/mushroom.png', price: 30 },
        ],
        sauces:[
            { value:'ketchup', label:'Ketchup', img:'/img/ketchup.jpeg', price: 10 },
            { value:'mustard', label:'Mustard', img:'/img/mustard.jpeg', price: 15 },
            { value:'mayo', label:'Mayo', img:'/img/mayo.jpeg', price: 15 },
            { value:'barbecue', label:'Barbecue ', img:'/img/bbq.jpeg', price: 20 },
        ],
        cheese:[
            { value:'mozzarella', label:'Mozzarella Cheese', img:'/img/mozzarella.jpg', price: 40 },
            { value:'american cheese', label:'American Cheese', img:'/img/american.jpg', price: 35 },
            { value:'swiss cheese', label:'Swiss Cheese', img:'/img/swiss.jpg', price: 45 },
            { value:'cheddar cheese', label:'Cheddar Cheese' , img:'/img/cheddar.jpg' ,price :40},
        ],
    };

    // Calculate total price of current burger
    const calculateTotal = () => {
        let total = 0;
        total += options.bread.find(b => b.value === selectedOptions.bread)?.price || 0;
        total += options.patty.find(p => p.value === selectedOptions.patty)?.price || 0;
        selectedOptions.fillings.forEach(filling => {
            total += options.fillings.find(f => f.value === filling)?.price || 0;
        });
        selectedOptions.sauces.forEach(sauce => {
            total += options.sauces.find(f => f.value === sauce)?.price || 0;
        });
        total += options.cheese.find(c => c.value === selectedOptions.cheese)?.price || 0;
        return total;
    };

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        if (name === "fillings" || name === "sauces") {
            setSelectedOptions((prev) => {
                const items = prev[name].includes(value) ? prev[name].filter((item) => item !== value) : [...prev[name], value];
                return { ...prev, [name]: items };
            });
        } else {
            setSelectedOptions((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleAddBurger = async (e) => {
        e.preventDefault();
        
        // Check if the user is logged in
        if (!currentUsername) {
            alert("You must be logged in to create a burger.");
            navigate('/login'); // Redirect to login page
            return; // Exit early
        }

        const burgerWithPrice = {
            userId : currentUsername,
            ...selectedOptions,
            totalPrice : calculateTotal(),
        };

        try {
            const token = localStorage.getItem('token'); // Retrieve the token from local storage
            const response = await fetch('http://localhost:5000/api/auth/burgerbuild', {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                    'Authorization': `Bearer ${token}` // Send token with request
                },
                body : JSON.stringify(burgerWithPrice),
            });

            if (!response.ok) {
                const errorData = await response.json(); // Capture error response
                throw new Error(errorData.message || 'Failed to create burger');
            }

            const result = await response.json();
            console.log('Burger created:', result);
            
            setBurgers((prev) => [...prev, burgerWithPrice]); // Add the created burger to the list

            // Reset selected options after successful creation
            setSelectedOptions({
                bread : 'white',
                patty : 'chicken',
                fillings : [],
                sauces : [],
                cheese : 'mozzarella',
            });
            
        } catch (error) {
            console.error('Error creating burger:', error);
            alert(error.message); // Show alert with error message
        }
    };

    const handleCheckout = () => {
        navigate('/checkout', { state: { burgers } }); // Navigate to checkout and pass burgers as state
    };

    return (
      <div className="burgi">
        <div className="burger-builder">
        
            <h1>Burger Builder</h1>
            <form onSubmit={handleAddBurger}>
                <div className="total-price"> Current Total : ₹{calculateTotal()} </div>

                {/* Option Groups for Bread, Patty, Fillings, Sauces, Cheese */}
                
                <div className="option-group">
                    <h2>Bread</h2>
                    <div className="card-container">
                        {options.bread.map((bread) => (
                            <div key={bread.value} className="card">
                                <img src={bread.img} alt={bread.label} className="option-image" />
                                <div className="price">₹{bread.price}</div>
                                <label>
                                    <input 
                                        type="radio" 
                                        name="bread" 
                                        value={bread.value} 
                                        checked={selectedOptions.bread === bread.value} 
                                        onChange={handleSelectChange} 
                                    /> 
                                    {bread.label}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="option-group">
                    <h2>Patty</h2>
                    <div className="card-container">
                      {options.patty.map((patty) => (
                        <div key={patty.value} className="card">
                          <img src={patty.img} alt={patty.label} className="option-image" />
                          <div className="price">₹{patty.price}</div>
                          <label>
                            <input
                              type="radio"
                              name="patty"
                              value={patty.value}
                              checked={selectedOptions.patty === patty.value}
                              onChange={handleSelectChange}
                            />
                            {patty.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="option-group">
                    <h2>Fillings</h2>
                    <div className="card-container">
                      {options.fillings.map((filling) => (
                        <div key={filling.value} className="card">
                          <img src={filling.img} alt={filling.label} className="option-image" />
                          <div className="price">₹{filling.price}</div>
                          <label>
                            <input
                              type="checkbox"
                              name="fillings"
                              value={filling.value}
                              checked={selectedOptions.fillings.includes(filling.value)}
                              onChange={handleSelectChange}
                            />
                            {filling.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="option-group">
                    <h2>Sauces</h2>
                    <div className="card-container">
                      {options.sauces.map((sauce) => (
                        <div key={sauce.value} className="card">
                          <img src={sauce.img} alt={sauce.label} className="option-image" />
                          <div className="price">₹{sauce.price}</div>
                          <label>
                            <input
                              type="checkbox"
                              name="sauces"
                              value={sauce.value}
                              checked={selectedOptions.sauces.includes(sauce.value)}
                              onChange={handleSelectChange}
                            />
                            {sauce.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="option-group">
                    <h2>Cheese</h2>
                    <div className="card-container">
                      {options.cheese.map((cheese) => (
                        <div key={cheese.value} className="card">
                          <img src={cheese.img} alt={cheese.label} className="option-image" />
                          <div className="price">₹{cheese.price}</div>
                          <label>
                            <input
                              type="radio"
                              name="cheese"
                              value={cheese.value}
                              checked={selectedOptions.cheese === cheese.value}
                              onChange={handleSelectChange}
                            />
                            {cheese.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                

                <button className="burgbuild" type="submit">Build My Burger!</button>
                <button className="burgbuild" type="button" onClick={handleCheckout}>Go to Checkout</button> {/* Checkout Button */}
                
            </form>

            <h2>Your Burgers:</h2>
            <ul className="burger-list">
                {burgers.map((burger, index) => (
                    <li key={index}>
                        <div className="burger-summary">
                            <div>
                                <strong>Bread:</strong> {burger.bread}<br />
                                <strong>Patty:</strong> {burger.patty}<br />
                                <strong>Fillings:</strong> {burger.fillings.length > 0 ? burger.fillings.join(', ') : " None"}<br />
                                <strong>Sauces:</strong> {burger.sauces.length > 0 ? burger.sauces.join(', ') : " None"}<br />
                                <strong>Cheese:</strong> {burger.cheese}
                            </div>
                            <div className="burger-price">
                                <strong>Total:</strong> ₹{burger.totalPrice}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

      <div className='footer'>
        <Footer/>
      </div>
        </div>  
    );
};

export default BurgerCreator;