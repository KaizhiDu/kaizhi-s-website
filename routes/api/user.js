const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config/default');

const User = require('../../models/User');

// router POST api/user
// Register user
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(500).json({ error: [ { msg: 'User already exists!' } ] });
        }
        // Get user gravatar
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });
        // Create user info
        user = new User({
            email,
            name,
            avatar,
            password
        });
        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        // save the user to database
        await user.save();
        //Return jsonwebtoken(JWT)
        const payload = {
            user: {
                id: user.id
            }
        };
        jwt.sign(
            payload,
            config.JWTSecret,
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token: token });
            }
        )
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Errors');
    }
});

module.exports = router;
