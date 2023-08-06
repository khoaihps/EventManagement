const express = require('express');
const { authenticateCustomer } = require('../../middlewares/auth.middleware');
const { getCustomerInfo, updateCustomerInfo } = require('../../middlewares/user.middleware');


const router = express.Router();

// router.use(authenticateCustomer);

router.get('/:customerID', getCustomerInfo);
router.get('/update', updateCustomerInfo);

module.exports = router;