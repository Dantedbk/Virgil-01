
const isAuthenticated = (req, res, next) => {
    // Check if user is authenticated
    // For example, you could check if the user has a valid session token or JWT
    const authenticated = true; // Replace this with your actual authentication check
    
    if (authenticated) {
      // If user is authenticated, call next middleware function
      next();
    } else {
      // If user is not authenticated, send 401 Unauthorized response
      res.status(401).json({ message: "Unauthorized" });
    }
  };
  
  module.exports = {
    isAuthenticated,
  };
  