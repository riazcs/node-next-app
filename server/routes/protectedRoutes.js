const express = require('express');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.get('/protected', authMiddleware, (req, res) => {
    res.json({ msg: 'You are authorized!' });
});

module.exports = router;
