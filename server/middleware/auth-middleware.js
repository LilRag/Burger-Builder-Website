// middleware/auth-middleware.js
const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: 'No authorization header' });
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
            if (err) {
                console.error('JWT verification error:', err);
                return res.status(403).json({ message: 'Invalid token' });
            }
            req.user = user;
            next();
        });
    } catch (error) {
        console.error('Auth middleware error:', error);
        return res.status(500).json({ message: 'Authentication error' });
    }
};

module.exports = authenticateJWT;