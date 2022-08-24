const Order = require('../models/orderModels')
const Product = require('../models/productModel')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')

// Create new order
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
    const {
        shippingInfo,
        orederItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice } = req.body

    const order = await Order.create({
        shippingInfo,
        orederItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id
    })

    res.status(201).json({
        success: true,
        order
    })
})

// Get single order
exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id).polulate('user', 'name emai')
    if (!order) {
        return next(new ErrorHandler(`Order not found this id`, 404))
    }
    res.status(200).json({
        success: true,
        order
    })
})

// Get all orders
exports.getAllOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find()
    res.status(200).json({
        success: true,
        orders
    })
})