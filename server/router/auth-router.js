const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const authenticateJWT = require('../middleware/auth-middleware');

// Define routes
router.route("/").get(authControllers.home);
router.route('/signup').post(authControllers.signup);
router.route('/login').post(authControllers.login);
router.route('/burgerbuild').post(authenticateJWT, authControllers.burgerbuild);
router.route('/placeorder').post(authenticateJWT, authControllers.placeorder); 

module.exports = router;