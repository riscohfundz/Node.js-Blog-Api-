const getTokenFromHeader = require("../utils/getTokenFromHeader");

const isLogin = (req, res, next)=>{
    //get token from header
const token = getTokenFromHeader(req);
    if(!token){
        return res.json({
            message: "There is no token attached to the header!"
        });
    } else {
        next();
    }
    //veriy the token
    //save the user into req obj
};

module.exports = isLogin;