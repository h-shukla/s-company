const express = require('express')
const { getAllProducts,
    createProduct,
    getProductDetails,
    updateProduct,
    deleteProduct,
    createProductReview,
    getProductReviews,
    deleteReview } = require('../controllers/productController')
const { isAuthenticatedUser, authorizedRoles } = require('../middlewares/auth')
const router = express.Router()

// admin routes
router.route('/admin/products/new').post(isAuthenticatedUser, authorizedRoles('admin'), createProduct)
router.route('/admin/products/:id')
    .put(isAuthenticatedUser, authorizedRoles('admin'), updateProduct)
    .delete(isAuthenticatedUser, authorizedRoles('admin'), deleteProduct)

// Non admin routes
router.route('/products').get(getAllProducts)
router.route('/products/:id').get(getProductDetails)
router.route('/review').put(isAuthenticatedUser, createProductReview)
router.route('/reviews')
    .get(getProductReviews)
    .delete(isAuthenticatedUser, deleteReview)

module.exports = router