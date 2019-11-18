const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config/default');

const User = require('../../models/User');

// router GET api/user/checkUserExist
// check user exist
router.get('/checkUserExist/:email', async (req, res) => {
    const user = await User.findOne({ email: req.params.email })
    if (user) await res.send(true);
    return await res.send(false);
});

// router GET api/user/all
// get all the users
router.get('/all', async (req, res) => {
    const users = await User.find();
    if (users) await res.json(users);
    return await res.send(null);
});

// router POST api/user
// Register user
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(500).json({ errors: [ { msg: 'User already exists!' } ] });
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
        res.status(500).json({ errors: [ { msg: 'Server Error!' } ] });
    }
});

module.exports = router;
