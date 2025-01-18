// models/user-model.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // Use bcryptjs for compatibility
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    phone_no: {
        type: String,
        required: true,
    }, 
    username: {
        type: String,
        required: true,
    }, 
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false, 
    },
});

// Password hashing before saving the user
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

// JWT generation method
userSchema.methods.generateToken = async function() {
    try {
        return jwt.sign(
            { userID: this._id.toString(), username: this.username },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '30d' }
        );
    } catch (error) {
        console.log(error); 
    }
};

const User = mongoose.model("User", userSchema);
module.exports = User;