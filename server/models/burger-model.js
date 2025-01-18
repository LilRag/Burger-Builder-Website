// D:\WEBTechProject\burger-builder\server\models\burger-model.js

const mongoose = require('mongoose');

const burgerSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    bread: {
        type: String,
        required: true
    },
    patty: {
        type: String,
        required: true
    },
    fillings: {
        type: [String],
        default: []
    },
    sauces: {
        type: [String],
        default: []
    },
    cheese: {
        type: String,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Burger = mongoose.model('Burger', burgerSchema);

module.exports = Burger;  // Make sure this exact export is here