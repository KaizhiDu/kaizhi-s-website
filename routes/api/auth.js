const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// inside import
const config = require('../../config/default');
const User = require('../../models/User');
const authMiddleware = require('../../middleware/authMiddleware');

// router GET api/auth
// get current user
router.get('/', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.send(user);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// router post api/auth
// check user login
router.post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email: email });
        if (!user) {
            return res.status(500).json({ errors: [ { msg: 'user is not exist' } ] });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(500).json({ errors: [ { msg: 'Invalid Credentials' } ] });
        }
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
                res.json({ token });
            });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
