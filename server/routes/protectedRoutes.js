const express = require('express');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.get('/protected', authMiddleware, (req, res) => {
    // Authorized user's data is in req.user
    res.json({ msg: 'You are authorized!' });
});

module.exports = router;
