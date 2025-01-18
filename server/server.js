require('dotenv').config();
const express = require("express") ; 
const app = express (); 
const router = require("./router/auth-router"); 
const mongoose = require('mongoose');



const connectDB = require('./utils/db'); 
const cors = require("cors"); 


app.use(express.json()); 

const corsOptions = {
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD", 
    credentials:true,
    allowedHeaders:['Content-Type', 'Authorization']

}; 

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));
//handling cors 
app.use(cors(corsOptions)); 

app.use("/api/auth",router); 
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
});
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

const PORT = 5000; 
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port: ${PORT}`);
    });
}).catch(err => {
    console.error('Database connection failed:', err);
});