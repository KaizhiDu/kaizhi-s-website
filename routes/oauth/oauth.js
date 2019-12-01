const express = require('express');
const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google',
        passport.authenticate('google', {
            scope: [ 'profile', 'email' ]
        }));

    app.get('/auth/google/callback',
        passport.authenticate('google', { successRedirect: '/' })
    );

    app.get('/auth/google_user', (req, res) => {
        res.json({googleUser: req.user});
    });

    app.get('/auth/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });

};
