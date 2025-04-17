const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const users = require('../models/userModel');
require('dotenv').config();

exports.login = (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);
    if (!user) return res.status(404).json({message: 'User not found'});

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) return res.status(401).json({message: 'User and password does not match'});

    //Creation of our JWT
    const token = jwt.sign(
        { id: user.id, email: user.email},
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    res.json({token});
}