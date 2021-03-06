const express = require('express');
const connectDB = require('./config/db');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookiesSession = require('cookie-session');
const key = require('./config/default');
require('./routes/oauth/passport');
const path = require('path');

const app = express();

// init middleware
// we can use req.body
app.use(bodyParser.json());
// enable the cookiesession
app.use(
    cookiesSession({
        maxAge: 24 * 60 * 60 * 1000,
        keys: [ key.CookieSecret ]
    })
);
app.use(passport.initialize());
app.use(passport.session());
require('./routes/oauth/passport');

// enable the oauth route
require('./routes/oauth/oauth')(app);

// connect database
connectDB();

app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/note', require('./routes/api/note'));

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));