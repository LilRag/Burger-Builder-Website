import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Checkout.css';
import Footer from './Footer'; 
const CheckoutPage = () => {
    const location = useLocation();
    const burgers = location.state?.burgers || []; // Retrieve burgers from location state
    const [noContactDelivery, setNoContactDelivery] = useState(false);
    const [tip, setTip] = useState(0);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [address, setAddress] = useState(''); // State for delivery address

    // Calculate item total based on burger prices
    const itemTotal = burgers.reduce((total, burger) => total + burger.totalPrice, 0);
    
    // Constants for fees and discounts
    const deliveryFee = 25; // Updated delivery fee
    const platformFee = 10; // Platform fee
    const gstCharges = (itemTotal * 0.18).toFixed(2); // GST calculated as 18% of item total
    const discount = 25; // Discount amount

    // Calculate total payable amount
    const totalPayable = itemTotal + deliveryFee + platformFee + parseFloat(gstCharges) - discount + tip;

    const handlePlaceOrder = async () => {
        const userId = localStorage.getItem('userId'); 
        if (!userId) {
            alert("User ID is missing. Please log in.");
            return;
        }
        if (!selectedPayment || !address) {
            alert("Please select a payment method and enter your delivery address.");
            return;
        }

        const orderDetails = {
            userId, // Assuming you store user ID in local storage after login
            paymentMethod: selectedPayment,
            address,
            totalAmount: totalPayable,
            noContactDelivery,
            burgers,
        };
        console.log("Order Details:", orderDetails);

        try {
            const token = localStorage.getItem('token');
            console.log("Token:", token); 
            if (!token) {
                alert("You must be logged in to place an order.");
                return;
            }
            const response = await fetch('http://localhost:5000/api/auth/placeorder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Send token with request
                },
                body: JSON.stringify(orderDetails),
            });

            if (!response.ok) {
                const errorData = await response.json(); // Capture error response
                console.error('Error Data:', errorData);
                throw new Error(errorData.message || 'Failed to place order');
            }

            const result = await response.json();
            console.log('Order placed successfully:', result);
            alert('Order placed successfully!');

            // Optionally redirect or reset state after successful order placement
        } catch (error) {
            console.error('Error placing order:', error);
            alert(error.message); // Show alert with error message
        }
    };

    return (
        <div className='big'> 
        <div className="checkout-container">
            <div className="checkout-grid">
                <section className="checkout-details">
                    <div className="section-header">
                        <h2>Your Order</h2>
                    </div>
                    <div className="order-items">
                        {burgers.length > 0 ? (
                            burgers.map((burger, index) => (
                                <div key={index} className="order-item">
                                    <div className="item-description">
                                        <h3>Custom Burger</h3>
                                        <p>{burger.bread} bread, {burger.patty} patty</p>
                                        {burger.fillings.length > 0 && (
                                            <p>Fillings: {burger.fillings.join(', ')}</p>
                                        )}
                                        {burger.sauces.length > 0 && (
                                            <p>Sauces: {burger.sauces.join(', ')}</p>
                                        )}
                                        <p>Cheese: {burger.cheese}</p>
                                    </div>
                                    <div className="item-price">₹{burger.totalPrice}</div>
                                </div>
                            ))
                        ) : (
                            <p className="empty-order">No items in your order</p>
                        )}
                    </div>
                </section>

                <section className="checkout-form">
                    <div className="section-header">
                        <h2>Delivery Details</h2>
                    </div>
                    <div className="form-group">
                        <label>Delivery Address</label>
                        <input
                            type="text"
                            placeholder="Enter your address"
                            className="address-input"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Payment Method</label>
                        <div className="payment-options">
                            {['Credit Card', 'UPI', 'Cash on Delivery'].map((method) => (
                                <label
                                    key={method}
                                    className={`payment-option ${
                                        selectedPayment === method ? 'selected' : ''
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name="payment"
                                        value={method}
                                        checked={selectedPayment === method}
                                        onChange={() => setSelectedPayment(method)}
                                    />
                                    {method}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Delivery Preferences</label>
                        <label className="checkbox-option">
                            <input
                                type="checkbox"
                                checked={noContactDelivery}
                                onChange={() => setNoContactDelivery(!noContactDelivery)}
                            />
                            No-contact Delivery
                        </label>
                    </div>
                </section>

                <section className="checkout-summary">
                    <div className="section-header">
                        <h2>Order Summary</h2>
                    </div>
                    <div className="bill-breakdown">
                        {/* Displaying item total */}
                        <div className="bill-row">
                            <span>Item Total</span>
                            <span>₹{itemTotal}</span>
                        </div>
                        {/* Displaying fixed fees */}
                        <div className="bill-row">
                            <span>Delivery Fee</span>
                            <span>₹{deliveryFee}</span>
                        </div>
                        <div className="bill-row">
                            <span>Platform Fee</span>
                            <span>₹{platformFee}</span>
                        </div>
                        <div className="bill-row">
                            <span>GST Charges</span>
                            <span>₹{gstCharges}</span>
                        </div>
                        {/* Displaying discount */}
                        <div className="bill-row">
                            <span>Extra discount for you</span>
                            <span>-₹{discount}</span>
                        </div>

                        {/* Tip section */}
                        <div className="bill-row tip-section">
                            <span>Delivery Tip</span>
                            <div className="tip-buttons">
                                {[10, 20, 50].map((amount) => (
                                    <button
                                        key={amount}
                                        onClick={() => setTip(amount)}
                                        className={tip === amount ? 'selected' : ''}
                                    >
                                        ₹{amount}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Total payable amount */}
                        <div className="bill-row total">
                            <strong>TO PAY</strong>
                            <strong>₹{totalPayable.toFixed(2)}</strong> {/* Ensure two decimal places */}
                        </div>
                    </div>

                    {/* Place Order Button */}
                    <button 
                      className="place-order-btn" 
                      onClick={handlePlaceOrder} // Call handlePlaceOrder on click
                    >
                      Place Order
                    </button>
                </section>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default CheckoutPage;