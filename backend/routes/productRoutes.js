const express = require('express');
const { getAllProducts,
        createProduct,
        getProductDetails,
        updateProduct,
        deleteProduct,
        createProductReview,
        getProductReviews,
        deleteReview } = require('../controllers/productController');
const { isAuthenticatedUser } = require('../middlewares/auth');
const router = express.Router();

// admin routes
router.route('/admin/products/new').post(createProduct);
router.route('/admin/products/:id')
    .put(updateProduct)
    .delete(deleteProduct);

// Non admin routes;
router.route('/products').get(getAllProducts);
router.route('/products/:id').get(getProductDetails);
router.route('/review').put(isAuthenticatedUser, createProductReview);
router.route('/reviews')
    .get(getProductReviews)
    .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
