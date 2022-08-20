const ErrorHandler = require('../utils/errorHandler')

module.exports = (err, req, res, next) => {
    // if status code is not provided then use 500 i.e. internal server error
    err.statusCode = err.statusCode || 500
    err.message = err.message || 'Internal server error'

    // Cast error --> Wrong mongodb ID error
    if (err.name == 'CastError') {
        const message = `Resource not found. Invalid: ${err.path}`
        err = new ErrorHandler(message, 400)
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
        // put err.stack to get full stack in response
    })
}