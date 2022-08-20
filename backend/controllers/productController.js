const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const Product = require('../models/productModel')
const ApiFeatures = require('../utils/apiFeatures')

// Create --> Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.create(req.body)

    res.status(200).json({
        success: true,
        product
    })
})

// Get all products for listing --> Non Admin
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
    const resultsPerPage = 5
    const productCount = await Product.countDocuments()
    const apiFeatures = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resultsPerPage)
    const product = await apiFeatures.query
    if (!product) {
        return next(new ErrorHandler)
    }
    res.status(200).json({
        success: true,
        productCount,
        product
    })
})

// Get specific product details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        return next(new ErrorHandler('Product not found', 404))
    }

    res.status(200).json({
        success: true,
        product
    })
})

// Update product --> Admin
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id)
    if (!product) {
        return next(new ErrorHandler('Product not found', 404))
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        product
    })
})

// Delete product --> Admin
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        return next(new ErrorHandler('Product not found', 404))
    }

    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success: true,
        message: `Product deleted with id: ${req.params.id}`
    })
})