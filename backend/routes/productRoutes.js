const express = require('express')
const { getAllProducts,
    createProduct,
    getProductDetails,
    updateProduct,
    deleteProduct } = require('../controllers/productController')
const { isAuthenticatedUser, authorizedRoles } = require('../middlewares/auth')
const router = express.Router()

// Non admin routes
router.route('/products').get(getAllProducts)
router.route('/products/:id').get(getProductDetails)

// admin routes
router.route('/admin/products/new').post(isAuthenticatedUser, authorizedRoles('admin'), createProduct)
router.route('/admin/products/:id')
    .put(isAuthenticatedUser, authorizedRoles('admin'), updateProduct)
    .delete(isAuthenticatedUser, authorizedRoles('admin'), deleteProduct)

module.exports = router