const appErr = require("../utils/appErr");
const getTokenFromHeader = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");

const isLogin = (req, res, next)=>{
    
//get token from header
const token = getTokenFromHeader(req);

//veriy the token
const decodedUser = verifyToken(token);
// console.log("token" , decodedUser);

 //save the user into req obj
req.userAuth = decodedUser.id;  
    
    if(!decodedUser){
        return next(appErr("Invalid/Expired token, please do login again!", 500))
    } else {
        next();
    }
};

module.exports = isLogin;