require('dotenv').config()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.register = async (req, res) => {
    try {
        const { username, password, email, address } = req.body;
        // Validate inputs
        // Check if user exists
        const user = new User({
            username,
            email,
            address
            // role: 'user', // Default role
        });

        const salt = await bcrypt.genSalt(5);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        // Generate JWT and send it in response
        const payload = {
            user: {
                id: user._id,
            },
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 3600 }, // Token expires in 1 hour
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (user == null) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        const salt = await bcrypt.genSalt(5);
        const iPassword = await bcrypt.hash(password, salt);
        console.log('iPass', iPassword)
        console.log('uPass', user.password)

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const payload = {
            user: {
                id: user._id,
            },
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};
