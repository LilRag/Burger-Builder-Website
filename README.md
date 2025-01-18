# Burger Builder Website

Welcome to the **Burger Builder** website! This platform allows users to craft their own custom burgers and place orders seamlessly. Built using the MERN (MongoDB, Express, React, Node.js) stack, the application ensures a smooth and interactive user experience.

---

## Features

### 1. **Custom Burger Creation**
- Choose from a variety of ingredients to create your personalized burger.
- Real-time updates on your burger's appearance and price.

### 2. **Order Placement**
- Once your burger is ready, proceed to place an order with a few clicks.

### 3. **Authentication**
- **Signup**: Create a new account to start building your burgers.
- **Login**: Access your account to view past orders and build more burgers.

### 4. **Database Connectivity**
- All user data and orders are stored securely in the cloud using **MongoDB Atlas**.

---

## Technologies Used

### Frontend:
- React.js: For building a dynamic and responsive user interface.

### Backend:
- Node.js: Server-side logic.
- Express.js: For creating RESTful APIs.

### Database:
- MongoDB Atlas: A cloud-based NoSQL database for secure and scalable data storage.

---

## Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   https://github.com/LilRag/Burger-Builder-Website.git
   cd burger-builder
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd burger-builder
   npm install
   cd ../server
   npm install
   ```

3. Configure Environment Variables:
   - Create a `.env` file in the `server` directory.
   - Add the following variables:
     ```env
     MONGO_URI=<your-mongodb-atlas-connection-string>
     JWT_SECRET=<your-jwt-secret>
     PORT=5000
     ```

4. Run the application:
   - Start the backend server:
     ```bash
     cd server
     npm start
     ```
   - Start the frontend:
     ```bash
     cd client
     npm start
     ```

---

## How to Use

1. **Sign Up**: Create an account or log in if you already have one.
2. **Build Your Burger**: Select ingredients and customize your burger.
3. **Place Order**: Add your custom burger to the cart and confirm your order.

---

## Future Improvements
- Add more ingredient options.
- Include payment gateway integration.
- Improve order tracking and management.

---

## License
This project is licensed under the MIT License. Feel free to contribute and improve the project!


