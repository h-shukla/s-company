const express = require('express')
const { newOrder, getAllOrders, getSingleOrder } = require('../controllers/orderController')
const { isAuthenticatedUser, authorizedRoles } = require('../middlewares/auth')
const router = express.Router()

router.route('/order/new').post(isAuthenticatedUser, newOrder)
router.route('/order/:id').get(isAuthenticatedUser, getSingleOrder)
router.route('/orders').get(isAuthenticatedUser, authorizedRoles('admin'), getAllOrders)

module.exports = router