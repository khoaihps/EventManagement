const jwt = require('jsonwebtoken');
const { decodeToken } = require('../controllers/authentication.controller');
require('dotenv').config()

function authenticateManager(req, res, next) {
    const userData = decodeToken(req.header('Authorization'));
    if (userData.error) {
        return res.status(userData.code).json({ message: userData.error });
    }
    if (userData.role === "manager") {
        req.user = userData; // Lưu thông tin người dùng vào request để sử dụng ở các route sau
        next();
    }
}

function authenticateEmployee(req, res, next) {
    const userData = decodeToken(req.header('Authorization'));
    if (userData.error) {
        return res.status(userData.code).json({ message: userData.error });
    }
    if (userData.role === "employee") {
        req.user = userData; // Lưu thông tin người dùng vào request để sử dụng ở các route sau
        next();
    }
}

function authenticateCustomer(req, res, next) {
    const userData = decodeToken(req.header('Authorization'));
    if (userData.error) {
        return res.status(userData.code).json({ message: userData.error });
    }
    if (userData.role === "customer") {
        req.user = userData; // Lưu thông tin người dùng vào request để sử dụng ở các route sau
        next();
    }
}

module.exports = { authenticateEmployee, authenticateManager, authenticateCustomer };