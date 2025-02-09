import User from "../models/user.model.js";
import passport from "../strategies/local-strategy.js";

export const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Create a new user instance (without setting the password here)
    const user = new User({ email, username });

    // Register the user and pass the password separately to handle hashing
    const registeredUser = await User.register(user, password);

    // Log the user in after successful registration
    req.login(registeredUser, (err) => {
      if (err) {
        return res.status(500).json({ message: "Login failed", error: err });
      }

      // Send a success response back to Postman (JSON response)
      res.status(200).json({
        message: "Registration successful and user logged in",
        user: {
          username: registeredUser.username,
          email: registeredUser.email,
          _id: registeredUser._id,
        },
        isAuthenticated: true,
      });
    });
  } catch (e) {
    // If an error occurs, send the error message in the response
    console.error("Error during registration:", e);
    res.status(400).json({ message: "Registration failed", error: e.message });
  }
};

export const login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json({ message: info.message || "Login failed." });
    }

    // Log the user in
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      console.log("User logged in successfully:", user.username);
      console.log(req.user);
      // Successful login, send the user details and a message
      return res.status(200).json({
        message: "Login successful!",
        user: {
          username: user.username,
          email: user.email,
          _id: user._id,
        },
        isAuthenticated: true,
      });
    });
  })(req, res, next); // Call the passport authenticate function with the request and response
};

export const checkAuth = (req, res) => {
  if (req.isAuthenticated) {
    // Passport checks if session exists
    return res.status(200).json({
      isAuthenticated: true,
      user: {
        username: req.user.username,
        email: req.user.email,
        _id: req.user._id,
      },
    });
  } else {
    return res
      .status(401)
      .json({ isAuthenticated: false, message: "User not logged in" });
  }
};

export const logout = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.status(200).json({ message: "Logout successful" });
  });
};
