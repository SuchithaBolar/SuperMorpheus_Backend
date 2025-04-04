// Example auth middleware, which can be used for validating user sessions or JWT tokens
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
  
    // Add token validation logic here (e.g., JWT verification)
    next();
  };
  
  module.exports = authMiddleware;
  