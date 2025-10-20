const globalErrHandler = (err, req, res, next) => {
    //status
    //message
    //stack
 const stack = err.stack;
 const message = err.message;
 const status = err.status? err.status : "Failed";
 const statusCode = err.statusCode? err.statusCode : 500;
 //send response
 res.status(statusCode).json({
    message,
    stack,
    status,
 });
    
};

module.exports = globalErrHandler;