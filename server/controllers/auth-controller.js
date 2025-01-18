// controllers/auth-controller.js
const User = require("../models/user-model");
const jwt = require('jsonwebtoken');
const Burger = require('../models/burger-model'); 
const Order = require('../models/order');

// Home route
const home = async (req, res) => {
    try {
        res.status(200).send('Welcome to burger creator using router');
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
};

// Sign up
const signup = async (req, res) => {
    try {
        const { name, phone_no, username, password } = req.body;

        const userExist = await User.findOne({ phone_no });
        if (userExist) {
            return res.status(400).json({ msg: "Phone number already exists" });
        }

        const userCreated = await User.create({ name, phone_no, username, password });
        
        res.status(200).json({ 
            msg: "User created successfully",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: "Error creating user" });
    }
};

// Login
const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user by username
        const userExist = await User.findOne({ username });
        
        // Check if user exists and if the password matches
        if (!userExist || !(await userExist.comparePassword(password))) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        // Generate a token
        const token = await userExist.generateToken();

        // Respond with success and user data
        res.status(200).json({
            message: 'Login successful',
            token,
            username: userExist.username,
            userId: userExist._id.toString(), // Ensure user ID is returned as a string
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
// Function to create a burger

const burgerbuild = async (req, res) => {
    try {
        console.log('Request body:', req.body);
        console.log('User from token:', req.user);

        if (!req.user) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        const { bread, patty, fillings, sauces, cheese, totalPrice } = req.body;

        // Create a new burger document
        const newBurger = new Burger({
            userId: req.user.username,  // Changed from userID to username based on your token
            bread,
            patty,
            fillings: Array.isArray(fillings) ? fillings : [],
            sauces: Array.isArray(sauces) ? sauces : [],
            cheese,
            totalPrice
        });

        console.log('New burger object:', newBurger);

        // Save the burger to the database
        const savedBurger = await newBurger.save();
        console.log('Saved burger:', savedBurger);

        res.status(201).json({ 
            message: 'Burger created successfully', 
            burger: savedBurger 
        });
    } catch (error) {
        console.error('Server error in burgerbuild:', error);
        res.status(500).json({ 
            message: 'Error creating burger', 
            error: error.message 
        });
    }
};

const placeorder = async (req, res) => {
    const { userId, paymentMethod, address, totalAmount, noContactDelivery, burgers } = req.body;

    try {
        const newOrder = new Order({
            userId,
            paymentMethod,
            address,
            totalAmount,
            noContactDelivery,
            burgers
        });

        const savedOrder = await newOrder.save();
        res.status(201).json({ message: 'Order placed successfully!', orderId: savedOrder._id });
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ message: 'Failed to place order', error });
    }
};




module.exports = { home, signup, login ,burgerbuild, placeorder};