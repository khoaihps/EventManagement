const jwt = require('jsonwebtoken');
require('dotenv').config()
const secretKey = 'your-secret-key';

function authenticateManager(req, res, next) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decodedToken = jwt.verify(token, secretKey);
        const userRole = decodedToken.role;
        if (userRole === "manager") {
            req.user = decodedToken; // Lưu thông tin người dùng vào request để sử dụng ở các route sau
            next();
        } else {
            return res.status(401).json({ message: 'Unauthorized' });
        }

    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}

function authenticateEmployee(req, res, next) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decodedToken = jwt.verify(token, secretKey);
        const userRole = decodedToken.role;
        if (userRole === "employee") {
            req.user = decodedToken; // Lưu thông tin người dùng vào request để sử dụng ở các route sau
            next();
        } else {
            return res.status(401).json({ message: 'Unauthorized' });
        }

    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = { authenticateEmployee, authenticateManager };