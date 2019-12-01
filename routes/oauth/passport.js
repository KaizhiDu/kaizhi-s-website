const GoogleStrategy = require('passport-google-oauth20').Strategy;
const key = require('../../config/default');
const passport = require('passport');

const User = require('../../models/User');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    User.findById(id)
        .then((user) => {
            done(null, user);
        });
});

passport.use(new GoogleStrategy({
        clientID: key.googleClientID,
        clientSecret: key.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id });
        if (!existingUser) {
            const user = await new User({
                googleId: profile.id,
                name: profile.displayName,
                avatar: profile._json.picture,
                password: profile.id+"donotneed"
            }).save();
            done(null, user);
        }
        done(null, existingUser);
    })
);

