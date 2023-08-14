const express = require('express');
const { authenticateCustomer } = require('../../middlewares/auth.middleware');
const { getCustomerInfo, updateCustomerInfo, deleteCustomerAccount, changePassword } = require('../../middlewares/user.middleware');


const router = express.Router();

router.use(authenticateCustomer);

router.get('/:customerID', getCustomerInfo);
router.put('/update/:customerID', updateCustomerInfo);
router.get('/delete/:customerID', deleteCustomerAccount);
router.put('/change-password/:customerID', changePassword);

module.exports = router;