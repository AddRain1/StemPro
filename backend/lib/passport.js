// passport.js or add to connectDB.js
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../models/user.model.js';  // Adjust to your User model location

// Set up passport-local strategy
passport.use(new LocalStrategy({
    usernameField: 'username',  // Specify the username field (or change to match your schema)
    passwordField: 'password',  // Specify the password field (or change to match your schema)
}, async (username, password, done) => {
    try {
        // Find user by username
        const user = await User.findOne({ username });
        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }

        // Verify password
        const isValid = await user.authenticate(password);  // Using passport-local-mongoose's built-in method
        if (!isValid) {
            return done(null, false, { message: 'Incorrect password.' });
        }

        // Successful authentication
        return done(null, user);
    } catch (err) {
        return done(err);  // Handle errors
    }
}));

// Serialize user info to store in session
passport.serializeUser((user, done) => {
    done(null, user._id);  // Store user ID in the session
});

// Deserialize user info from session
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);  // Fetch the user from the database by ID
        done(null, user);
    } catch (err) {
        done(err);
    }
});
