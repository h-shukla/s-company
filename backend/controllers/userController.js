const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const User = require('../models/userModel')
const ErrorHandler = require('../utils/errorHandler')
const sendToken = require('../utils/jwtToken')

// Register a user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'This is sample id',
            url: 'profileurl'
        }
    })

    sendToken(user, 201, res)
})

// Login user
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body

    // checking if user has given password and email both
    if (!email || !password) {
        return next(new ErrorHandler('Please enter email and password', 400))
    }

    // checking if user exists
    const user = await User.findOne({ email }).select('+password')
    if (!user) {
        return next(new ErrorHandler('Invalid email or password', 401))
    }

    // checking if password is matched
    const isPasswordMatched = await user.comparePassword(password)
    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid email or password', 401))
    }

    sendToken(user, 200, res)
})

// Logout user
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
    // clearing the cookie in frontend
    // which equals user logging out
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: 'Logged out'
    })
})