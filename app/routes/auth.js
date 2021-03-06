const authController = require('../controllers/authcontroller.js');
 
 
module.exports = (app, passport) => {
 
    app.get('/signup', authController.signup);
 
    app.get('/signin', authController.signin);
 
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/choice',
            failureRedirect: '/signup'
        }
    ));
 
    app.get('/choice', isLoggedIn, authController.choice);
 
    app.get('/logout', authController.logout);
 
    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/choice',
            failureRedirect: '/signin'
        }
    ));
 
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}