const _ = require('lodash');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const publicKey = fs.readFileSync('public.txt');

module.exports = (req, res, next) => {
    const authHeader = req.header('Authorization');

    const token = _.replace(authHeader, 'Bearer', '').trim();

    try {
        const decoded = jwt.verify(token, publicKey);
        console.log(decoded)
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).send({
            error: 'invalid_token',
            error_description: error?.name+': '+error.message
        });
    }
};
