const jtw = require("jsonwebtoken");

const generateToken = (id) => {
    return jtw.sign({id}, process.env.JTW_KEY, {expiresIn: "7d"})
};


module.exports = generateToken;