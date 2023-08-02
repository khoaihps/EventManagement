const jwt = require('jsonwebtoken');
require('dotenv').config()

const decodeToken = (tokenHeader) => {
    try {
        if (!tokenHeader) {
            return {
                'code': 401,
                'error': 'Unauthorized'
            }
        }
        const tokenSplit = tokenHeader.split(" ");
        if (tokenSplit.length < 2) {
            return {
                'code': 401,
                'error': 'Unauthorized'
            }
        }
        const token = tokenSplit[1];
        return userData = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return {
            'code': 500,
            'error': 'JWT: ' + error
        }
    }
}

module.exports = {decodeToken}