const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local')
const User = require('../models/User.js');

passport.use(new LocalStrategy(async (username, password, done) => {
    await User.findOne({ username: username }, async (err, user) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false, { message: 'Incorrect username or password.' }); }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) { return done(null, false, { message: 'Incorrect username or password.' }); }
        return done(null, true);
    })
}));

passport.serializeUser((user, cb) => {
    process.nextTick(() => {
        cb(null, { username: user.username });
    });
});

passport.deserializeUser((user, cb) => {
    process.nextTick(function () {
        return cb(null, user);
    });
});

var router = express.Router();

router.get('/login', function (req, res, next) {
    res.render('login');
});

router.post('/login/password', passport.authenticate('local', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/login',
    failureMessage: true
}));

router.post('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

router.get('/signup', function (req, res, next) {
    res.render('signup');
});

// router.post('/signup', function (req, res, next) {
//     var salt = crypto.randomBytes(16);
//     crypto.pbkdf2(req.body.password, salt, 310000, 32, 'sha256', function (err, hashedPassword) {
//         if (err) { return next(err); }
//         db.run('INSERT INTO users (username, hashed_password, salt) VALUES (?, ?, ?)', [
//             req.body.username,
//             hashedPassword,
//             salt
//         ], function (err) {
//             if (err) { return next(err); }
//             var user = {
//                 id: this.lastID,
//                 username: req.body.username
//             };
//             req.login(user, function (err) {
//                 if (err) { return next(err); }
//                 res.redirect('/');
//             });
//         });
//     });
// });

module.exports = router;
