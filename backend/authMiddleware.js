const jwt = require('jsonwebtoken');
require('dotenv').config()

function authenticateManager(req, res, next) {
    const token = req.header('Authorization').split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        console.log(token);
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decodedToken);
        const userRole = decodedToken.role;
        if (userRole === "manager") {
            req.user = decodedToken; // Lưu thông tin người dùng vào request để sử dụng ở các route sau
            next();
        } else {
            return res.status(401).json({ message: 'Unauthorized' });
        }

    } catch (error) {
        return res.status(401).json({ error });
    }
}

function authenticateEmployee(req, res, next) {
    const token = req.header('Authorization').split(" ")[1];;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
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

function authenticateCustomer(req, res, next) {
    const token = req.header('Authorization').split(" ")[1];;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userRole = decodedToken.role;
        if (userRole === "customer") {
            req.user = decodedToken; // Lưu thông tin người dùng vào request để sử dụng ở các route sau
            next();
        } else {
            return res.status(401).json({ message: 'Unauthorized' });
        }

    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = { authenticateEmployee, authenticateManager, authenticateCustomer };