const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const protect = asyncHandler(async (req, res, next) => {
  try {
    // console.log("Cookies:", req.cookies);

    const token = req.cookies.token?.trim();
    // console.log("Token:", token);

    if (!token) {
      console.error("No token provided");
      res.status(401).json({ message: "Not authorized, please login" });
      return;
    }

    // Verify Token
    let verified;
    try {
      verified = jwt.verify(token, process.env.JWT_SECRET);
      // console.log("Verified Token:", verified);
    } catch (error) {
      // console.error("Token verification failed:", error.message);
      res.status(401).json({ message: "Token verification failed" });
      return;
    }

    // Fetch user by email from token
    const user = await User.findOne({ email: verified.email }).select("-password");
    // console.log("User Query Result:", user);

    if (!user) {
      console.error("User not found for email:", verified.email);
      res.status(401).json({ message: "User not found, please re-login" });
      return;
    }

    req.user = user; // Attach user to the request object
    next();
  } catch (error) {
    // console.error("Auth Middleware Error:", error.message);
    res.status(401).json({ message: "Not authorized, please login" });
  }
});

module.exports = protect;
