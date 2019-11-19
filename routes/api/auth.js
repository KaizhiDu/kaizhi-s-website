const express = require('express');
const router = express.Router();

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

module.exports = router;
