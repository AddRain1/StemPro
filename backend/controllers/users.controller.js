import User from "../models/user.model.js";

export const renderRegister = (req, res) => {
    res.render('users/register');
    //Change up whenever the user route is updated
}

export const register = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            //req.flash('success', 'Welcome to Yelp Camp!'); If we implement flash, then can uncomment
            res.redirect('/homepage'); //Change to whatever route this is supposed to be
        })
    } catch (e) {
        //req.flash('error', e.message);
        res.redirect('register');
    }
}

export const renderLogin = (req, res) => {
    res.render('users/login');
}

export const login = (req, res) => {
    // req.flash('success', 'Welcome back!');
    const redirectUrl = req.session.returnTo || '/homepage'; //Change to whatever route this is supposed to be
    delete req.session.returnTo;
    res.redirect(redirectUrl);
}

export const logout = (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/homepage');
    });
}

