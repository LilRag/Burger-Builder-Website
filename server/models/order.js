const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    paymentMethod: { type: String, required: true },
    address: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    noContactDelivery: { type: Boolean, default: false },
    burgers: [{
        bread: { type: String, required: true },
        patty: { type: String, required: true },
        fillings: { type: [String], default: [] },
        sauces: { type: [String], default: [] },
        cheese: { type: String, required: true },
        totalPrice: { type: Number, required: true }
    }],
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
module.exports = Order; 