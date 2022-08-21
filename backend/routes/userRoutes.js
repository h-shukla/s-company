const express = require('express')
const { registerUser, loginUser, logoutUser, getUserDetails } = require('../controllers/userController')
const router = express.Router()
const { isAuthenticatedUser, authorizedRoles } = require('../middlewares/auth')

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logoutUser)
router.route('/me').get(isAuthenticatedUser, getUserDetails)

module.exports = router